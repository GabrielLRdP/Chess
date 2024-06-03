import { useEffect, useState } from "react";
import { makeMoove } from "../../functions/makeMoove";
import { displayLegalMooves } from "../../functions/displayLegalMooves";

const CaseRender = ({ thisCase, fen, setFen }) => {
  const [caseClass, setCaseClass] = useState("case " + thisCase.color);
  // const alphabet = "abcdefgh";

  useEffect(() => {
    if (thisCase.isSelected) {
      setCaseClass("case " + thisCase.color + " " + "selected");
    } else {
      setCaseClass("case " + thisCase.color);
    }

    if (thisCase.isLegalMoove) {
      console.log("coucou");
      let a = document.getElementById(
        "legalMoove" + thisCase.row + thisCase.column
      );
      a.classList.remove("hidden");
    }
  }, [thisCase.isSelected, thisCase.piece, thisCase.isLegalMoove]);

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
        displayLegalMooves(thisCase);
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
      <div
        className="legal-moove hidden"
        id={"legalMoove" + thisCase.row + thisCase.column}
      ></div>
    </div>
  );
};

export default CaseRender;
