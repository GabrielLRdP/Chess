import CaseRender from "../Components/CaseRender/CaseRender";
import { createAllCases } from "../functions/createAllCases";

class Case {
  constructor(color, piece, decoration, column, row, setSelectedCase) {
    this.color = color;
    this.piece = piece;
    this.decoration = decoration;
    this.row = row;
    this.column = column;
    this.isLegalMoove = false;
    this.isSelected = false;
    this.setSelectedCase = setSelectedCase;
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
  static createAll(fen, selectedCase, setSelectedCase) {
    return createAllCases(fen, selectedCase, setSelectedCase);
  }

  static updateAll() {}
}

export default Case;
