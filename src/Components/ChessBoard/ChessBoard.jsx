import CaseRender from "../CaseRender/CaseRender";
import Case from "../../Classes/Case";
import { useEffect, useState } from "react";

const ChessBoard = () => {
  const [fen, setFen] = useState(
    "rnb2bnr/pp2kppp/2q5/2ppp3/5P2/5N2/PPPPP1PP/RNBQKB1R"
  );
  const [caseList, setCaseList] = useState();
  const [selectedCase, setSelectedCase] = useState({});

  useEffect(() => {
    setCaseList(
      Case.createAll(
        fen,
        setFen,
        selectedCase,
        setSelectedCase,
        caseList,
        setCaseList
      )
    );
  }, [fen, selectedCase]);

  return <div className="chess-board">{caseList}</div>;
};

export default ChessBoard;
