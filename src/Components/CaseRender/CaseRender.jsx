import { useEffect, useState } from "react";
import { makeMoove } from "../../functions/makeMoove";

const CaseRender = ({ thisCase, fen, setFen }) => {
  const [caseClass, setCaseClass] = useState("case " + thisCase.color);
  // const alphabet = "abcdefgh";

  useEffect(() => {
    if (thisCase.isSelected) {
      setCaseClass("case " + thisCase.color + " " + "selected");
    } else {
      setCaseClass("case " + thisCase.color);
    }
  }, [thisCase.isSelected, thisCase.piece]);

  const handleClick = () => {
    let newSelectedCase = {};
    if (!thisCase.isSelected) {
      if (thisCase.selectedCase.row) {
        makeMoove(
          fen,
          setFen,
          thisCase.selectedCase,
          thisCase,
          thisCase.caseList,
          thisCase.setCaseList
        );
      } else {
        newSelectedCase = thisCase;
        thisCase.isSelected = true;
      }
    } else {
      thisCase.isSelected = false;
    }
    thisCase.setSelectedCase(newSelectedCase);
  };
  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={caseClass}
    >
      {thisCase.piece.icon}
    </div>
  );
};

export default CaseRender;
