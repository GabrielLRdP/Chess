import {
  blackPawn,
  whitePawn,
  whiteKing,
  blackKing,
  whiteQueen,
  blackQueen,
  whiteBishop,
  blackBishop,
  whiteKnight,
  blackKnight,
  whiteRook,
  blackRook,
} from "../icons/pieces";

// fen = "r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1";

const fenTraductor = (fen, column, row) => {
  const trad = {
    r: blackRook,
    n: blackKnight,
    b: blackBishop,
    q: blackQueen,
    k: blackKing,
    p: blackPawn,
    R: whiteRook,
    N: whiteKnight,
    B: whiteBishop,
    Q: whiteQueen,
    K: whiteKing,
    P: whitePawn,
    0: null,
  };
  let translatedFen = fen;
  //1ère étape, on change notre chaine de caractère pour transformer les nombres en cases vides

  const reg = new RegExp("\\d+", "g");
  const numbers = fen.match(reg);

  //fonction qui va convertir un nombre en une chaine de caractère contenant n fois 0
  //exemple convert(3) => "000" convert (5) => "00000"
  const convert = (num) => {
    let str = "";
    for (let i = 0; i < num; i++) {
      str += "0";
    }
    return str;
  };
  // fen = "r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1";
  numbers.forEach((element) => {
    translatedFen = translatedFen.replace(element.toString(), convert(element));
  });

  translatedFen = translatedFen.replaceAll("/", "");

  //   translatedFen = translatedFen.split("").reverse().join("");

  const elementIndex = 8 * (9 - row - 1) + column - 1;
  const piece = translatedFen.charAt(elementIndex);

  return trad[piece];
};

export { fenTraductor };
