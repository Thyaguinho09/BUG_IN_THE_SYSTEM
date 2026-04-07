const case3 = {
  id: 3,
  difficulty: "INTERMEDIÁRIO",
  diffColor: "#ffd600",
  title: "O Deploy de Sexta-feira",
  subtitle: "Ninguém faz deploy na sexta. Alguém fez...",

  grid: [
    //  0    1    2    3    4    5    6    7    8    9
    ["T","Y","P","E","S","C","R","I","P","T"],  // r0  — TYPESCRIPT →
    ["F","R","O","N","T","E","N","D","G","E"],  // r1  — FRONTEND →
    ["O","G","A","Y","H","T","G","M","M","S"],  // r2  — THYAGO ← (c5..0)
    ["E","L","L","E","B","A","S","I","R","T"],  // r3  — ISABELLE ← (c7..0), DOCKER↗ ends c8
    ["R","E","M","M","E","Q","A","E","R","S"],  // r4  — MOBILE↘ starts c2, DOCKER↗ c7, TESTS c9
    ["L","V","E","O","N","K","K","M","L","J"],  // r5  — MOBILE↘ c3, DOCKER↗ c6
    ["X","R","W","A","B","C","U","B","G","C"],  // r6  — MOBILE↘ c4, DOCKER↗ c5
    ["Q","V","Q","N","O","I","Z","M","B","N"],  // r7  — MOBILE↘ c5, DOCKER↗ c4
    ["Q","N","L","D","E","V","L","P","N","Q"],  // r8  — MOBILE↘ c6, DOCKER↗ starts c3
    ["D","E","P","L","O","Y","Q","E","N","B"],  // r9  — DEPLOY →, MOBILE↘ ends c7
    ["H","S","A","R","C","Q","N","F","U","X"],  // r10 — CRASH ← (c4..0)
    ["J","U","P","B","G","R","Z","N","E","Z"],  // r11
  ],

  wordList: [
    // horizontal →
    { word: "TYPESCRIPT",
      cells: [
        {r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},
        {r:0,c:5},{r:0,c:6},{r:0,c:7},{r:0,c:8},{r:0,c:9},
      ] },
    { word: "FRONTEND",
      cells: [
        {r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},
        {r:1,c:4},{r:1,c:5},{r:1,c:6},{r:1,c:7},
      ] },
    { word: "DEPLOY",
      cells: [
        {r:9,c:0},{r:9,c:1},{r:9,c:2},{r:9,c:3},{r:9,c:4},{r:9,c:5},
      ] },

    // horizontal ←
    { word: "THYAGO",
      cells: [
        {r:2,c:5},{r:2,c:4},{r:2,c:3},{r:2,c:2},{r:2,c:1},{r:2,c:0},
      ] },
    { word: "ISABELLE",
      cells: [
        {r:3,c:7},{r:3,c:6},{r:3,c:5},{r:3,c:4},
        {r:3,c:3},{r:3,c:2},{r:3,c:1},{r:3,c:0},
      ] },
    { word: "CRASH",
      cells: [
        {r:10,c:4},{r:10,c:3},{r:10,c:2},{r:10,c:1},{r:10,c:0},
      ] },

    // vertical ↓
    { word: "TESTS",
      cells: [
        {r:0,c:9},{r:1,c:9},{r:2,c:9},{r:3,c:9},{r:4,c:9},
      ] },

    // diagonal ↘
    { word: "MOBILE",
      cells: [
        {r:4,c:2},{r:5,c:3},{r:6,c:4},{r:7,c:5},{r:8,c:6},{r:9,c:7},
      ] },

    // diagonal ↗ (linha sobe, coluna cresce)
    { word: "DOCKER",
      cells: [
        {r:8,c:3},{r:7,c:4},{r:6,c:5},{r:5,c:6},{r:4,c:7},{r:3,c:8},
      ] },
  ],

  clues: [
    "O deploy aconteceu no final do expediente de sexta",
    "Os testes não foram executados antes do deploy",
    "O problema afetou diretamente o MOBILE",
    "Alguém do FRONTEND fez o deploy sem autorização",
    "Outra pessoa estava online, mas não mexeu no deploy",
  ],

  suspects:  ["THYAGO", "ISABELLE", "ANTHONY", "SABRINA"],
  languages: ["TYPESCRIPT", "PYTHON", "KOTLIN", "SWIFT"],
  locations: ["MOBILE", "BACKEND", "DOCKER", "FRONTEND"],

  culprit:  "THYAGO",
  language: "TYPESCRIPT",
  location: "MOBILE",
};

export default case3;