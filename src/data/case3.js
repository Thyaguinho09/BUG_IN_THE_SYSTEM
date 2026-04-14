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
    ["E", "A", "L", "E", "N", "A", "S", "I", "S", "T"],
    ["S", "B", "M", "M", "E", "T", "A", "E", "N", "H"],
    ["C", "E", "E", "O", "N", "K", "E", "M", "R", "J"],
    ["R", "L", "W", "A", "B", "C", "O", "N", "E", "Y"],
    ["I", "L", "Q", "N", "O", "G", "Z", "M", "D", "O"],
    ["P", "E", "L", "D", "A", "V", "L", "P", "C", "L"],
    ["T", "E", "P", "Y", "O", "Y", "Q", "E", "O", "P"],
    ["H", "S", "H", "R", "C", "Q", "N", "F", "D", "E"],
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
      word: "FRONT",
      cells: [
        { r: 0, c: 1 }, { r: 1, c: 2 }, { r: 2, c: 3 }, { r: 3, c: 4 },
        { r: 4, c: 5 },
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
      word: "TEST",
      cells: [
        { r: 0, c: 9 }, { r: 1, c: 9 }, { r: 2, c: 9 }, { r: 3, c: 9 },
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
        { r: 5, c: 8 },
    { r: 6, c: 8 },
    { r: 7, c: 8 },
    { r: 8, c: 8 },
    { r: 9, c: 8 },
    { r: 10, c: 8 },]
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

  hiddenAnswer: "URGENCIA",
  narrative:
    "O deploy de sexta-feira nunca deveria ter ido para produção. Uma mudança de última hora no módulo FRONT rompeu o fluxo de autenticação. O responsável apressou o COMMIT sem rodar os testes, confiando demais na cobertura existente. O TIME todo pagou o preço no fim de semana.",
  culprit: "THYAGO",
  language: "TYPESCRIPT",
  location: "MOBILE",
};

export default case3;