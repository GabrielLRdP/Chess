import { fenTraductor } from "./fenTraductor";
import Case from "../Classes/Case";
import { toggleColor } from "./toggleColor";

const createAllCases = (fen, selectedCase, setSelectedCase) => {
  let caseList = [];

  //we initialize the color of the first case (a8) wich is white, we will then alternate
  let caseColor = "white";

  for (let row = 8; row > 0; row--) {
    for (let column = 1; column < 9; column++) {
      const piece = fenTraductor(fen, column, row);

      const newCase = new Case(
        caseColor,
        piece,
        "",
        column,
        row,
        setSelectedCase
      );

      if (selectedCase[0] === row && selectedCase[1] === column) {
        newCase.isSelected = true;
      } else {
        newCase.isSelected = false;
      }

      caseList.push(newCase.convertToComponent());

      caseColor = toggleColor(caseColor);
    }
    caseColor = toggleColor(caseColor);
  }
  return caseList;
};

export { createAllCases };
