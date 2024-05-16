const CaseRender = ({ color, piece }) => {
  const alphabet = "abcdefgh";
  return <div className={"case " + color}>{piece}</div>;
};

export default CaseRender;
