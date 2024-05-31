import Case from "../Classes/Case";

const makeMoove = (originCase, targetCase, caseList, setCaseList) => {
  let newCaseList = [...caseList];

  const caseToEmpty = newCaseList.find((element) => {
    return (
      originCase.row === element._self.row &&
      originCase.column === element._self.column
    );
  });

  caseToEmpty._self.piece = null;
  console.log("case to empty =>", caseToEmpty);
  console.log("newcaseList", newCaseList);
  setCaseList(newCaseList);

  return "";
};

export { makeMoove };
