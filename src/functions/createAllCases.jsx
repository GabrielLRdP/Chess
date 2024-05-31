import { fenToPiece } from "./fenToPiece";
import Case from "../Classes/Case";
import { toggleColor } from "./toggleColor";

const createAllCases = (
  fen,
  setFen,
  selectedCase,
  setSelectedCase,
  caseList,
  setCaseList
) => {
  let newCaseList = [];

  //we initialize the color of the first case (a8) wich is white, we will then alternate
  let caseColor = "white";

  for (let row = 8; row > 0; row--) {
    for (let column = 1; column < 9; column++) {
      const piece = fenToPiece(fen, column, row);

      const newCase = new Case(
        caseColor,
        piece,
        "",
        column,
        row,
        setSelectedCase,
        selectedCase,
        caseList,
        setCaseList
      );

      if (
        selectedCase &&
        selectedCase.row === row &&
        selectedCase.column === column
      ) {
        newCase.isSelected = true;
      } else {
        newCase.isSelected = false;
      }

      newCaseList.push(newCase.convertToComponent(fen, setFen));

      caseColor = toggleColor(caseColor);
    }
    caseColor = toggleColor(caseColor);
  }
  return newCaseList;
};

export { createAllCases };
