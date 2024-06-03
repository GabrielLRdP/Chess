import { pawnMooves } from "./Mooves/pawnMooves";
import { bishopMooves } from "./Mooves/bishopMooves";
import { kingMooves } from "./Mooves/kingMooves";
import { queenMooves } from "./Mooves/queenMooves";
import { knightMooves } from "./Mooves/knightMooves";
import { rookMooves } from "./Mooves/rookMooves";

const displayLegalMooves = (selectedCase) => {
  const piece = selectedCase.piece.fenName;
  const pieceColor = piece.toUpperCase() === piece ? "white" : "black";

  const moovesDictionnary = {
    p: pawnMooves,
    r: rookMooves,
    q: queenMooves,
    k: kingMooves,
    b: bishopMooves,
    n: knightMooves,
  };

  const legalMooves = moovesDictionnary[piece.toLowerCase()](
    selectedCase,
    pieceColor
  );
};

export { displayLegalMooves };
