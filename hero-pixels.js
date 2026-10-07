/* Cursor-driven type disintegration. The real heading remains the accessible text. */
(() => {
  const heading = document.querySelector('.hero #intro');
  if (!heading) return;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const padding = 36;
  const first = document.createElement('span');
  first.textContent = 'Still human.';
  const second = heading.querySelector('em');
  const lines = [first, second].map(text => {
    const line = document.createElement('span');
    line.className = 'hero-type-line';
    text.classList.add('hero-type-text');
    line.append(text);
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-pixels';
    canvas.setAttribute('aria-hidden', 'true');
    line.append(canvas);
    return { line, text, canvas, context: canvas.getContext('2d'), source: document.createElement('canvas'), cells: [], pointer: null, frame: 0 };
  });
  heading.replaceChildren(lines[0].line, document.createElement('br'), lines[1].line);

  function reset(state) {
    cancelAnimationFrame(state.frame);
    state.frame = 0;
    state.pointer = null;
    state.line.classList.remove('is-pixel-active');
    state.cells.forEach(cell => { cell.dx = cell.dy = cell.energy = 0; });
  }

  function rasterize(state) {
    reset(state);
    const style = getComputedStyle(state.text);
    const rect = state.text.getBoundingClientRect();
    if (!rect.width || !rect.height || !state.context) return;
    state.width = Math.ceil(rect.width + padding * 2);
    state.height = Math.ceil(rect.height + padding * 2);
    state.dpr = Math.min(devicePixelRatio || 1, 2);
    state.canvas.width = Math.ceil(state.width * state.dpr);
    state.canvas.height = Math.ceil(state.height * state.dpr);
    state.canvas.style.width = state.width + 'px';
    state.canvas.style.height = state.height + 'px';
    state.source.width = state.width;
    state.source.height = state.height;
    const source = state.source.getContext('2d', { willReadFrequently: true });
    source.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    source.fillStyle = style.color;
    source.textBaseline = 'alphabetic';
    const metrics = source.measureText(state.text.textContent);
    const ascent = metrics.fontBoundingBoxAscent ?? parseFloat(style.fontSize) * .9;
    const descent = metrics.fontBoundingBoxDescent ?? parseFloat(style.fontSize) * .22;
    const baseline = padding + (rect.height - ascent - descent) / 2 + ascent;
    // DOM ranges retain the browser's kerning and negative letter spacing.
    const node = state.text.firstChild;
    for (let i = 0; i < node.length; i++) {
      const range = document.createRange();
      range.setStart(node, i);
      range.setEnd(node, i + 1);
      const letter = range.getBoundingClientRect();
      source.fillText(node.textContent[i], padding + letter.left - rect.left, baseline);
    }
    state.step = Math.max(4, Math.min(7, Math.round(parseFloat(style.fontSize) / 23)));
    state.radius = Math.max(65, Math.min(135, parseFloat(style.fontSize) * .78));
    state.color = style.color;
    const data = source.getImageData(0, 0, state.width, state.height).data;
    state.cells = [];
    for (let y = 0; y < state.height; y += state.step) {
      for (let x = 0; x < state.width; x += state.step) {
        let alpha = 0;
        for (let yy = y; yy < Math.min(y + state.step, state.height); yy++) {
          for (let xx = x; xx < Math.min(x + state.step, state.width); xx++) alpha += data[(yy * state.width + xx) * 4 + 3];
        }
        alpha /= state.step * state.step * 255;
        if (alpha > .025) state.cells.push({ x, y, alpha, dx: 0, dy: 0, energy: 0 });
      }
    }
  }

  function render(state) {
    state.frame = 0;
    const ctx = state.context;
    ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    ctx.clearRect(0, 0, state.width, state.height);
    ctx.drawImage(state.source, 0, 0);
    let moving = false;
    const updates = [];
    for (const cell of state.cells) {
      let strength = 0, tx = 0, ty = 0;
      if (state.pointer) {
        const vx = cell.x + state.step / 2 - state.pointer.x;
        const vy = cell.y + state.step / 2 - state.pointer.y;
        const distance = Math.hypot(vx, vy);
        strength = Math.max(0, 1 - distance / state.radius);
        strength *= strength;
        const displacement = strength * 30;
        tx = vx / (distance || 1) * displacement;
        ty = vy / (distance || 1) * displacement;
      }
      cell.dx += (tx - cell.dx) * .18;
      cell.dy += (ty - cell.dy) * .18;
      cell.energy += (strength - cell.energy) * .18;
      if (cell.energy > .004 || Math.abs(cell.dx) + Math.abs(cell.dy) > .06) {
        moving = true;
        // Remove the original glyph tile before painting displaced square pixels.
        ctx.clearRect(cell.x, cell.y, state.step, state.step);
        updates.push(cell);
      }
    }
    ctx.fillStyle = state.color;
    for (const cell of updates) {
      // Blend intact tiles into square particles only near the pointer.
      const pixelation = Math.min(1, cell.energy * 4.5);
      if (pixelation < 1) {
        ctx.globalAlpha = 1 - pixelation;
        ctx.drawImage(state.source, cell.x, cell.y, state.step, state.step, cell.x + cell.dx, cell.y + cell.dy, state.step, state.step);
      }
      ctx.globalAlpha = cell.alpha * pixelation;
      const size = state.step * (.85 + cell.energy * .35);
      ctx.fillRect(Math.round(cell.x + cell.dx), Math.round(cell.y + cell.dy), size, size);
    }
    ctx.globalAlpha = 1;
    if (moving || state.pointer) {
      state.line.classList.add('is-pixel-active');
      state.frame = requestAnimationFrame(() => render(state));
    } else reset(state);
  }

  for (const state of lines) {
    state.line.addEventListener('pointermove', event => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType === 'touch') return;
      const rect = state.line.getBoundingClientRect();
      state.pointer = { x: event.clientX - rect.left + padding, y: event.clientY - rect.top + padding };
      if (!state.frame) state.frame = requestAnimationFrame(() => render(state));
    });
    state.line.addEventListener('pointerleave', () => { state.pointer = null; });
    state.line.addEventListener('pointercancel', () => { state.pointer = null; });
  }
  function refresh() { lines.forEach(rasterize); }
  new ResizeObserver(refresh).observe(heading);
  document.fonts.ready.then(refresh);
  reducedMotion.addEventListener('change', () => lines.forEach(reset));
  finePointer.addEventListener('change', () => lines.forEach(reset));
  document.addEventListener('visibilitychange', () => { if (document.hidden) lines.forEach(reset); });
})();
