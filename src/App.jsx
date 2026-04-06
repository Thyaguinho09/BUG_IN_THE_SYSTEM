import { useState } from "react";
import "./styles/global.css";
import PUZZLES from "./data/index";
import IntroScreen  from "./screens/IntroScreen";
import GameScreen   from "./screens/GameScreen";
import ResultScreen from "./screens/ResultScreen";

export default function App() {
  const [screen, setScreen] = useState("intro");
  const [pidx, setPidx]     = useState(0);

  const puzzle = PUZZLES[pidx];

  return (
    <>
      {screen === "intro"  && <IntroScreen onStart={(idx) => { setPidx(idx); setScreen("game"); }} />}
      {screen === "game"   && <GameScreen  puzzle={puzzle} onBack={() => setScreen("intro")} onSolve={() => setScreen("result")} />}
      {screen === "result" && <ResultScreen puzzle={puzzle} pidx={pidx} onNext={() => { setPidx(i => i+1); setScreen("game"); }} onBack={() => setScreen("intro")} />}
    </>
  );
}
