// ─── case4.js ───────────────────────────────────────────────
const case4 = {
  id: 4,
  difficulty: "SUPER DIFÍCIL",
  diffColor: "#620797",
  title: "O Bug do Estagiário",
  subtitle: "O sistema caiu na primeira semana do novo estagiário...",

  // Grid 16×16. Após encontrar as 18 palavras, as primeiras 9 letras livres
  // (lidas linha a linha, esquerda→direita) formam a palavra oculta: SABOTAGEM
  grid: [
  //   0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15
    ["M", "T", "T", "A", "B", "O", "K", "U", "B", "E", "R", "N", "E", "T", "E", "S"],  // 0
    ["S", "O", "Z", "W", "G", "E", "M", "J", "Z", "W", "O", "E", "Q", "J", "M", "Z"],  // 1
    ["A", "K", "G", "R", "A", "P", "H", "Q", "L", "S", "V", "M", "J", "X", "O", "Z"],  // 2
    ["B", "E", "Z", "G", "W", "Q", "J", "V", "R", "W", "X", "E", "Q", "J", "N", "Z"],  // 3
    ["O", "N", "W", "V", "O", "X", "Q", "E", "J", "E", "V", "R", "Z", "X", "G", "J"],  // 4
    ["M", "X", "Q", "J", "V", "D", "M", "X", "E", "Q", "D", "S", "V", "W", "O", "A"],  // 5
    ["S", "D", "O", "C", "K", "E", "R", "Z", "D", "I", "J", "E", "V", "W", "D", "I"],  // 6
    ["A", "X", "Q", "J", "V", "A", "W", "Z", "X", "Q", "J", "N", "S", "W", "B", "D"],  // 7
    ["N", "Z", "X", "Q", "K", "J", "V", "W", "Z", "X", "Q", "X", "J", "V", "Z", "A"],  // 8
    ["T", "X", "Q", "F", "Z", "P", "R", "O", "D", "U", "C", "T", "I", "O", "N", "N"],  // 9
    ["H", "Z", "A", "L", "X", "I", "O", "V", "E", "R", "F", "L", "O", "W", "C", "X"],  // 10
    ["O", "K", "X", "Z", "E", "T", "W", "V", "J", "Z", "X", "Q", "W", "V", "A", "Z"],  // 11
    ["N", "Z", "X", "W", "Q", "A", "S", "A", "B", "R", "I", "N", "A", "V", "C", "Z"],  // 12
    ["Y", "X", "E", "V", "J", "Z", "K", "E", "X", "P", "L", "O", "I", "T", "H", "W"],  // 13
    ["Z", "X", "W", "V", "Q", "J", "Z", "X", "N", "O", "H", "T", "Y", "P", "E", "V"],  // 14
    ["W", "X", "Z", "C", "O", "M", "M", "I", "T", "V", "J", "Z", "X", "W", "V", "Q"],  // 15
  ],

   wordList: [
    { word: "MONGODB",
      cells: [{r:1,c:14},{r:2,c:14},{r:3,c:14},{r:4,c:14},{r:5,c:14},{r:6,c:14},{r:7,c:14}] },
    //         M        O        N        G        O        D        B

    { word: "KUBERNETES",
      cells: [{r:0,c:6},{r:0,c:7},{r:0,c:8},{r:0,c:9},{r:0,c:10},{r:0,c:11},{r:0,c:12},{r:0,c:13},{r:0,c:14},{r:0,c:15}] },
    //         K        U        B        E        R        N        E        T        E        S

    { word: "TOKEN",
      cells: [{r:0,c:1},{r:1,c:1},{r:2,c:1},{r:3,c:1},{r:4,c:1}] },
    //         T        O(compartilhado MONGODB)  K        E        N

    { word: "GRAPHQL",
      cells: [{r:2,c:2},{r:2,c:3},{r:2,c:4},{r:2,c:5},{r:2,c:6},{r:2,c:7},{r:2,c:8},] },
    //         G        R        A        P        H        Q        L

    { word: "EMERSON",
      cells: [{r:6,c:5},{r:5,c:6},{r:4,c:7},{r:3,c:8},{r:2,c:9},{r:1,c:10},{r:0,c:11}] },
    //         E        M        E        R        S        O        N

    { word: "NADIA",
      cells: [{r:9,c:15},{r:8,c:15},{r:7,c:15},{r:6,c:15},{r:5,c:15}] },
    //         N(↑ lido de baixo pra cima)  A  D  I  A

    { word: "REDES",
      cells: [{r:3,c:8},{r:4,c:9},{r:5,c:10},{r:6,c:11},{r:7,c:12}] },
    //         R        E        D        I        S
    // EMERSON r:6,c:11=O. REDIS r:6,c:11=I — CONFLITO!
    // Mover REDIS: r:3,c:9 → r:7,c:13
    // grid[3][9]=W,grid[4][10]=V... letras livres, sem conflito

    { word: "DOCKER",
      cells: [{r:6,c:1},{r:6,c:2},{r:6,c:3},{r:6,c:4},{r:6,c:5},{r:6,c:6}] },
    //         D        O        C        K        E        R

    { word: "KAFKA",
      cells: [{r:11,c:1},{r:10,c:2},{r:9,c:3},{r:8,c:4},{r:7,c:5}] },
    //         K(↗)     A        F        K        A

    { word: "PRODUCTION",
      cells: [{r:9,c:5},{r:9,c:6},{r:9,c:7},{r:9,c:8},{r:9,c:9},{r:9,c:10},{r:9,c:11},{r:9,c:12},{r:9,c:13},{r:9,c:14}] },
    //         P        R        O        D        U        C        T        I        O        N

    { word: "CACHE",
      cells: [{r:10,c:14},{r:11,c:14},{r:12,c:14},{r:13,c:14},{r:14,c:14}] },
    //         C        A        C        H        E

    { word: "ANTHONY",
      cells: [{r:7,c:0},{r:8,c:0},{r:9,c:0},{r:10,c:0},{r:11,c:0},{r:12,c:0},{r:13,c:0}] },
    //         A(↓)     N        T        H        O        N        Y

    { word: "LEAK",
      cells: [{r:10,c:3},{r:11,c:4},{r:12,c:5},{r:13,c:6}] },
    //         L(↘)     E        A        K

    { word: "EXPLOIT",
      cells: [{r:13,c:7},{r:13,c:8},{r:13,c:9},{r:13,c:10},{r:13,c:11},{r:13,c:12},{r:13,c:13}] },
    //         E        X        P        L        O        I        T

    { word: "COMMIT",
      cells: [{r:15,c:3},{r:15,c:4},{r:15,c:5},{r:15,c:6},{r:15,c:7},{r:15,c:8}] },
    //         C        O        M        M        I        T

    { word: "SABRINA",
      cells: [{r:12,c:6},{r:12,c:7},{r:12,c:8},{r:12,c:9},{r:12,c:10},{r:12,c:11},{r:12,c:12}] },
    //         S        A        B        R        I        N        A

    { word: "PYTHON",
      cells: [{r:14,c:13},{r:14,c:12},{r:14,c:11},{r:14,c:10},{r:14,c:9},{r:14,c:8}] },
    //         N(←)     O        T        H        Y        P

    { word: "OVERFLOW",
      cells: [{r:10,c:6},{r:10,c:7},{r:10,c:8},{r:10,c:9},{r:10,c:10},{r:10,c:11},{r:10,c:12},{r:10,c:13}] },
    //         O        V        E        R        F        L        O        W
  ],

  clues: [
    "A falha começou em uma query mal estruturada",
    "O ataque explorou um serviço orquestrado",
    "O cache foi usado como vetor de exposição",
    "Nem tudo no grid está listado — leia nas entrelinhas",
    "Existe uma tentativa clara de incriminar outra pessoa",
    "A mesma letra conecta múltiplos sistemas críticos",
  ],

  suspects: ["EMERSON", "NADIA", "ANTHONY", "SABRINA"],
  languages: ["GRAPHQL", "PYTHON", "RUST", "GO"],
  locations: ["KUBERNETES", "REDES", "KAFKA", "DATABASE"],

  hiddenAnswer: "INVASAO",
  narrative:
    "O caso mais complexo da série. Uma cadeia de falhas encobriu o verdadeiro culpado por dias. A vulnerabilidade estava na API exposta sem autenticação — alguém internamente sabia do buraco e explorou antes que fosse corrigido. As evidências foram cuidadosamente apagadas, mas os logs de REDE não mentem.",
  culprit: "EMERSON",
  language: "GRAPHQL",
  location: "KUBERNETES",
  hiddenClues: ["TOKEN", "LEAK"],

  explanation: `
  - GRAPHQL indica a origem da falha (query sem validação)
  - KUBERNETES mostra o ambiente comprometido
  - REDIS + CACHE indicam exposição prolongada de dados
  - TOKEN (vertical oculto) revela vazamento de autenticação
  - LEAK cruza a área de EMERSON — não é coincidência
  - PYTHON é falsa pista: aparece invertida, nunca foi usada no sistema
  - KAFKA e REDIS mostram que o ataque foi sofisticado, não acidental
  - NADIA aparece invertida — tentativa de incriminar a suspeita errada

  Conclusão:
  EMERSON explorou uma falha no GRAPHQL dentro do KUBERNETES,
  usando cache (REDIS) sem TTL para vazar tokens de sessão ativos.
  `,
};

export default case4;