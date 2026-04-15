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
  const [dragCells, setDragCells] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [flash, setFlash] = useState(null);
  const [errorFlash, setErrorFlash] = useState(null);  // NOVO
  const [wrongCount, setWrongCount] = useState(0);
  const [hiddenWordFound, setHiddenWordFound] = useState(false);
  const [score, setScore] = useState(0);      // NOVO
  const [hintsUsed, setHintsUsed] = useState(0);      // NOVO
  const [wrongAttempts, setWrongAttempts] = useState(0); // NOVO
  const startCell = useRef(null);

  // Reset when puzzle changes + carregar progresso salvo
  useEffect(() => {
    if (puzzle && !puzzle.isTutorial && !puzzle.isTutorialOnly) {
      const saved = localStorage.getItem(`puzzle_${puzzle.id}_progress`);
      if (saved) {
        const { foundWords: savedFound, score: savedScore, hintsUsed: savedHints } = JSON.parse(saved);
        if (savedFound && savedFound.length) {
          setFoundWords(savedFound);
          setScore(savedScore || 0);
          setHintsUsed(savedHints || 0);
        } else {
          setFoundWords([]);
          setScore(0);
          setHintsUsed(0);
        }
      } else {
        setFoundWords([]);
        setScore(0);
        setHintsUsed(0);
      }
    } else {
      setFoundWords([]);
      setScore(0);
      setHintsUsed(0);
    }
    setDragCells([]);
    setDragging(false);
    setFlash(null);
    setErrorFlash(null);
    setWrongCount(0);
    setHiddenWordFound(false);
    setWrongAttempts(0);
    startCell.current = null;
  }, [puzzle?.id, puzzle?.isTutorial, puzzle?.isTutorialOnly]);

  // Salvar progresso
  useEffect(() => {
    if (puzzle && !puzzle.isTutorial && !puzzle.isTutorialOnly && foundWords.length > 0) {
      localStorage.setItem(`puzzle_${puzzle.id}_progress`, JSON.stringify({
        foundWords,
        score,
        hintsUsed
      }));
    }
  }, [foundWords, puzzle, score, hintsUsed]);

  const foundSet = new Set(
    foundWords.flatMap((w) => {
      const e = puzzle?.wordList.find((x) => x.word === w);
      return e ? e.cells.map(({ r, c }) => cellKey(r, c)) : [];
    })
  );
  const dragSet = new Set(dragCells.map(({ r, c }) => cellKey(r, c)));
  const allFound = puzzle?.wordList.every((e) => foundWords.includes(e.word)) ?? false;

  function tryMatch(cells) {
    if (!puzzle) return null;
    for (const entry of puzzle.wordList) {
      if (foundWords.includes(entry.word)) continue;
      if (entry.cells.length !== cells.length) continue;
      const fwd = entry.cells.every((ec, i) => ec.r === cells[i].r && ec.c === cells[i].c);
      const rev = entry.cells.every((ec, i) => ec.r === cells[cells.length - 1 - i].r && ec.c === cells[cells.length - 1 - i].c);
      if (fwd || rev) {
        if (entry.hidden) setHiddenWordFound(true);
        return entry.word;
      }
    }
    return null;
  }

  function isValidLine(r0, c0, r1, c1) {
    const dr = r1 - r0, dc = c1 - c0;
    if (dr === 0 && dc === 0) return true;
    if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return false;
    return true;
  }

  function startDrag(r, c) {
    if (foundSet.has(cellKey(r, c))) return;
    startCell.current = { r, c };
    setDragging(true);
    setDragCells([{ r, c }]);
  }

  function moveDrag(r, c) {
    if (!dragging || !startCell.current) return;
    const { r: r0, c: c0 } = startCell.current;

    if (!isValidLine(r0, c0, r, c)) return;

    const cells = getLineCells(r0, c0, r, c);
    const hasFound = cells.some(cell => foundSet.has(cellKey(cell.r, cell.c)));
    if (hasFound) return;

    setDragCells(cells);
  }

  function endDrag() {
    if (!dragging) return;

    const matched = tryMatch(dragCells);
    if (matched) {
      const pointsEarned = Math.max(10, 100 - (hintsUsed * 15));
      setScore(prev => prev + pointsEarned);
      setFoundWords((prev) => [...prev, matched]);
      setFlash(matched);
      setTimeout(() => setFlash(null), 900);
    } else if (dragCells.length >= 3) {
      const attemptedWord = dragCells.map(({ r, c }) => puzzle?.grid[r][c]).join("");
      setErrorFlash(attemptedWord);
      setWrongCount(prev => prev + 1);
      setWrongAttempts(prev => prev + 1);
      setTimeout(() => setErrorFlash(null), 600);
    }

    setDragging(false);
    setDragCells([]);
    startCell.current = null;
  }

  function useHint() {
    if (allFound) return null;
    if (!puzzle) return null;
    if (puzzle.isTutorial || puzzle.isTutorialOnly) return null;

    const remainingWords = puzzle.wordList.filter(w => !foundWords.includes(w.word) && !w.hidden);
    if (remainingWords.length === 0) return null;

    const randomWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
    setHintsUsed(prev => prev + 1);
    setFlash(randomWord.word);
    setTimeout(() => setFlash(null), 1500);

    return randomWord.word;
  }

  function resetProgress() {
    if (puzzle && !puzzle.isTutorial && !puzzle.isTutorialOnly) {
      localStorage.removeItem(`puzzle_${puzzle.id}_progress`);
    }
    setFoundWords([]);
    setScore(0);
    setHintsUsed(0);
    setWrongCount(0);
    setWrongAttempts(0);
    setHiddenWordFound(false);
    setDragCells([]);
    setDragging(false);
    setFlash(null);
    setErrorFlash(null);
    startCell.current = null;
  }

  function registerWrongVerdict() {
    setWrongCount(prev => prev + 1);
  }

  return {
    foundWords, dragCells, dragging, flash, errorFlash, foundSet, dragSet, allFound,
    wrongCount, hiddenWordFound, score, hintsUsed, wrongAttempts,
    startDrag, moveDrag, endDrag, registerWrongVerdict, useHint, resetProgress
  };
}
