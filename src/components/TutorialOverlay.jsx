export default function TutorialOverlay({ onClose }) {
  return (
    <div className="tutorial-overlay">
      <div className="tutorial-modal">
        <div className="tutorial-modal-title">🕹 COMO JOGAR</div>
        <div className="tutorial-modal-body">
          <p>Encontre palavras escondidas na grade arrastando o dedo (ou o mouse) sobre as letras.</p>
          <div className="tut-directions">
            <div className="tut-dir-item">
              <span className="tut-dir-arrow">→</span>
              <span>Horizontal (esq → dir)</span>
            </div>
            <div className="tut-dir-item tut-dir-highlight">
              <span className="tut-dir-arrow">←</span>
              <span>De trás pra frente <em>(dir → esq!)</em></span>
            </div>
            <div className="tut-dir-item">
              <span className="tut-dir-arrow">↓</span>
              <span>Vertical</span>
            </div>
            <div className="tut-dir-item tut-dir-highlight">
              <span className="tut-dir-arrow">↘</span>
              <span>Diagonal <em>(novidade!)</em></span>
            </div>
            <div className="tut-dir-item tut-dir-highlight">
              <span className="tut-dir-arrow">↙</span>
              <span>Diagonal inversa</span>
            </div>
          </div>
          <p style={{ marginTop: ".8rem", fontSize: ".7rem", color: "#5a8aaa" }}>
            💡 Dica: se uma palavra não aparecer, tente arrastar no sentido contrário!
          </p>
        </div>
        <button className="tutorial-modal-btn" onClick={onClose}>ENTENDI — VAMOS LÁ!</button>
      </div>
    </div>
  );
}
