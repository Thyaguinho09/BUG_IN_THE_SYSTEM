import { useState, useRef, useEffect } from "react";

export function cellKey(r, c) {
  return `${r},${c}`;
}

export function getLineCells(r0, c0, r1, c1) {
  const dr = r1 - r0, dc = c1 - c0;
  if (dr === 0 && dc === 0) return [{ r: r0, c: c0 }];
  const absDr = Math.abs(dr), absDc = Math.abs(dc);
  if (dr !== 0 && dc !== 0 && absDr !== absDc) return [{ r: r0, c: c0 }];
  const steps = Math.max(absDr, absDc);
  const sr = Math.sign(dr), sc = Math.sign(dc);
  const cells = [];
  for (let i = 0; i <= steps; i++) cells.push({ r: r0 + i * sr, c: c0 + i * sc });
  return cells;
}

export default function useGame(puzzle) {
  const [foundWords, setFoundWords] = useState([]);
  const [dragCells, setDragCells]   = useState([]);
  const [dragging, setDragging]     = useState(false);
  const [flash, setFlash]           = useState(null);
  const startCell = useRef(null);

  // Reset when puzzle changes
  useEffect(() => {
    setFoundWords([]);
    setDragCells([]);
    setDragging(false);
    setFlash(null);
    startCell.current = null;
  }, [puzzle?.id]);

  const foundSet = new Set(
    foundWords.flatMap((w) => {
      const e = puzzle?.wordList.find((x) => x.word === w);
      return e ? e.cells.map(({ r, c }) => cellKey(r, c)) : [];
    })
  );
  const dragSet  = new Set(dragCells.map(({ r, c }) => cellKey(r, c)));
  const allFound = puzzle?.wordList.every((e) => foundWords.includes(e.word)) ?? false;

  function tryMatch(cells) {
    if (!puzzle) return null;
    for (const entry of puzzle.wordList) {
      if (foundWords.includes(entry.word)) continue;
      if (entry.cells.length !== cells.length) continue;
      const fwd = entry.cells.every((ec, i) => ec.r === cells[i].r && ec.c === cells[i].c);
      const rev = entry.cells.every((ec, i) => ec.r === cells[cells.length - 1 - i].r && ec.c === cells[cells.length - 1 - i].c);
      if (fwd || rev) return entry.word;
    }
    return null;
  }

  function startDrag(r, c) {
    startCell.current = { r, c };
    setDragging(true);
    setDragCells([{ r, c }]);
  }

  function moveDrag(r, c) {
    if (!dragging || !startCell.current) return;
    const { r: r0, c: c0 } = startCell.current;
    setDragCells(getLineCells(r0, c0, r, c));
  }

  function endDrag() {
    if (!dragging) return;
    const matched = tryMatch(dragCells);
    if (matched) {
      setFoundWords((prev) => [...prev, matched]);
      setFlash(matched);
      setTimeout(() => setFlash(null), 900);
    }
    setDragging(false);
    setDragCells([]);
    startCell.current = null;
  }

  return { foundWords, dragCells, dragging, flash, foundSet, dragSet, allFound, startDrag, moveDrag, endDrag };
}
