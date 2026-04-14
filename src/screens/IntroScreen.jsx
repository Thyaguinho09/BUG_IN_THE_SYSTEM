import PUZZLES from "../data/index";

export default function IntroScreen({ onStart, progress }) {
  return (
    <div className="intro">
      <div className="logo">
        BUG<em> In The System</em>
      </div>

      <div className="logo-sub" style={{ color: "#0245ff" }}>
        CAÇA-PALAVRAS DE MISTÉRIO EM TI
      </div>

      <div className="cards">
        {PUZZLES.map((p, i) => {
          const locked = i > progress;
          const isTutorial = p.isTutorial;

          return (
            <div
              key={p.id}
              className={`card ${locked ? "locked" : ""} ${isTutorial ? "card-tutorial" : ""}`}
              onClick={() => {
                if (!locked) onStart(i);
              }}
            >
              <div className="card-n">{isTutorial ? "00" : `0${p.id}`}</div>

              <div
                className="card-d"
                style={{ color: p.diffColor }}
              >
                {p.difficulty}
              </div>

              <div className="card-t">{p.title}</div>
              <div className="card-s">{p.subtitle}</div>

              <div className="card-wc">
                {isTutorial
                  ? "TUTORIAL · SEM TIMER · CLIQUE PARA COMEÇAR"
                  : `${p.wordList.length} PALAVRAS · ⏱ 3 MIN · CLIQUE PARA JOGAR`}
              </div>

              {locked && (
                <div className="lock-overlay">
                  🔒 BLOQUEADO
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ fontSize: ".6rem", color: "#0245ff", letterSpacing: "3px" }}>
        ARRASTE NA GRADE PARA MARCAR PALAVRAS · DIAGONAL INCLUÍDA
      </div>
    </div>
  );
}
