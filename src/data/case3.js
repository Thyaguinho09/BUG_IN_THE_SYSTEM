const case3 = {
  id: 3,
  difficulty: "INTERMEDIÁRIO",
  diffColor: "#ffd600",
  title: "O Deploy de Sexta-feira",
  subtitle: "Ninguém faz deploy na sexta. Alguém fez...",

  grid: [
    ["T", "Y", "P", "E", "S", "C", "R", "I", "P", "T"],
    ["F", "R", "O", "N", "T", "E", "N", "D", "G", "E"],
    ["O", "G", "A", "Y", "H", "T", "G", "M", "M", "S"],
    ["E", "L", "L", "E", "B", "A", "S", "I", "R", "T"],
    ["R", "E", "M", "M", "E", "Q", "A", "E", "R", "S"],
    ["L", "V", "E", "O", "N", "K", "K", "M", "L", "J"],
    ["X", "R", "W", "A", "B", "C", "U", "B", "G", "C"],
    ["Q", "V", "Q", "N", "O", "I", "Z", "M", "B", "N"],
    ["Q", "N", "L", "D", "E", "V", "L", "P", "N", "Q"],
    ["D", "E", "P", "L", "O", "Y", "Q", "E", "N", "B"],
    ["H", "S", "A", "R", "C", "Q", "N", "F", "U", "X"],
    ["J", "U", "P", "B", "G", "R", "Z", "N", "E", "Z"],
  ],

  wordList: [
    // → 
    {
      word: "TYPESCRIPT",
      cells: [
        { r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }, { r: 0, c: 3 }, { r: 0, c: 4 },
        { r: 0, c: 5 }, { r: 0, c: 6 }, { r: 0, c: 7 }, { r: 0, c: 8 }, { r: 0, c: 9 },
      ],
    },
    {
      word: "FRONTEND",
      cells: [
        { r: 1, c: 0 }, { r: 1, c: 1 }, { r: 1, c: 2 }, { r: 1, c: 3 },
        { r: 1, c: 4 }, { r: 1, c: 5 }, { r: 1, c: 6 }, { r: 1, c: 7 },
      ],
    },
    {
      word: "DEPLOY",
      cells: [
        { r: 9, c: 0 }, { r: 9, c: 1 }, { r: 9, c: 2 }, { r: 9, c: 3 }, { r: 9, c: 4 }, { r: 9, c: 5 },
      ],
    },

    // ←
    {
      word: "THYAGO",
      cells: [
        { r: 2, c: 5 }, { r: 2, c: 4 }, { r: 2, c: 3 }, { r: 2, c: 2 }, { r: 2, c: 1 }, { r: 2, c: 0 },
      ],
    },
    {
      word: "ISABELLE",
      cells: [
        { r: 3, c: 7 }, { r: 3, c: 6 }, { r: 3, c: 5 }, { r: 3, c: 4 },
        { r: 3, c: 3 }, { r: 3, c: 2 }, { r: 3, c: 1 }, { r: 3, c: 0 },
      ],
    },
    {
      word: "CRASH",
      cells: [
        { r: 10, c: 4 }, { r: 10, c: 3 }, { r: 10, c: 2 }, { r: 10, c: 1 }, { r: 10, c: 0 },
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
        { r: 4, c: 2 }, { r: 5, c: 3 }, { r: 6, c: 4 }, { r: 7, c: 5 }, { r: 8, c: 6 }, { r: 9, c: 7 }, 
      ],
    },

    {
      word: "DOCKER",
      cells: [
        { r: 8, c: 3 }, { r: 7, c: 4 }, { r: 6, c: 5 }, { r: 5, c: 6 }, { r: 4, c: 7 }, { r: 3, c: 8 }, 
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