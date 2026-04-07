// ─── case2.js (grid totalmente preenchido) ──────────────────
const case2 = {
  id: 2,
  difficulty: "DIÍCIL",
  diffColor: "#ffd600",
  title: "A Queda do Servidor",
  subtitle: "O banco de dados parou de responder às 03h da manhã...",

  grid: [
    ["P","Y","T","H","O","N","S","E","R","V","I","C"],
    ["B","A","C","K","E","N","D","Q","S","E","R","V"],
    ["E","M","E","R","S","O","N","U","S","E","R","S"],
    ["T","H","Y","A","G","O","B","C","S","U","D","B"],
    ["T","O","K","E","N","R","E","Q","U","E","S","T"],
    ["S","E","R","V","E","R","A","P","I","R","O","U"],
    ["D","A","T","A","B","A","S","E","Q","U","E","R"],
    ["Q","U","E","R","Y","L","O","G","S","D","A","T"],
    ["A","U","T","H","L","O","G","I","C","U","S","R"],
    ["D","E","B","U","G","M","E","T","H","O","D","S"],
    ["C","A","C","H","E","S","T","O","R","A","G","E"],
    ["S","E","S","S","I","O","N","T","O","K","E","N"],
  ],

  wordList: [
    // horizontais →
    { word: "PYTHON",
      cells: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:0,c:5}] },

    { word: "BACKEND",
      cells: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:1,c:4},{r:1,c:5},{r:1,c:6}] },

    { word: "EMERSON",
      cells: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:2,c:5},{r:2,c:6}] },

    { word: "THYAGO",
      cells: [{r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4},{r:3,c:5}] },

    { word: "TOKEN",
      cells: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}] },

    { word: "SERVER",
      cells: [{r:5,c:0},{r:5,c:1},{r:5,c:2},{r:5,c:3},{r:5,c:4},{r:5,c:5}] },

    { word: "DATABASE",
      cells: [{r:6,c:0},{r:6,c:1},{r:6,c:2},{r:6,c:3},{r:6,c:4},{r:6,c:5},{r:6,c:6},{r:6,c:7}] },

    { word: "CACHE",
      cells: [{r:10,c:0},{r:10,c:1},{r:10,c:2},{r:10,c:3},{r:10,c:4}] },

    { word: "SESSION",
      cells: [{r:11,c:0},{r:11,c:1},{r:11,c:2},{r:11,c:3},{r:11,c:4},{r:11,c:5},{r:11,c:6}] },

    // invertido ←
    { word: "QUERY",
      cells: [{r:7,c:4},{r:7,c:3},{r:7,c:2},{r:7,c:1},{r:7,c:0}] },

    // vertical ↓
    { word: "AUTH",
      cells: [{r:8,c:0},{r:7,c:0},{r:6,c:0},{r:5,c:0}] },
  ],

  clues: [
    "O erro está relacionado ao backend",
    "A falha envolvia tokens e sessão",
    "Logs mostram problema na camada de dados",
    "Havia requisições inconsistentes durante a madrugada",
  ],

  suspects: ["EMERSON","THYAGO","KLAYVERTON","ISABELLE"],
  languages: ["PYTHON","JAVA","GO","RUBY"],
  locations: ["BACKEND","FRONTEND","MOBILE","DEVOPS"],

  culprit: "EMERSON",
  language: "PYTHON",
  location: "BACKEND",
};

export default case2;