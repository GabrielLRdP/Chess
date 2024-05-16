import CaseRender from "../CaseRender/CaseRender";
import Case from "../../Classes/Case";

const ChessBoard = () => {
  const exempleFen = "rnb2bnr/pp2kppp/2q5/2ppp3/5P2/5N2/PPPPP1PP/RNBQKB1R";
  const caseList = Case.createAll(exempleFen);

  return <div className="chess-board">{caseList}</div>;
};

export default ChessBoard;
