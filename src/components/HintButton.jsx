export default function HintButton({ onHint, hintsUsed, disabled }) {
  return (
    <button 
      className="hint-btn"
      onClick={onHint}
      disabled={disabled}
    >
      <span className="hint-icon">💡</span>
      DICA {hintsUsed > 0 && `(${hintsUsed})`}
    </button>
  );
}