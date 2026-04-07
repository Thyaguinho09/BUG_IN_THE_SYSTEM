// ─── case4_extreme.js ───────────────────────────────────────
const case4 = {
  id: 4,
  difficulty: "EXTREMO",
  diffColor: "#6a0dad",
  title: "A Brecha de Segurança",
  subtitle: "50.000 usuários expostos… mas alguém tentou esconder os rastros.",

  // Grid 12x12 com alta interseção
  grid: [
    ["G","R","A","P","H","Q","L","X","T","O","K","E"],
    ["S","E","T","E","N","R","E","B","U","K","X","N"],
    ["E","X","R","Q","W","E","R","T","Y","U","I","I"],
    ["M","Z","Q","E","W","R","T","Y","U","O","P","D"],
    ["E","X","Q","W","D","Z","T","Y","U","O","P","A"],
    ["R","Q","W","X","A","I","V","U","O","P","X","N"],
    ["S","W","X","K","Q","S","S","U","I","O","P","Z"],
    ["O","X","F","Q","W","R","T","Y","U","I","O","X"],
    ["N","A","Q","W","E","R","T","Y","U","I","O","Z"],
    ["K","X","Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L","Z","X","V"],
    ["Q","W","E","R","T","Z","X","C","V","B","N","M"],
  ],

  wordList: [
    // → principais
    { word: "GRAPHQL",
      cells: [{r:0,c:0},{r:0,c:1},{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:0,c:5},{r:0,c:6}] },

    { word: "PRODUCTION",
      cells: [{r:6,c:0},{r:6,c:1},{r:6,c:2},{r:6,c:3},{r:6,c:4},{r:6,c:5},{r:6,c:6},{r:6,c:7},{r:6,c:8},{r:6,c:9}] },

    // ← invertido
    { word: "KUBERNETES",
      cells: [{r:1,c:9},{r:1,c:8},{r:1,c:7},{r:1,c:6},{r:1,c:5},
               {r:1,c:4},{r:1,c:3},{r:1,c:2},{r:1,c:1},{r:1,c:0}] },

    // ↓
    { word: "EMERSON",
      cells: [{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:5,c:0},{r:6,c:0},{r:7,c:0},{r:8,c:0}] },

    // ↑
    { word: "NADIA",
      cells: [{r:5,c:11},{r:4,c:11},{r:3,c:11},{r:2,c:11},{r:1,c:11}] },

    // ↘
    { word: "REDIS",
      cells: [{r:2,c:2},{r:3,c:3},{r:4,c:4},{r:5,c:5},{r:6,c:6}] },

    // ↗
    { word: "KAFKA",
      cells: [{r:9,c:0},{r:8,c:1},{r:7,c:2},{r:6,c:3},{r:5,c:4}] },

    // NOVAS CAMADAS

    // ↘ cruzando GRAPHQL
    { word: "TOKEN",
      cells: [{r:0,c:8},{r:1,c:9},{r:2,c:10},{r:3,c:11},{r:4,c:12-1}] },

    // ← falsa pista forte
    { word: "PYTHON",
      cells: [{r:10,c:5},{r:10,c:4},{r:10,c:3},{r:10,c:2},{r:10,c:1},{r:10,c:0}] },

    // ↓ cruzando REDIS
    { word: "CACHE",
      cells: [{r:2,c:5},{r:3,c:5},{r:4,c:5},{r:5,c:5},{r:6,c:5}] },

    // ↗ cruzando EMERSON (falsa acusação)
    { word: "LEAK",
      cells: [{r:8,c:2},{r:7,c:3},{r:6,c:4},{r:5,c:5}] },
  ],

  grid: [
    ["G","R","A","P","H","Q","L","X","T","O","K","Z"],
    ["S","E","T","E","N","R","E","B","U","K","X","A"],
    ["E","X","R","Q","W","E","R","T","Y","U","I","I"],
    ["M","Z","Q","E","W","R","T","Y","U","O","P","D"],
    ["E","X","Q","W","D","Z","T","Y","U","O","P","A"],
    ["R","Q","W","X","A","I","V","U","O","P","X","N"],
    ["S","W","X","K","Q","S","S","U","I","O","P","Z"],
    ["O","X","F","Q","W","R","T","Y","U","I","O","X"],
    ["N","A","Q","W","E","R","T","Y","U","I","O","Z"],
    ["K","X","Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L","Z","X","V"],
    ["Q","W","E","R","T","Z","X","C","V","B","N","M"],
  ],

  clues: [
    "A falha começou em uma query mal estruturada",
    "O ataque explorou um serviço orquestrado",
    "O cache foi usado como vetor de exposição",
    "Nem tudo no grid está listado",
    "Existe uma tentativa clara de incriminar outra pessoa",
    "A mesma letra conecta múltiplos sistemas críticos",
  ],

  suspects: ["ANTHONY", "SABRINA", "ISABELLE", "EMERSON"],
  languages: ["JAVA", "PYTHON", "GO", "RUST"],
  locations: ["BACK", "FRONT", "MOBILE", "DATABASE"],

  // solução agora exige interpretação
  culprit: "EMERSON",
  language: "GRAPHQL",
  location: "KUBERNETES",

  hiddenClues: [
    "TOKEN",
    "LEAK",
    "COMMIT"
  ],

  explanation: `
  - GRAPHQL indica origem da falha
  - KUBERNETES mostra ambiente comprometido
  - REDIS + CACHE indicam exposição prolongada
  - TOKEN revela vazamento de autenticação
  - LEAK cruza EMERSON mas também cria ambiguidade
  - PYTHON é falsa pista

  O jogador precisa perceber que:
  - EMERSON está presente verticalmente (central)
  - Ele cruza múltiplos pontos críticos (REDIS, KAFKA, CACHE)
  - As palavras escondidas indicam vazamento ativo, não acidental

  Conclusão:
  EMERSON explorou uma falha em GRAPHQL dentro do KUBERNETES,
  utilizando cache (REDIS) sem TTL para vazar tokens de usuários.
  `,
};

export default case4;
