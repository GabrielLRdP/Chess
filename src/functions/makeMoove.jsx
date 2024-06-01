import Case from "../Classes/Case";
import { fenExpander } from "./fenExpander";
import { fenReductor } from "./fenReductor";
import { replaceAt } from "./replaceAt";

const makeMoove = (
  fen,
  setFen,
  originCase,
  targetCase
  // caseList,
  // setCaseList
) => {
  //[colonne, ligne]
  const originCoord = { column: originCase.column, row: originCase.row };
  const destinationCoord = { column: targetCase.column, row: targetCase.row };
  let newFen = fenExpander(fen);
  const pieceToMoove = originCase.piece.fenName;

  console.log(fen, setFen);
  console.log(originCase, targetCase);

  // "rnb00Xnr/pp00kppp/00q00000/00ppp000/0000XP00/00000N00/PPPPP0PP/RNBQKB0R"

  //Etape 1, retirer la pièce de son emplacement d'origine

  const indexToReplace0 = originCoord.column - 1 + (8 - originCoord.row) * 9;
  newFen = replaceAt(newFen, indexToReplace0, "0");

  //Etape 2, remplacer le contenu de la case de destination par la pièce en mouvement

  const indexToReplacePiece =
    destinationCoord.column - 1 + (8 - destinationCoord.row) * 9;
  newFen = replaceAt(newFen, indexToReplacePiece, pieceToMoove);
  //Etape 3 on met à jour la position

  newFen = fenReductor(newFen);
  setFen(newFen);

  return "";
};

export { makeMoove };

// let newCaseList = [...caseList];

// const caseToEmpty = newCaseList.find((element) => {
//   return (
//     originCase.row === element._self.row &&
//     originCase.column === element._self.column
//   );
// });

// caseToEmpty._self.piece = null;
// console.log("case to empty =>", caseToEmpty);
// console.log("newcaseList", newCaseList);
// setCaseList(newCaseList);
