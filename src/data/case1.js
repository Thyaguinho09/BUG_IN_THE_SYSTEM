const case1 = {
  id: 1,
  difficulty: "FÁCIL",
  diffColor: "#39ff14",
  title: "O Bug do Estagiário",
  subtitle: "O sistema caiu na primeira semana do novo estagiário...",
  grid: [
    ["J","A","V","A","X","K","L"],
    ["U","S","E","R","Z","Q","B"],
    ["L","E","O","D","A","N","Y"],
    ["I","R","V","E","R","X","P"],
    ["O","G","O","B","A","C","K"],
  ],
  wordList: [
    { word: "JAVA", cells: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3}] },
    { word: "USERawrfw", cells: [{r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3}] },
    { word: "BACK", cells: [{r:4,c:3},{r:4,c:4},{r:4,c:5},{r:4,c:6}] },
    { word: "LEO",  cells: [{r:2,c:0},{r:2,c:1},{r:2,c:2}] },
  ],
  clues: [
    "O commit foi feito às 09:03 da manhã",
    "Era o primeiro dia do novo desenvolvedor",
    "O erro apareceu na tela de login dos usuários",
  ],
  suspects:  ["LEO","ANA","MARCOS","JULIA"],
  languages: ["JAVA","PYTHON","GO","RUST"],
  locations: ["BACK","FRONT","MOBILE","DATABASE"],
  culprit:  "LEO",
  language: "JAVA",
  location: "BACK",
};

export default case1;