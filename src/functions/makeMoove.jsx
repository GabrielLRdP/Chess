import Case from "../Classes/Case";
import { fenExpander } from "./fenExpander";
import { fenReductor } from "./fenReductor";

const makeMoove = (
  fen,
  setFen,
  originCase,
  targetCase
  // caseList,
  // setCaseList
) => {
  //[colonne, ligne]
  const originCoord = [originCase.column, originCase.row];
  const destinationCoord = [targetCase.column, targetCase.row];
  let newFen = fenExpander(fen);

  console.log(fen, setFen);
  console.log(originCase, targetCase);

  //Etape 1, retirer la pièce de son emplacement d'origine

  //Etape 2, remplacer le contenu de la case de destination par la pièce en mouvement

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
