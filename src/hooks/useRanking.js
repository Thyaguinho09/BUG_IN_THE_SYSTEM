import { useState, useEffect } from "react";

export default function useRanking() {
    const [ranking, setRanking] = useState(() => {
        const saved = localStorage.getItem("ranking");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("ranking", JSON.stringify(ranking));
    }, [ranking]);

    function calculateStars({ timeSpent, hintsUsed, maxTime }) {
        if (timeSpent <= maxTime * 0.5 && hintsUsed === 0) return 3;
        if (timeSpent <= maxTime) return 2;
        return 1;
    }

    function updateRanking({
        name,
        score,
        timeSpent,
        hintsUsed,
        wrongAttempts,
        maxTime
    }) {
        const stars = calculateStars({ timeSpent, hintsUsed, maxTime });

        const newPlayer = {
            name,
            score,
            stars,
            timeSpent,
            wrongAttempts
        };

        const updated = [...ranking, newPlayer];

        // ordenação inteligente
        updated.sort((a, b) => {
            if (b.stars !== a.stars) return b.stars - a.stars;
            if (a.timeSpent !== b.timeSpent) return a.timeSpent - b.timeSpent;
            return a.wrongAttempts - b.wrongAttempts;
        });

        setRanking(updated.slice(0, 10)); // top 10
    }

    return { ranking, updateRanking };
}