// ─── case0.js — TUTORIAL ────────────────────────────────────
// Grade 6×6. Palavras:
//   BUG → horizontal →   r0 c0..c2        grid[0][0..2] = B U G
//   BOT → vertical  ↓    c5 r0..r2        grid[0..2][5] = B O T
//   FIX → diagonal  ↘    r1c0 r2c1 r3c2   grid[1][0]=F  grid[2][1]=I  grid[3][2]=X
//   API ← horizontal ←   r4 c4..c2        grid[4][2..4] = A P I  (lido de trás: I P A = IPA... não)
//         na grade escrevemos I P A  (c2=I, c3=P, c4=A)
//         o jogador arrasta de c4→c3→c2  lendo A→P→I = API  ✓

const case0 = {
  id: 0,
  isTutorial: true,
  difficulty: "TUTORIAL",
  diffColor: "#00e5ff",
  title: "Primeiros Passos",
  subtitle: "Aprenda a marcar palavras — até de trás para frente!",

  //       c0   c1   c2   c3   c4   c5
  grid: [
    ["B", "U", "G", "Z", "Q", "B"], // r0  → BUG (c0→c2)
    ["F", "W", "V", "K", "L", "O"], // r1
    ["P", "I", "J", "M", "N", "T"], // r2
    ["Y", "R", "X", "A", "D", "H"], // r3
    ["C", "E", "I", "P", "A", "V"], // r4  ← API (c4→c2, na grade: I P A)
    ["W", "X", "Y", "Z", "Q", "B"], // r5
  ],

  wordList: [
    {
      word: "BUG",
      dir: "→",
      tutorialHint: "→",
      label: "horizontal →",
      cells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
    },
    {
      word: "BOT",
      dir: "↓",
      tutorialHint: "↓",
      label: "vertical ↓",
      cells: [{ r: 0, c: 5 }, { r: 1, c: 5 }, { r: 2, c: 5 }],
    },
    {
      word: "FIX",
      dir: "↘",
      tutorialHint: "↘",
      label: "diagonal ↘",
      cells: [{ r: 1, c: 0 }, { r: 2, c: 1 }, { r: 3, c: 2 }],
    },
    {
      word: "API",
      dir: "←",
      tutorialHint: "←",
      label: "horizontal ←",
      // Na grade r4: ...I(c2) P(c3) A(c4)...
      // Arrastando c4→c3→c2 lemos A→P→I = "API" ✓
      cells: [{ r: 4, c: 4 }, { r: 4, c: 3 }, { r: 4, c: 2 }],
    },
  ],

  clues: [
    "Arraste da esquerda para a direita → para marcar BUG",
    "Arraste de cima para baixo ↓ para marcar BOT",
    "Arraste na diagonal ↘ para marcar FIX",
    "Arraste da DIREITA para a ESQUERDA ← para marcar API — palavras também ficam ao contrário!",
  ],

  suspects: ["TUTORIAL"],
  languages: ["TUTORIAL"],
  locations: ["TUTORIAL"],
  culprit: "TUTORIAL",
  language: "TUTORIAL",
  location: "TUTORIAL",
  isTutorialOnly: true,

  narrative:
    "Treinamento concluído! Você dominou todas as direções: horizontal, vertical, diagonal e até de trás para frente. Nos casos reais, qualquer uma dessas pode esconder uma pista crucial. Boa sorte, investigador.",
};

export default case0;
