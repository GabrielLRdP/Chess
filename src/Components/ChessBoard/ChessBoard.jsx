import Case from "../Case/Case";

const ChessBoard = () => {
  let caseList = [];

  let caseColor = "black";
  for (let rows = 8; rows > 0; rows--) {
    for (let columns = 1; columns < 9; columns++) {
      caseList.push(<Case color={caseColor} coord={[columns, rows]} />);
      caseColor === "black" ? (caseColor = "white") : (caseColor = "black");
    }
    caseColor === "black" ? (caseColor = "white") : (caseColor = "black");
  }
  return <div className="chess-board">{caseList}</div>;
};

export default ChessBoard;
