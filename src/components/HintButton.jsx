export default function HintButton({ onHint, hintsUsed, maxHints, disabled }) {
  const remaining = maxHints - hintsUsed;
  const exhausted = remaining <= 0 || maxHints === 0;

  // Cor de urgência
  const color = exhausted
    ? "#3a1a1a"
    : remaining === 1
    ? "#ff2d55"
    : remaining === 2
    ? "#ffd600"
    : "#00e5ff";

  const borderColor = exhausted ? "#3a1a1a" : color;

  return (
    <button
      className="hint-btn"
      onClick={onHint}
      disabled={disabled || exhausted}
      title={
        maxHints === 0
          ? "Dicas indisponíveis nesta dificuldade"
          : exhausted
          ? "Limite de dicas atingido"
          : `${remaining} dica${remaining !== 1 ? "s" : ""} restante${remaining !== 1 ? "s" : ""}`
      }
      style={{
        borderColor,
        color: exhausted ? "#3a3a3a" : color,
        cursor: exhausted || disabled ? "not-allowed" : "pointer",
        opacity: exhausted ? 0.45 : 1,
        transition: "all .2s",
        position: "relative",
      }}
    >
      <span className="hint-icon">{exhausted ? "🚫" : "💡"}</span>
      {maxHints === 0 ? (
        "SEM DICAS"
      ) : exhausted ? (
        "ESGOTADO"
      ) : (
        <>
          DICA
          <span
            style={{
              marginLeft: "6px",
              fontFamily: "'Orbitron',sans-serif",
              fontSize: "0.6rem",
              background: color + "22",
              border: `1px solid ${color}44`,
              padding: "1px 5px",
              borderRadius: "2px",
            }}
          >
            {remaining}/{maxHints}
          </span>
        </>
      )}
    </button>
  );
}
