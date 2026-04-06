const case4 = {
  id: 4,
  difficulty: "DIFÍCIL",
  diffColor: "#ff2d55",
  title: "A Brecha de Segurança",
  subtitle: "Dados de 50.000 usuários foram expostos. Encontre o responsável.",

  grid: [
    ["G","R","A","P","H","Q","L","X","T","O","K","E"],
    ["K","U","B","E","R","N","E","T","E","S","N","V"],
    ["E","M","E","R","S","O","N","A","D","I","A","A"],
    ["R","E","D","I","S","C","A","C","H","E","Z","Z"],
    ["K","A","F","K","A","S","T","R","E","A","D","O"],
    ["Q","W","E","R","T","Y","U","I","O","P","X","Y"],
    ["L","O","G","S","A","P","I","K","L","M","N","O"],
    ["D","A","T","A","B","A","S","E","Q","R","S","T"],
    ["C","A","C","H","E","X","Z","A","B","C","D","E"],
    ["S","E","C","U","R","I","T","Y","L","M","N","O"],
    ["B","A","C","K","E","N","D","P","Q","R","S","T"],
    ["F","R","O","N","T","X","Y","Z","A","B","C","D"],
  ],

  wordList: [
    { word: "GRAPHQL", cells: [
      {r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:0,c:5},{r:0,c:6}
    ]},

    { word: "KUBERNETES", cells: [
      {r:1,c:0},{r:1,c:1},{r:1,c:2},{r:1,c:3},{r:1,c:4},
      {r:1,c:5},{r:1,c:6},{r:1,c:7},{r:1,c:8},{r:1,c:9}
    ]},

    { word: "REDIS", cells: [
      {r:3,c:0},{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4}
    ]},

    { word: "KAFKA", cells: [
      {r:4,c:0},{r:4,c:1},{r:4,c:2},{r:4,c:3},{r:4,c:4}
    ]},

    { word: "EMERSON", cells: [
      {r:2,c:0},{r:2,c:1},{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:2,c:5},{r:2,c:6}
    ]},

    { word: "NADIA", cells: [
      {r:2,c:7},{r:2,c:8},{r:2,c:9},{r:2,c:10},{r:2,c:11}
    ]},
  ],

  clues: [
    "A brecha foi aberta via uma query não sanitizada",
    "O serviço de containers foi comprometido",
    "Um cache sem TTL expôs dados por horas",
    "Existe uma pista escondida no próprio grid",
  ],

  suspects: ["EMERSON","NADIA","ANTHONY","SABRINA"],
  languages: ["GRAPHQL","PYTHON","RUST","GO"],
  locations: ["KUBERNETES","REDIS","KAFKA","DATABASE"],

  culprit: "EMERSON",
  language: "GRAPHQL",
  location: "KUBERNETES",

  hiddenClue: "TOKENVAZADO", // pista secreta
};

export default case4;