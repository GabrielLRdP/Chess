import Case from "../../Classes/Case";

const pawnMooves = (selectedCase, color) => {
  const legalMooveList = [];

  let caseList = [...selectedCase.caseList];

  //direction sera égale à -1 si la pièce est noire, à 1 si la pièce est blanche
  const direction = (color === "black") * -1 + (color === "white") * 1;

  const caseCoord = { row: selectedCase.row, column: selectedCase.column };
  console.log(caseCoord);

  //etape 1, mettre en surbrillance la case devant le pion

  caseList.forEach((element) => {
    console.log(element);
    if (
      element._self.row === selectedCase.row + direction &&
      element._self.column === selectedCase.column
    ) {
      element._self.isLegalMoove = true;
    }
  });

  selectedCase.setCaseList(caseList);

  return legalMooveList;
};

export { pawnMooves };
