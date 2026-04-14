import PUZZLES from "../data/index";

export default function ResultScreen({ puzzle, pidx, onNext, onBack }) {
  const isTutorial = puzzle?.isTutorialOnly;

  return (
    <div className="result">
      <div style={{ fontFamily: "'Orbitron',sans-serif", fontSize: ".55rem", letterSpacing: "6px", color: "#1e3d55", marginBottom: ".4rem" }}>
        {isTutorial ? "TUTORIAL" : `CASO ${puzzle.id} · ${puzzle.difficulty}`}
      </div>

      <div className="res-big">
        {isTutorial ? "TREINAMENTO CONCLUÍDO" : "CASO FECHADO"}
      </div>

      <div style={{ color: "#1e3d55", letterSpacing: "4px", fontSize: ".6rem", margin: ".4rem 0 1rem", fontFamily: "'Orbitron',sans-serif" }}>
        {isTutorial ? "VOCÊ ESTÁ PRONTO" : "INVESTIGAÇÃO CONCLUÍDA"}
      </div>

      {/* Narrative explanation */}
      {puzzle.narrative && (
        <div className="res-narrative">
          <div className="res-narrative-title">📋 RELATÓRIO NARRATIVO</div>
          <p className="res-narrative-text">{puzzle.narrative}</p>
        </div>
      )}

      {/* Final report — skip for tutorial */}
      {!isTutorial && (
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
      )}

      {/* Clue breakdown — show how clues pointed to the answer */}
      {!isTutorial && puzzle.clues && (
        <div className="res-clues-breakdown">
          <div className="res-clues-title">🔍 COMO AS PISTAS APONTAVAM PARA A SOLUÇÃO</div>
          {puzzle.clues.map((clue, i) => (
            <div key={i} className="res-clue-item">
              <span className="res-clue-n">{i + 1}</span>
              <span className="res-clue-text">{clue}</span>
            </div>
          ))}
        </div>
      )}

      <div className="btn-row">
        {pidx < PUZZLES.length - 1 && (
          <button className="btn2 a" onClick={onNext}>PRÓXIMO CASO →</button>
        )}
        <button className="btn2 b" onClick={onBack}>← TODOS OS CASOS</button>
      </div>

      {pidx === PUZZLES.length - 1 && !isTutorial && (
        <div style={{ marginTop: "1.2rem", color: "#1e3d55", fontSize: ".6rem", letterSpacing: "3px", textAlign: "center" }}>
          TODOS OS CASOS FORAM SOLUCIONADOS
        </div>
      )}
    </div>
  );
}
