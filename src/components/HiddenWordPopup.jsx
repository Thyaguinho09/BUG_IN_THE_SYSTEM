import { useState } from "react";

export default function HiddenWordPopup({ word }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="hidden-popup">
      <div className="hidden-popup-inner">
        <div className="hidden-popup-icon">🏆</div>
        <div className="hidden-popup-title">CONQUISTA DESBLOQUEADA</div>
        <div className="hidden-popup-word">{word}</div>
        <div className="hidden-popup-desc">
          Você encontrou uma palavra oculta nas pistas! Isso revela algo importante sobre o caso…
        </div>
        <button className="hidden-popup-btn" onClick={() => setDismissed(true)}>
          CONTINUAR INVESTIGAÇÃO
        </button>
      </div>
    </div>
  );
}
