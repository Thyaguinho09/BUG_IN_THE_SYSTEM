import { useState, useEffect } from 'react';
import IntroScreen from './screens/IntroScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';
import PUZZLES from './data/index';
import './styles/global.css';
import useRanking from "./hooks/useRanking";


export default function App() {
  const [screen, setScreen] = useState('intro');
  const [currentPuzzleIdx, setCurrentPuzzleIdx] = useState(0);
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('gameProgress');
    return saved ? JSON.parse(saved) : 0;
  });

  // Estado do jogador para ranking
  const [playerStats, setPlayerStats] = useState(() => {
    const saved = localStorage.getItem('playerStats');
    return saved
      ? JSON.parse(saved)
      : {
          name: 'Você',
          totalScore: 0,
          casesSolved: 0,
          totalTipsUsed: 0,
          totalWrongAttempts: 0,
          bestTimePerCase: {},
          achievements: {
            novice: false,
            intermediate: false,
            master: false,
            speedDemon: false,
            noTips: false,
          },
        };
  });

  useEffect(() => {
    localStorage.setItem('gameProgress', JSON.stringify(progress));
    localStorage.setItem('playerStats', JSON.stringify(playerStats));
  }, [progress, playerStats]);

  const handleStart = (idx) => {
    setCurrentPuzzleIdx(idx);
    setScreen('game');
  };

  const handleSolve = (score, hintsUsed, wrongAttempts, timeSpent) => {
    setPlayerStats((prev) => {
      const newStats = { ...prev };

      newStats.totalScore += score;
      newStats.casesSolved += 1;
      newStats.totalTipsUsed += hintsUsed;
      newStats.totalWrongAttempts += wrongAttempts;

      // Melhor tempo por caso
      if (
        !newStats.bestTimePerCase[currentPuzzleIdx] ||
        timeSpent < newStats.bestTimePerCase[currentPuzzleIdx]
      ) {
        newStats.bestTimePerCase[currentPuzzleIdx] = timeSpent;
      }

      // Conquistas
      if (newStats.totalScore >= 100) newStats.achievements.novice = true;
      if (newStats.totalScore >= 500) newStats.achievements.intermediate = true;
      if (newStats.totalScore >= 1000) newStats.achievements.master = true;
      if (newStats.totalTipsUsed === 0 && newStats.casesSolved >= 1)
        newStats.achievements.noTips = true;

      return newStats;
    });

    // Desbloqueia próximo caso
    if (currentPuzzleIdx + 1 > progress && currentPuzzleIdx + 1 < PUZZLES.length) {
      setProgress(currentPuzzleIdx + 1);
    }

    setScreen('result');
  };

  const handleTimeout = () => {
    setScreen('intro');
  };

  const handleBack = () => {
    setScreen('intro');
  };

  const handleNextCase = () => {
    if (currentPuzzleIdx + 1 < PUZZLES.length) {
      setCurrentPuzzleIdx(currentPuzzleIdx + 1);
      setScreen('game');
    } else {
      setScreen('intro');
    }
  };

  return (
    <>
      {screen === 'intro' && (
        <IntroScreen
          onStart={handleStart}
          progress={progress}
          playerStats={playerStats}
        />
      )}

      {screen === 'game' && (
        <GameScreen
          puzzle={PUZZLES[currentPuzzleIdx]}
          onBack={handleBack}
          onSolve={(score, hintsUsed, wrongAttempts, timeSpent) =>
            handleSolve(score, hintsUsed, wrongAttempts, timeSpent)
          }
          onTimeout={handleTimeout}
          playerStats={playerStats}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          puzzle={PUZZLES[currentPuzzleIdx]}
          pidx={currentPuzzleIdx}
          onNext={handleNextCase}
          onBack={handleBack}
          playerStats={playerStats}
        />
      )}
    </>
  );
}