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
import { fenExpander } from "./fenExpander";

// fen = "r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1";

const fenToPiece = (fen, column, row) => {
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

  let translatedFen = fenExpander(fen);
  translatedFen = translatedFen.replaceAll("/", "");

  //   translatedFen = translatedFen.split("").reverse().join("");

  const elementIndex = 8 * (9 - row - 1) + column - 1;
  const piece = translatedFen.charAt(elementIndex);

  return { fenName: piece, icon: trad[piece] };
};

export { fenToPiece };
