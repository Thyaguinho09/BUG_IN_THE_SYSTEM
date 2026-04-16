const case2 = {
  id: 2,
  difficulty: "MEDIO",
  diffColor: "#ffd600",
  title: "A Queda do Servidor",
  subtitle: "O banco de dados parou de responder às 03h da manhã...",

  grid: [
  //  0    1    2    3    4    5    6    7    8    9   10   11
    ["B", "X", "S", "E", "R", "V", "E", "R", "Z", "T", "W", "Q"],  // 0
    ["A", "K", "E", "M", "E", "R", "S", "O", "N", "T", "J", "Q"],  // 1
    ["C", "P", "W", "Z", "F", "X", "L", "M", "Q", "E", "H", "U"],  // 2
    ["K", "T", "H", "Y", "A", "G", "O", "Z", "P", "S", "R", "E"],  // 3
    ["E", "W", "Z", "X", "F", "Q", "L", "M", "J", "T", "W", "R"],  // 4
    ["N", "D", "A", "T", "A", "B", "A", "S", "E", "E", "W", "Y"],  // 5
    ["D", "P", "X", "F", "W", "D", "E", "B", "U", "G", "Z", "K"],  // 6
    ["Z", "W", "L", "P", "Y", "T", "H", "O", "N", "Q", "X", "J"],  // 7
    ["X", "F", "O", "Z", "W", "P", "Q", "R", "L", "J", "M", "N"],  // 8
    ["W", "K", "G", "S", "E", "S", "S", "I", "O", "N", "X", "P"],  // 9
    ["Z", "X", "S", "M", "E", "T", "H", "O", "D", "S", "W", "L"],  // 10
    ["K", "W", "P", "Z", "X", "C", "A", "C", "H", "E", "Q", "R"],  // 11
  ],

  wordList: [
    // vertical ↓
    { word: "BACKEND",
      cells: [{r:0,c:0},{r:1,c:0},{r:2,c:0},{r:3,c:0},{r:4,c:0},{r:5,c:0},{r:6,c:0}] },
    //        B        A        C        K        E        N        D

    { word: "TESTE",
      cells: [{r:1,c:9},{r:2,c:9},{r:3,c:9},{r:4,c:9},{r:5,c:9}] },
    //        T        O        K        E        N  (coluna 9 foi T,O,K,E,N... mas r:1,c:9=T ✓ r:5,c:9=E — grid[5][9]=E ✓)

    { word: "LOGS",
      cells: [{r:7,c:2},{r:8,c:2},{r:9,c:2},{r:10,c:2}] },
    //        L        O        G        S

    { word: "QUERY",
      cells: [{r:1,c:11},{r:2,c:11},{r:3,c:11},{r:4,c:11},{r:5,c:11}] },
    //        Q         U         E         R         Y

    // horizontal →
    { word: "SERVER",
      cells: [{r:0,c:2},{r:0,c:3},{r:0,c:4},{r:0,c:5},{r:0,c:6},{r:0,c:7}] },
    //        S        E        R        V        E        R

    { word: "EMERSON",
      cells: [{r:1,c:2},{r:1,c:3},{r:1,c:4},{r:1,c:5},{r:1,c:6},{r:1,c:7},{r:1,c:8}] },
    //        E        M        E        R        S        O        N

    { word: "THYAGO",
      cells: [{r:3,c:1},{r:3,c:2},{r:3,c:3},{r:3,c:4},{r:3,c:5},{r:3,c:6}] },
    //        T        H        Y        A        G        O

    { word: "DATABASE",
      cells: [{r:5,c:1},{r:5,c:2},{r:5,c:3},{r:5,c:4},{r:5,c:5},{r:5,c:6},{r:5,c:7},{r:5,c:8}] },
    //        D        A        T        A        B        A        S        E

    { word: "DEBUG",
      cells: [{r:6,c:5},{r:6,c:6},{r:6,c:7},{r:6,c:8},{r:6,c:9}] },
    //        D        E        B        U        G

    { word: "PYTHON",
      cells: [{r:7,c:3},{r:7,c:4},{r:7,c:5},{r:7,c:6},{r:7,c:7},{r:7,c:8}] },
    //        P        Y        T        H        O        N

    { word: "SESSION",
      cells: [{r:9,c:3},{r:9,c:4},{r:9,c:5},{r:9,c:6},{r:9,c:7},{r:9,c:8},{r:9,c:9}] },
    //        S        E        S        S        I        O        N

    { word: "METHODS",
      cells: [{r:10,c:3},{r:10,c:4},{r:10,c:5},{r:10,c:6},{r:10,c:7},{r:10,c:8},{r:10,c:9}] },
    //        M        E        T        H        O        D        S

    { word: "CACHE",
      cells: [{r:11,c:5},{r:11,c:6},{r:11,c:7},{r:11,c:8},{r:11,c:9}] },
    //        C        A        C        H        E
  ],

  clues: [
    "O erro está relacionado ao backend",
    "A falha envolvia tokens e sessão",
    "Logs mostram problema na camada de dados",
    "Havia requisições inconsistentes durante a madrugada",
  ],

  suspects: ["EMERSON", "THYAGO", "KLAYVERTON", "ISABELLE"],
  languages: ["PYTHON", "JAVA", "GO", "RUBY"],
  locations: ["BACKEND", "FRONTEND", "MOBILE", "DEVOPS"],

  hiddenAnswer: "COLAPSO",
  narrative:
    "O servidor caiu às 03h porque Emerson executou um método não testado diretamente na DATABASE de produção. O script em Python abriu uma SESSION que nunca foi fechada, esgotando as conexões disponíveis. O DEBUG tardio revelou que o problema era óbvio — mas ninguém tinha monitoramento adequado no ambiente.",
  culprit: "EMERSON",
  language: "PYTHON",
  location: "BACKEND",
};

export default case2;