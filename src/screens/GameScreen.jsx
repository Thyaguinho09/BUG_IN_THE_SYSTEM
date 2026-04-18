import { useState, useEffect, useRef } from "react";
import useGame from "../hooks/useGame";
import WordGrid from "../components/WordGrid";
import ProgressBar from "../components/ProgressBar";
import WordChips from "../components/WordChips";
import ClueList from "../components/ClueList";
import VerdictForm from "../components/VerdictForm";
import TutorialOverlay from "../components/TutorialOverlay";
import HiddenWordPopup from "../components/HiddenWordPopup";
import HintButton from "../components/HintButton";
import ScoreDisplay from "../components/ScoreDisplay";
import ErrorFeedback from "../components/ErrorFeedback";

const TIME_LIMIT = 180; // 3 minutos

export default function GameScreen({ puzzle, onBack, onSolve, onTimeout, playerStats }) {
  const [answer, setAnswer] = useState({ culprit: "", language: "", location: "" });
  const [wrongAns, setWrongAns] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(puzzle?.isTutorialOnly ? null : TIME_LIMIT);
  const [timedOut, setTimedOut] = useState(false);
  const [showTutorialOverlay, setShowTutorialOverlay] = useState(puzzle?.isTutorial ?? false);
  const [startTime] = useState(Date.now());
  const gameCompleted = useRef(false);

  const {
    foundWords,
    dragCells,
    flash,
    errorFlash,
    foundSet,
    dragSet,
    allFound,
    wrongCount,
    hiddenWordFound,
    score,
    hintsUsed,
    wrongAttempts,
    startDrag,
    moveDrag,
    endDrag,
    registerWrongVerdict,
    useHint,
    resetProgress
  } = useGame(puzzle);

  // Timer
  useEffect(() => {
    if (timeLeft === null || timedOut || allFound) return;

    if (timeLeft <= 0) {
      setTimedOut(true);
      if (onTimeout) onTimeout();
      return;
    }

    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, timedOut, allFound, onTimeout]);

  // Auto-complete tutorial
  useEffect(() => {
    if (puzzle?.isTutorialOnly && allFound && !gameCompleted.current) {
      gameCompleted.current = true;
      setTimeout(() => onSolve(score, hintsUsed, wrongAttempts, TIME_LIMIT - timeLeft), 1200);
    }
  }, [allFound, puzzle?.isTutorialOnly, onSolve, score, hintsUsed, wrongAttempts, timeLeft]);

  // Dica automática após 3 erros
  useEffect(() => {
    if (wrongCount >= 3) setShowHint(true);
  }, [wrongCount]);

  function handleSubmit() {
    if (gameCompleted.current) return;
    
    if (
      answer.culprit === puzzle.culprit &&
      answer.language === puzzle.language &&
      answer.location === puzzle.location
    ) {
      gameCompleted.current = true;
      const timeSpent = TIME_LIMIT - (timeLeft ?? 0);
      // Bônus por tempo restante
      const timeBonus = timeLeft ? Math.floor(timeLeft / 10) * 5 : 0;
      const finalScore = score + timeBonus;
      onSolve(finalScore, hintsUsed, wrongAttempts, timeSpent);
    } else {
      setWrongAns(true);
      registerWrongVerdict();
      setTimeout(() => setWrongAns(false), 800);
    }
  }

  const mins = timeLeft !== null ? String(Math.floor(timeLeft / 60)).padStart(2, "0") : null;
  const secs = timeLeft !== null ? String(timeLeft % 60).padStart(2, "0") : null;
  const timerCritical = timeLeft !== null && timeLeft <= 30;

  if (timedOut) {
    return (
      <div className="game">
        <div className="timeout-screen">
          <div className="timeout-icon">⏱</div>
          <div className="timeout-title">TEMPO ESGOTADO</div>
          <div className="timeout-sub">O caso ficou sem solução. Os rastros se perderam.</div>
          <div className="btn-row" style={{ marginTop: "1.5rem" }}>
            <button className="btn2 a" onClick={() => window.location.reload()}>↺ TENTAR NOVAMENTE</button>
            <button className="btn2 b" onClick={onBack}>← TODOS OS CASOS</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="game">
      {showTutorialOverlay && (
        <TutorialOverlay onClose={() => setShowTutorialOverlay(false)} />
      )}

      {hiddenWordFound && <HiddenWordPopup word={puzzle.hiddenAnswer} />}

      <div className="g-hdr">
        <button className="back-btn" onClick={onBack}>← CASOS</button>

        <div
          className="g-badge"
          style={{
            background: puzzle.diffColor + "18",
            color: puzzle.diffColor,
            border: `1px solid ${puzzle.diffColor}44`
          }}
        >
          {puzzle.isTutorial ? "TUTORIAL" : `CASO ${puzzle.id}`} • {puzzle.difficulty}
        </div>

        <div className="g-title">{puzzle.title}</div>
        <div className="g-sub">{puzzle.subtitle}</div>

        {timeLeft !== null && (
          <div className={`g-timer${timerCritical ? " critical" : ""}`}>
            ⏱ {mins}:{secs}
          </div>
        )}
      </div>

      <div className="layout">
        <div>
          <div className="panel">
            <div className="ptitle">▶ GRADE DE EVIDÊNCIAS</div>

            <WordGrid
              puzzle={puzzle}
              foundSet={foundSet}
              dragSet={dragSet}
              flash={flash}
              errorFlash={errorFlash}
              startDrag={startDrag}
              moveDrag={moveDrag}
              endDrag={endDrag}
            />

            <ProgressBar found={foundWords.length} total={puzzle.wordList.length} />
            <WordChips wordList={puzzle.wordList} foundWords={foundWords} allFound={allFound} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: ".8rem" }}>
          {!puzzle.isTutorial && !puzzle.isTutorialOnly && (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <ScoreDisplay score={score} />
              <HintButton onHint={useHint} hintsUsed={hintsUsed} disabled={allFound} />
            </div>
          )}

          <ErrorFeedback errorWord={errorFlash} />

          <ClueList clues={puzzle.clues} />

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