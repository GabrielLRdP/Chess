import CaseRender from "../CaseRender/CaseRender";
import Case from "../../Classes/Case";
import { useEffect, useState } from "react";

const ChessBoard = () => {
  const [position, setposition] = useState(
    "rnb2bnr/pp2kppp/2q5/2ppp3/5P2/5N2/PPPPP1PP/RNBQKB1R"
  );
  const [caseList, setCaseList] = useState();
  const [selectedCase, setSelectedCase] = useState([-1, -1]);

  useEffect(() => {
    setCaseList(Case.createAll(position, selectedCase, setSelectedCase));
  }, [position, selectedCase]);

  return <div className="chess-board">{caseList}</div>;
};

export default ChessBoard;
