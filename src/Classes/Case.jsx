import CaseRender from "../Components/CaseRender/CaseRender";
import { fenTraductor } from "../functions/fenTraductor";

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
        color={this.color}
        piece={this.piece}
        key={String(this.column) + String(this.row)}
        thisCase={this}
        decoration={""}
      />
    );
  }

  legalMoves() {}

  //create all will create a list of all cases, from top to bottom, left to right
  static createAll(fen, selectedCase, setSelectedCase) {
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

        caseColor === "black" ? (caseColor = "white") : (caseColor = "black");
      }
      caseColor === "black" ? (caseColor = "white") : (caseColor = "black");
    }
    return caseList;
  }

  static updateAll() {}
}

export default Case;
