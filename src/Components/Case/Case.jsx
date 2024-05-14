const Case = ({ color, coord }) => {
  const alphabet = "abcdefgh";
  return (
    <div className={"case " + color}>
      {alphabet[coord[0] - 1]}
      {coord[1]}
    </div>
  );
};

export default Case;
