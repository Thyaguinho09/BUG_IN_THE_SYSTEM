import PUZZLES from "../data/index";

export default function ResultScreen({ puzzle, pidx, onNext, onBack }) {
  return (
    <div className="result">
      <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: ".55rem", letterSpacing: "6px", color: "#1e3d55", marginBottom: ".4rem" }}>
        CASO {puzzle.id} · {puzzle.difficulty}
      </div>
      <div className="res-big">CASO FECHADO</div>
      <div style={{ color: "#1e3d55", letterSpacing: "4px", fontSize: ".6rem", margin: ".4rem 0 1rem", fontFamily: "'Orbitron',sans-serif" }}>
        INVESTIGAÇÃO CONCLUÍDA
      </div>

      <div className="res-card">
        <div className="ptitle" style={{ marginBottom: ".4rem" }}>▶ RELATÓRIO FINAL</div>
        {[
          ["👤 CULPADO",    puzzle.culprit],
          ["💻 LINGUAGEM",  puzzle.language],
          ["📍 LOCAL",      puzzle.location],
        ].map(([l, v]) => (
          <div key={l} className="res-row">
            <span className="res-lbl">{l}</span>
            <span className="res-val">{v}</span>
          </div>
        ))}
      </div>

      <div className="btn-row">
        {pidx < PUZZLES.length - 1 && (
          <button className="btn2 a" onClick={onNext}>PRÓXIMO CASO →</button>
        )}
        <button className="btn2 b" onClick={onBack}>← TODOS OS CASOS</button>
      </div>

      {pidx === PUZZLES.length - 1 && (
        <div style={{ marginTop: "1.2rem", color: "#1e3d55", fontSize: ".6rem", letterSpacing: "3px", textAlign: "center" }}>
          TODOS OS CASOS FORAM SOLUCIONADOS
        </div>
      )}
    </div>
  );
}
