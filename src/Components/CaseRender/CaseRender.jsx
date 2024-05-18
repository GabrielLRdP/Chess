import { useEffect, useState } from "react";

const CaseRender = ({ color, piece, thisCase }) => {
  const [caseClass, setCaseClass] = useState("case " + color);
  // const alphabet = "abcdefgh";

  useEffect(() => {
    if (thisCase.isSelected) {
      setCaseClass("case " + color + " " + "selected");
    } else {
      setCaseClass("case " + color);
    }
  }, [thisCase.isSelected]);

  const handleclick = () => {
    let newSelectedCase = [-1, -1];
    if (!thisCase.isSelected) {
      newSelectedCase = [thisCase.row, thisCase.column];
      thisCase.isSelected = true;
      // setCaseClass("case " + color + " " + "selected");
    } else {
      thisCase.isSelected = false;
      // setCaseClass("case " + color);
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
      {piece}
    </div>
  );
};

export default CaseRender;
