import { useState, useEffect, useRef } from "react";
import useGame from "../hooks/useGame";
import WordGrid    from "../components/WordGrid";
import ProgressBar from "../components/ProgressBar";
import WordChips   from "../components/WordChips";
import ClueList    from "../components/ClueList";
import VerdictForm from "../components/VerdictForm";
import TutorialOverlay from "../components/TutorialOverlay";
import HiddenWordPopup from "../components/HiddenWordPopup";

// Time limit in seconds per puzzle (tutorial = unlimited)
const TIME_LIMIT = 180; // 3 minutes for real cases

export default function GameScreen({ puzzle, onBack, onSolve, onTimeout }) {
  const [answer, setAnswer]   = useState({ culprit: "", language: "", location: "" });
  const [wrongAns, setWrongAns] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(puzzle?.isTutorialOnly ? null : TIME_LIMIT);
  const [timedOut, setTimedOut] = useState(false);
  const [showTutorialOverlay, setShowTutorialOverlay] = useState(puzzle?.isTutorial ?? false);

  const { foundWords, dragCells, dragging, flash, foundSet, dragSet, allFound,
          wrongCount, hiddenWordFound, startDrag, moveDrag, endDrag, registerWrongVerdict } =
    useGame(puzzle);

  // Reset when puzzle changes
  useEffect(() => {
    setAnswer({ culprit: "", language: "", location: "" });
    setWrongAns(false);
    setShowHint(false);
    setTimedOut(false);
    setTimeLeft(puzzle?.isTutorialOnly ? null : TIME_LIMIT);
    setShowTutorialOverlay(puzzle?.isTutorial ?? false);
  }, [puzzle?.id]);

  // Timer
  useEffect(() => {
    if (timeLeft === null || timedOut || allFound) return;
    if (timeLeft <= 0) {
      setTimedOut(true);
      return;
    }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, timedOut, allFound]);

  // Show hint after 3 wrong attempts
  useEffect(() => {
    if (wrongCount >= 3) setShowHint(true);
  }, [wrongCount]);

  // Tutorial: auto-advance when all words found
  useEffect(() => {
    if (puzzle?.isTutorialOnly && allFound) {
      setTimeout(() => onSolve(), 1200);
    }
  }, [allFound, puzzle?.isTutorialOnly]);

  function handleSubmit() {
    if (
      answer.culprit  === puzzle.culprit &&
      answer.language === puzzle.language &&
      answer.location === puzzle.location
    ) {
      onSolve();
    } else {
      setWrongAns(true);
      registerWrongVerdict();
      setTimeout(() => setWrongAns(false), 800);
    }
  }

  const mins = timeLeft !== null ? String(Math.floor(timeLeft / 60)).padStart(2, "0") : null;
  const secs = timeLeft !== null ? String(timeLeft % 60).padStart(2, "0") : null;
  const timerCritical = timeLeft !== null && timeLeft <= 30;

  // Hint: reveal one clue based on wrongCount
  const hintClue = showHint && puzzle.clues
    ? puzzle.clues[Math.min(wrongCount - 3, puzzle.clues.length - 1)]
    : null;

  if (timedOut) {
    return (
      <div className="game">
        <div className="timeout-screen">
          <div className="timeout-icon">⏱</div>
          <div className="timeout-title">TEMPO ESGOTADO</div>
          <div className="timeout-sub">O caso ficou sem solução. Os rastros se perderam.</div>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <button className="btn2 a" onClick={() => {
              setTimedOut(false);
              setTimeLeft(TIME_LIMIT);
            }}>↺ TENTAR NOVAMENTE</button>
            <button className="btn2 b" onClick={onBack}>← TODOS OS CASOS</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="game">
      {/* Tutorial overlay */}
      {showTutorialOverlay && (
        <TutorialOverlay onClose={() => setShowTutorialOverlay(false)} />
      )}

      {/* Hidden word popup */}
      {hiddenWordFound && (
        <HiddenWordPopup word={puzzle.hiddenAnswer} />
      )}

      {/* Header */}
      <div className="g-hdr">
        <button className="back" onClick={onBack}>← CASOS</button>
        <div
          className="g-badge"
          style={{
            background: puzzle.diffColor + "18",
            color: puzzle.diffColor,
            border: `1px solid ${puzzle.diffColor}44`,
          }}
        >
          {puzzle.isTutorial ? "" : `CASO ${puzzle.id}`} · {puzzle.difficulty}
        </div>
        <div className="g-title">{puzzle.title}</div>
        <div className="g-sub">{puzzle.subtitle}</div>

        {/* Timer */}
        {timeLeft !== null && (
          <div className={`g-timer${timerCritical ? " critical" : ""}`}>
            ⏱ {mins}:{secs}
          </div>
        )}
      </div>

      {/* Layout */}
      <div className="layout">
        {/* Left: grid */}
        <div>
          <div className="panel" style={{ display: "inline-block" }}>
            <div className="ptitle">▶ GRADE DE EVIDÊNCIAS</div>

            {/* Tutorial direction arrows */}
            {puzzle.isTutorial && (
              <div className="tutorial-arrows">
                {puzzle.wordList.map(w => (
                  <span key={w.word} className="tutorial-arrow-badge">
                    <span className="t-arrow">{w.tutorialHint}</span>
                    <span className="t-word">{w.word}</span>
                  </span>
                ))}
              </div>
            )}

            <WordGrid
              puzzle={puzzle}
              foundSet={foundSet}
              dragSet={dragSet}
              flash={flash}
              startDrag={startDrag}
              moveDrag={moveDrag}
              endDrag={endDrag}
            />
            <ProgressBar found={foundWords.length} total={puzzle.wordList.length} />
            <WordChips wordList={puzzle.wordList} foundWords={foundWords} allFound={allFound} />
          </div>
        </div>

        {/* Right: clues + verdict */}
        <div style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
          <ClueList clues={puzzle.clues} />

          {/* Hint box after multiple errors */}
          {hintClue && !puzzle.isTutorialOnly && (
            <div className="hint-box">
              <div className="hint-title">💡 DICA DO SISTEMA</div>
              <div className="hint-text">{hintClue}</div>
              <button className="hint-close" onClick={() => setShowHint(false)}>✕</button>
            </div>
          )}

          {!puzzle.isTutorialOnly && (
            <VerdictForm
              puzzle={puzzle}
              answer={answer}
              setAnswer={setAnswer}
              allFound={allFound}
              wrongAns={wrongAns}
              onSubmit={handleSubmit}
            />
          )}

          {puzzle.isTutorialOnly && allFound && (
            <div className="tutorial-complete">
              <div>✔ TREINAMENTO CONCLUÍDO!</div>
              <div style={{ fontSize: ".65rem", marginTop: ".4rem", color: "#5a8aaa" }}>
                Avançando para o primeiro caso…
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
