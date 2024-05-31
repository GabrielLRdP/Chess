//fonction qui traduit un FEN de ce type : " r0bk000r/p00pBpNp/n0000n00/0p0NP00P/000000P0/000P0000/P0P0K000/q0000b0"
// vers ce type : r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1

const fenReductor = (fen) => {
  const reg = new RegExp("\\d+", "g");
  const numbers = fen.match(reg);

  numbers.forEach((element) => {
    fen = fen.replace(element, element.length.toString());
  });
  return fen;
};

export { fenReductor };
