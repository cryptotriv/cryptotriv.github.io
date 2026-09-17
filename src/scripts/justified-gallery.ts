export interface GalleryRow {
  start: number;
  end: number;
  height: number;
  complete: boolean;
}

const maxStretch = 1.6;

export function planRows(ratios: number[], width: number, gap: number, targetHeight: number): GalleryRow[] {
  const rows: GalleryRow[] = [];
  let start = 0;
  while (start < ratios.length) {
    let sum = 0;
    let row: GalleryRow | undefined;
    for (let index = start; index < ratios.length; index += 1) {
      sum += ratios[index];
      const count = index - start + 1;
      const height = (width - gap * (count - 1)) / sum;
      if (height > targetHeight) {
        continue;
      }
      const previousHeight = count > 1 ? (width - gap * (count - 2)) / (sum - ratios[index]) : Infinity;
      const preferPrevious = previousHeight <= targetHeight * maxStretch && previousHeight - targetHeight < targetHeight - height;
      row = preferPrevious
        ? { start, end: index - 1, height: previousHeight, complete: true }
        : { start, end: index, height, complete: true };
      break;
    }
    row ??= { start, end: ratios.length - 1, height: targetHeight, complete: false };
    rows.push(row);
    start = row.end + 1;
  }
  return rows;
}

export function justifyGallery(grid: HTMLElement): void {
  const items = Array.from(grid.querySelectorAll<HTMLElement>('[data-ratio]'));
  const ratios = items.map((item) => Number(item.dataset.ratio));

  const layout = () => {
    const style = getComputedStyle(grid);
    const width = grid.clientWidth;
    const gap = parseFloat(style.columnGap);
    const targetHeight = parseFloat(style.getPropertyValue('--row'));
    const maxRows = style.getPropertyValue('--max-rows').trim();
    const planned = planRows(ratios, width, gap, targetHeight);
    const complete = planned.filter((row) => row.complete);
    const rows = maxRows === '' ? planned : (complete.length > 0 ? complete : planned).slice(0, Number(maxRows));
    const shown = new Set<number>();
    for (const row of rows) {
      let used = 0;
      for (let index = row.start; index <= row.end; index += 1) {
        const last = index === row.end;
        const itemWidth = row.complete && last ? width - used - gap * (row.end - row.start) : Math.floor(ratios[index] * row.height);
        items[index].style.width = `${itemWidth}px`;
        items[index].style.height = `${row.height}px`;
        shown.add(index);
        used += itemWidth;
      }
    }
    items.forEach((item, index) => {
      item.hidden = !shown.has(index);
    });
    grid.dataset.justified = '';
  };

  let lastWidth = -1;
  new ResizeObserver(() => {
    if (grid.clientWidth !== lastWidth) {
      lastWidth = grid.clientWidth;
      layout();
    }
  }).observe(grid);
}
