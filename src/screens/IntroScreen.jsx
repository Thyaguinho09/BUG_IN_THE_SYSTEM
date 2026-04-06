import PUZZLES from "../data/index";

export default function IntroScreen({ onStart }) {
  return (
    <div className="intro">
      <div className="logo">BUG<em> In The System</em></div>
      <div className="logo-sub">CAÇA-PALAVRAS DE MISTÉRIO EM TI</div>

      <div className="cards">
        {PUZZLES.map((p, i) => (
          <div key={p.id} className="card" onClick={() => onStart(i)}>
            <div className="card-n">0{p.id}</div>
            <div className="card-d" style={{ color: p.diffColor }}>{p.difficulty}</div>
            <div className="card-t">{p.title}</div>
            <div className="card-s">{p.subtitle}</div>
            <div className="card-wc">{p.wordList.length} PALAVRAS · CLIQUE PARA JOGAR</div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: ".6rem", color: "#0d1e30", letterSpacing: "3px" }}>
        ARRASTE NA GRADE PARA MARCAR PALAVRAS
      </div>
    </div>
  );
}
