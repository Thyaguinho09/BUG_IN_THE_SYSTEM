import { useState, useEffect } from "react";
import "./styles/global.css";
import PUZZLES from "./data/index";
import IntroScreen  from "./screens/IntroScreen";
import GameScreen   from "./screens/GameScreen";
import ResultScreen from "./screens/ResultScreen";

export default function App() {
  const [screen, setScreen] = useState("intro");
  const [pidx, setPidx] = useState(0);
  const [progress, setProgress] = useState(
    Number(localStorage.getItem("progress")) || 0
  );

  useEffect(() => {
    localStorage.setItem("progress", progress);
  }, [progress]);

  const puzzle = PUZZLES[pidx];

  return (
    <>
      {screen === "intro" && (
        <IntroScreen
          progress={progress}
          onStart={(idx) => {
            if (idx <= progress) {
              setPidx(idx);
              setScreen("game");
            }
          }}
        />
      )}

      {screen === "game" && (
        <GameScreen
          puzzle={puzzle}
          onBack={() => setScreen("intro")}
          onSolve={() => {
            setProgress((prev) => Math.max(prev, pidx + 1));
            setScreen("result");
          }}
          onTimeout={() => setScreen("intro")}
        />
      )}

      {screen === "result" && (
        <ResultScreen
          puzzle={puzzle}
          pidx={pidx}
          onNext={() => {
            setPidx(i => i + 1);
            setScreen("game");
          }}
          onBack={() => setScreen("intro")}
        />
      )}
    </>
  );
}
