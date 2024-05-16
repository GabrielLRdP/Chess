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
    fen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
    let caseList = [];

    let caseColor = "black";
    for (let rows = 8; rows > 0; rows--) {
      for (let columns = 1; columns < 9; columns++) {
        const piece = fenTraductor(fen, columns, rows);
        const newCase = new Case(caseColor, "", "", columns, rows);
        caseList.push(newCase.render(caseColor, [columns, rows], piece));
        caseColor === "black" ? (caseColor = "white") : (caseColor = "black");
      }
      caseColor === "black" ? (caseColor = "white") : (caseColor = "black");
    }

    return caseList;
  }

  static updateAll() {}
}

export default Case;
