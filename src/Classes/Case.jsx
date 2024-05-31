import CaseRender from "../Components/CaseRender/CaseRender";
import { createAllCases } from "../functions/createAllCases";
import { makeMoove } from "../functions/makeMoove";

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

  convertToComponent(fen, setFen) {
    return (
      <CaseRender
        key={String(this.column) + String(this.row)}
        thisCase={this}
        fen={fen}
        setFen={setFen}
      />
    );
  }

  legalMoves() {}

  //create all will create a list of all cases, from top to bottom, left to right
  static createAll(
    fen,
    setFen,
    selectedCase,
    setSelectedCase,
    caseList,
    setCaseList
  ) {
    return createAllCases(
      fen,
      setFen,
      selectedCase,
      setSelectedCase,
      caseList,
      setCaseList
    );
  }

  // static makeMoove(fen, originCase, targetCase, caseList, setCaseList) {
  //   makeMoove(fen, originCase, targetCase, caseList, setCaseList);
  // }

  static updateAll() {}
}

export default Case;
