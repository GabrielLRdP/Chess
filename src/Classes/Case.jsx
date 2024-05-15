class Case {
  constructor(color, piece, decoration, row, column) {
    this.color = color;
    this.piece = piece;
    this.decoration = decoration;
    this.row = row;
    this.column = column;
  }

  render() {
    return <div></div>;
  }

  legalMoves() {}
}
