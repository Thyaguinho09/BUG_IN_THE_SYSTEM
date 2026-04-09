import { useState, useEffect } from "react";
import "./styles/global.css";
import PUZZLES from "./data/index";
import IntroScreen  from "./screens/IntroScreen";
import GameScreen   from "./screens/GameScreen";
import ResultScreen from "./screens/ResultScreen";

export default function App() {
  // 👉 controla qual tela está ativa
  const [screen, setScreen] = useState("intro");

  // 👉 índice do puzzle atual
  const [pidx, setPidx] = useState(0);

  // 👉 progresso salvo (qual fase máxima desbloqueada)
  const [progress, setProgress] = useState(
    Number(localStorage.getItem("progress")) || 0
  );

  // 👉 salva no navegador sempre que mudar
  useEffect(() => {
    localStorage.setItem("progress", progress);
  }, [progress]);

  const puzzle = PUZZLES[pidx];

  return (
    <>
      {/* ================= INTRO ================= */}
      {screen === "intro" && (
        <IntroScreen 
          progress={progress} // 👉 envia progresso
          
          // 👉 só permite entrar se estiver desbloqueado
          onStart={(idx) => { 
            if (idx <= progress) {
              setPidx(idx);
              setScreen("game");
            }
          }} 
        />
      )}

      {/* ================= GAME ================= */}
      {screen === "game" && (
        <GameScreen  
          puzzle={puzzle}

          onBack={() => setScreen("intro")}

          onSolve={() => {
            // 👉 libera próxima fase
            setProgress((prev) => Math.max(prev, pidx + 1));

            setScreen("result");
          }} 
        />
      )}

      {/* ================= RESULT ================= */}
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