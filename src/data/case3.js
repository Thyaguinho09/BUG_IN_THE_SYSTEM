const case3 = {
  id: 3,
  difficulty: "DIFICIL",
  diffColor: "#ffd600",
  title: "O Deploy de Sexta-feira",
  subtitle: "Ninguém faz deploy na sexta. Alguém fez...",

  grid: [
    ["T", "F", "R", "O", "S", "C", "R", "I", "P", "T"],
    ["Y", "I", "R", "N", "T", "E", "R", "D", "G", "E"],
    ["P", "S", "A", "O", "H", "T", "G", "A", "R", "S"],
    ["E", "A", "L", "E", "N", "A", "S", "I", "E", "T"],
    ["S", "B", "M", "M", "E", "T", "A", "E", "K", "H"],
    ["C", "E", "E", "O", "N", "K", "E", "M", "C", "J"],
    ["R", "L", "W", "A", "B", "C", "O", "N", "O", "Y"],
    ["I", "L", "Q", "N", "O", "G", "Z", "M", "D", "O"],
    ["P", "E", "L", "D", "A", "V", "L", "P", "N", "L"],
    ["T", "E", "P", "Y", "O", "Y", "Q", "E", "N", "P"],
    ["H", "S", "H", "R", "C", "Q", "N", "F", "U", "E"],
    ["J", "T", "P", "M", "O", "B", "I", "L", "E", "D"],
  ],

  wordList: [
    // → 
    {
      word: "TYPESCRIPT",
      cells: [
        { r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }, { r: 3, c: 0 }, { r: 4, c: 0 },
        { r: 5, c: 0 }, { r: 6, c: 0 }, { r: 7, c: 0 }, { r: 8, c: 0 }, { r: 9, c: 0 },
      ],
    },
    {
      word: "FRONTEND",
      cells: [
        { r: 0, c: 1 }, { r: 1, c: 2 }, { r: 2, c: 3 }, { r: 3, c: 4 },
        { r: 4, c: 5 }, { r: 5, c: 6 }, { r: 6, c: 7 }, { r: 7, c: 8 },
      ],
    },
    {
      word: "DEPLOY",
      cells: [
        { r: 11, c: 9 }, { r: 10, c: 9 }, { r: 9, c: 9 }, { r: 8, c: 9 }, { r: 7, c: 9 }, { r: 6, c: 9 },
      ],
    },

    // ←
    {
      word: "THYAGO",
      cells: [
        { r: 11, c: 1 }, { r: 10, c: 2 }, { r: 9, c: 3 }, { r: 8, c: 4 }, { r: 7, c: 5 }, { r: 6, c: 6 },
      ],
    },
    {
      word: "ISABELLE",
      cells: [
        { r: 1, c: 1 }, { r: 2, c: 1 }, { r: 3, c: 1 }, { r: 4, c: 1 },
        { r: 5, c: 1 }, { r: 6, c: 1 }, { r: 7, c: 1 }, { r: 8, c: 1 },
      ],
    },
    {
      word: "CRASH",
      cells: [
        { r: 0, c: 5 }, { r: 1, c: 6 }, { r: 2, c: 7 }, { r: 3, c: 8 }, { r: 4, c: 9 },
      ],
    },

    // ↓
    {
      word: "TESTS",
      cells: [
        { r: 0, c: 9 }, { r: 1, c: 9 }, { r: 2, c: 9 }, { r: 3, c: 9 }, { r: 4, c: 9 },
      ],
    },

    {
      word: "MOBILE",
      cells: [
        { r: 11, c: 3 }, { r: 11, c: 4 }, { r: 11, c: 5 }, { r: 11, c: 6 }, { r: 11, c: 7 }, { r: 11, c: 8 }, 
      ],
    },

    {
      word: "DOCKER",
      cells: [
        { r: 7, c: 8 }, { r: 6, c: 8 }, { r: 5, c: 8 }, { r: 4, c: 8 }, { r: 3, c: 8 }, { r: 2, c: 8 }, 
      ],
    },
  ],


  clues: [
    "O deploy aconteceu no final do expediente de sexta",
    "Os testes não foram executados antes do deploy",
    "O problema afetou diretamente o MOBILE",
    "Alguém do FRONTEND fez o deploy sem autorização",
    "Outra pessoa estava online, mas não mexeu no deploy",
  ],

  suspects: ["THYAGO", "ISABELLE", "ANTHONY", "SABRINA"],
  languages: ["TYPESCRIPT", "PYTHON", "KOTLIN", "SWIFT"],
  locations: ["MOBILE", "BACKEND", "DOCKER", "FRONTEND"],

  culprit: "THYAGO",
  language: "TYPESCRIPT",
  location: "MOBILE",
};

export default case3;