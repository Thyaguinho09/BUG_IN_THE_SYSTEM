
export default function ScoreDisplay({ score }) {
  return (
    <div className="score-display">
      <span className="score-icon">🏆</span>
      <span className="score-value">{score}</span>
      <span className="score-label">PTS</span>
    </div>
  );
}
