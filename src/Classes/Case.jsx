import CaseRender from "../Components/CaseRender/CaseRender";
import { fenTraductor } from "../functions/fenTraductor";

class Case {
  constructor(color, piece, decoration, column, row) {
    this.color = color;
    this.piece = piece;
    this.decoration = decoration;
    this.row = row;
    this.column = column;
  }

  convertToComponent() {
    return (
      <CaseRender
        color={this.color}
        piece={this.piece}
        key={String(this.column) + String(this.row)}
        decoration={""}
      />
    );
  }

  legalMoves() {}

  //create all will create a list of all cases, from top to bottom, left to right
  static createAll(fen) {
    let caseList = [];

    //we initialize the color of the first case (a8) wich is white, we will then alternate
    let caseColor = "white";

    for (let row = 8; row > 0; row--) {
      for (let column = 1; column < 9; column++) {
        const piece = fenTraductor(fen, column, row);

        const newCase = new Case(caseColor, piece, "", column, row);

        caseList.push(newCase.convertToComponent());

        caseColor === "black" ? (caseColor = "white") : (caseColor = "black");
      }
      caseColor === "black" ? (caseColor = "white") : (caseColor = "black");
    }
    console.log(caseList);
    return caseList;
  }

  static updateAll() {}
}

export default Case;
