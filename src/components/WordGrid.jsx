import { useRef } from "react";
import { cellKey } from "../hooks/useGame";

export default function WordGrid({ puzzle, foundSet, dragSet, flash, errorFlash, startDrag, moveDrag, endDrag }) {
  const gridRef = useRef(null);

  function cellFromPoint(x, y) {
    const el = document.elementFromPoint(x, y);
    if (!el) return null;
    const r = parseInt(el.dataset.r);
    const c = parseInt(el.dataset.c);
    if (isNaN(r) || isNaN(c)) return null;
    return { r, c };
  }

  function onTouchStart(e) {
    const t = e.touches[0];
    const cell = cellFromPoint(t.clientX, t.clientY);
    if (cell) startDrag(cell.r, cell.c);
  }

  function onTouchMove(e) {
    e.preventDefault();
    const t = e.touches[0];
    const cell = cellFromPoint(t.clientX, t.clientY);
    if (cell) moveDrag(cell.r, cell.c);
  }

  const flashCells = flash
    ? new Set((puzzle.wordList.find((e) => e.word === flash)?.cells ?? []).map(({ r, c }) => cellKey(r, c)))
    : new Set();

  return (
    <div
      ref={gridRef}
      className="grid-wrap"
      onMouseLeave={() => endDrag()}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={endDrag}
      onTouchCancel={endDrag}
    >
      {puzzle.grid.map((row, r) => (
        <div key={r} className="grid-row">
          {row.map((letter, c) => {
            const k = cellKey(r, c);
            const isFound = foundSet.has(k);
            const isSel = dragSet.has(k) && !isFound;
            const isFlash = flashCells.has(k);
            return (
              <div
                key={k}
                className={cell${isFound ? " found" : ""} ${isSel ? " sel" : ""} ${isFlash ? " flash" : ""}}
                data - r= { r }
                data-c={c}
          onMouseDown={() => startDrag(r, c)}
          onMouseEnter={() => moveDrag(r, c)}
          onMouseUp={endDrag}
              >
          <span className="cl">{letter}</span>
        </div>
      );
          })}
    </div>
  ))
}
    </div >
  );
}