export default function RankingModal({ isOpen, onClose, ranking }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="ranking-panel">
                <div className="ptitle">▶ LEADERBOARD DE AGENTES</div>
                <table className="ranking-table">
                    <thead>
                        <tr>
                            <th>POS</th>
                            <th>AGENTE</th>
                            <th>TEMPO</th>
                            <th>ESTRELAS</th>
                            <th>PONTOS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranking.map((player, i) => (
                            <tr key={i}>
                                <td>{i + 1}º</td>
                                <td>{player.name}</td>
                                <td>{Math.floor(player.timeSpent / 60)}:{(player.timeSpent % 60).toString().padStart(2, '0')}</td>
                                <td className="star-cell">{'★'.repeat(player.stars)}{'☆'.repeat(3 - player.stars)}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="btn success" style={{ marginTop: '1rem' }} onClick={onClose}>FECHAR</button>
            </div>
        </div>
    );
}