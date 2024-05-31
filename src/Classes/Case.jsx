import CaseRender from "../Components/CaseRender/CaseRender";
import { createAllCases } from "../functions/createAllCases";

class Case {
  constructor(
    color,
    piece,
    decoration,
    column,
    row,
    setSelectedCase,
    selectedCase,
    caseList,
    setCaseList
  ) {
    this.color = color;
    this.piece = piece;
    this.decoration = decoration;
    this.row = row;
    this.column = column;
    this.isLegalMoove = false;
    this.isSelected = false;
    this.selectedCase = selectedCase;
    this.setSelectedCase = setSelectedCase;
    this.caseList = caseList;
    this.setCaseList = setCaseList;
  }

  convertToComponent() {
    return (
      <CaseRender
        key={String(this.column) + String(this.row)}
        thisCase={this}
      />
    );
  }

  legalMoves() {}

  //create all will create a list of all cases, from top to bottom, left to right
  static createAll(fen, selectedCase, setSelectedCase, caseList, setCaseList) {
    return createAllCases(
      fen,
      selectedCase,
      setSelectedCase,
      caseList,
      setCaseList
    );
  }

  static updateAll() {}
}

export default Case;
