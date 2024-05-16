import CaseRender from "../CaseRender/CaseRender";
import Case from "../../Classes/Case";

const ChessBoard = () => {
  const caseList = Case.createAll();

  return <div className="chess-board">{caseList}</div>;
};

export default ChessBoard;
