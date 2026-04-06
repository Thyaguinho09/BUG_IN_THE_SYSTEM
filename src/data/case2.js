const case2 = {
  id: 2,
  difficulty: "INTERMEDIÁRIO",
  diffColor: "#ffd600",
  title: "A Queda do Servidor",
  subtitle: "O banco de dados parou de responder às 03h da manhã...",
  grid: [
    ["P","Y","T","H","O","N","Z","K"],
    ["B","A","C","K","E","N","D","Q"],
    ["M","A","R","C","O","S","X","J"],
    ["S","Q","L","V","W","A","B","C"],
    ["T","O","K","E","N","R","Y","Z"],
  ],
  wordList: [
    { word: "PYTHON",  cells: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:0,c:5}] },
    { word: "BACKEND", cells: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:1,c:4},{r:1,c:5},{r:1,c:6}] },
    { word: "SQL",     cells: [{r:3,c:0},{r:3,c:1},{r:3,c:2}] },
    { word: "TOKEN",   cells: [{r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}] },
    { word: "MARCOS",  cells: [{r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:2,c:5}] },
  ],
  clues: [
    "A query SQL retornou 0 rows inesperadamente",
    "Um token JWT foi gerado sem data de expiração",
    "O log aponta para a camada de dados do servidor",
  ],
  suspects:  ["MARCOS","CARLA","RAFAEL","ANA"],
  languages: ["PYTHON","JAVA","GO","RUBY"],
  locations: ["BACKEND","FRONTEND","MOBILE","DEVOPS"],
  culprit:  "MARCOS",
  language: "PYTHON",
  location: "BACKEND",
};

export default case2;