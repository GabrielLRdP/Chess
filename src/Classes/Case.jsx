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

  render(color, coord, piece) {
    return (
      <CaseRender
        color={color}
        piece={piece}
        key={String(coord[0]) + String(coord[1])}
      />
    );
  }

  legalMoves() {}

  static createAll(fen) {
    fen = "r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1";
    let caseList = [];

    let caseColor = "white";
    for (let rows = 8; rows > 0; rows--) {
      for (let columns = 1; columns < 9; columns++) {
        const piece = fenTraductor(fen, columns, rows);
        const newCase = new Case(caseColor, "", "", columns, rows);
        caseList.push(newCase.render(caseColor, [columns, rows], piece));
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
