import PUZZLES from "../data/index";

export default function ResultScreen({ puzzle, pidx, onNext, onBack, playerStats }) {
  const isTutorial = puzzle?.isTutorialOnly;
  
  // Calcula estrelas alcançadas
  const getStarsEarned = () => {
    const score = playerStats.totalScore;
    if (score >= 1000) return 5;
    if (score >= 700) return 4;
    if (score >= 400) return 3;
    if (score >= 150) return 2;
    if (score >= 50) return 1;
    return 0;
  };

  const starsEarned = getStarsEarned();
  const starDisplay = '★'.repeat(starsEarned) + '☆'.repeat(5 - starsEarned);

  return (
    <div className="result">
      <div className="res-case">
        {isTutorial ? "TUTORIAL" : `CASO ${puzzle.id} · ${puzzle.difficulty}`}
      </div>

      <div className="res-big">
        {isTutorial ? "TREINAMENTO CONCLUÍDO" : "CASO FECHADO"}
      </div>

      <div className="res-sub">
        {isTutorial ? "VOCÊ ESTÁ PRONTO" : "INVESTIGAÇÃO CONCLUÍDA"}
      </div>

      {/* Estatísticas do Jogador */}
      {!isTutorial && (
        <div className="res-stats-card">
          <div className="stats-header">📊 SUA PERFORMANCE</div>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">PONTUAÇÃO TOTAL</span>
              <span className="stat-value">{playerStats.totalScore}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">CASOS SOLUCIONADOS</span>
              <span className="stat-value">{playerStats.casesSolved}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">ESTRELAS</span>
              <span className="stat-value stars-result">{starDisplay}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">DICAS USADAS</span>
              <span className="stat-value">{playerStats.totalTipsUsed}</span>
            </div>
          </div>
        </div>
      )}

      {/* Narrative explanation */}
      {puzzle.narrative && (
        <div className="res-narrative">
          <div className="res-narrative-title">📋 RELATÓRIO NARRATIVO</div>
          <p className="res-narrative-text">{puzzle.narrative}</p>
        </div>
      )}

      {/* Final report */}
      {!isTutorial && (
        <div className="res-card">
          <div className="ptitle" style={{ marginBottom: ".4rem" }}>▶ RELATÓRIO FINAL</div>
          {[
            ["👤 CULPADO", puzzle.culprit],
            ["💻 LINGUAGEM", puzzle.language],
            ["📍 LOCAL", puzzle.location],
          ].map(([l, v]) => (
            <div key={l} className="res-row">
              <span className="res-lbl">{l}</span>
              <span className="res-val">{v}</span>
            </div>
          ))}
        </div>
      )}

      {/* Conquistas desbloqueadas */}
      {!isTutorial && (
        <div className="res-achievements">
          <div className="res-achievements-title">🏅 CONQUISTAS DESBLOQUEADAS</div>
          <div className="achievements-grid">
            {playerStats.achievements.novice && <div className="ach-badge">⭐ NOVATO</div>}
            {playerStats.achievements.intermediate && <div className="ach-badge">⭐⭐ INTERMEDIÁRIO</div>}
            {playerStats.achievements.master && <div className="ach-badge">⭐⭐⭐ MESTRE</div>}
            {playerStats.achievements.noTips && <div className="ach-badge">🎯 SEM DICAS</div>}
          </div>
        </div>
      )}

      <div className="btn-row">
        {pidx < PUZZLES.length - 1 && (
          <button className="btn2 a" onClick={onNext}>PRÓXIMO CASO →</button>
        )}
        <button className="btn2 b" onClick={onBack}>← TODOS OS CASOS</button>
      </div>

      {pidx === PUZZLES.length - 1 && !isTutorial && (
        <div className="res-end">
          🎉 PARABÉNS! TODOS OS CASOS FORAM SOLUCIONADOS 🎉
        </div>
      )}
    </div>
  );
}