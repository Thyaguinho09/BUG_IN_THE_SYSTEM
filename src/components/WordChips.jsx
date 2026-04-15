export default function WordChips({ wordList, foundWords, allFound }) {
  return (
    <>
      <div className="ptitle" style={{ marginTop: ".8rem" }}>▶ ENCONTRE</div>
      <div className="chips">
        {wordList.map((e) => (
          <span key={e.word} className={chip${foundWords.includes(e.word) ? " found" : ""}}>
        {e.word}
        {foundWords.includes(e.word) && <span className="chip-points"> +100</span>}
      </span>
        ))}
    </div >
      { allFound && <div className="ok-tag">✓ TODAS ENCONTRADAS — DEDUZA O CULPADO</div>
}
    </>
  );
}