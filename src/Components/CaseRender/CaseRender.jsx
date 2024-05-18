import { useEffect, useState } from "react";

const CaseRender = ({ thisCase }) => {
  const [caseClass, setCaseClass] = useState("case " + thisCase.color);
  // const alphabet = "abcdefgh";

  useEffect(() => {
    if (thisCase.isSelected) {
      setCaseClass("case " + thisCase.color + " " + "selected");
    } else {
      setCaseClass("case " + thisCase.color);
    }
  }, [thisCase.isSelected]);

  const handleclick = () => {
    let newSelectedCase = [-1, -1];
    if (!thisCase.isSelected) {
      newSelectedCase = [thisCase.row, thisCase.column];
      thisCase.isSelected = true;
    } else {
      thisCase.isSelected = false;
    }
    thisCase.setSelectedCase(newSelectedCase);
    console.log(newSelectedCase);

    console.log(thisCase);
  };
  return (
    <div
      onClick={() => {
        handleclick();
      }}
      className={caseClass}
    >
      {thisCase.piece}
    </div>
  );
};

export default CaseRender;
