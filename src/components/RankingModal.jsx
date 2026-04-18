import React from 'react';

export default function RankingModal({ isOpen, onClose, ranking }) {
    if (!isOpen) return null;

    const formatTime = (s) =>
        `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="ranking-panel" onClick={(e) => e.stopPropagation()}>

                <div className="ptitle">
                    ▶ TERMINAL DE RANKING: AGENTES ATIVOS
                </div>

                <div className="table-wrapper">
                    <table className="ranking-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>AGENTE</th>
                                <th>CASO</th>
                                <th>TEMPO</th>
                                <th>ESTRELAS</th>
                                <th>PONTOS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {ranking.length > 0 ? (
                                ranking.map((player, i) => (
                                    <tr key={i} className="ranking-row">
                                        <td className="rank-pos">{i + 1}</td>

                                        <td className="player-name">
                                            {player.name}
                                        </td>

                                        <td className="puzzle-name">
                                            {player.puzzleTitle}
                                        </td>

                                        <td className="time-val">
                                            {formatTime(player.timeSpent)}
                                        </td>

                                        <td className="stars-val">
                                            {'★'.repeat(player.stars || 0)}
                                            {'☆'.repeat(3 - (player.stars || 0))}
                                        </td>

                                        <td className="score-val">
                                            {player.score}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="empty-ranking">
                                        NENHUM DADO NO SISTEMA
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <button className="btn success" onClick={onClose}>
                    SAIR_DO_TERMINAL
                </button>
            </div>
        </div>
    );
}