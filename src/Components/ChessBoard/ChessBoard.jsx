import CaseRender from "../CaseRender/CaseRender";
import Case from "../../Classes/Case";
import { useEffect, useState } from "react";

const ChessBoard = () => {
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
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
