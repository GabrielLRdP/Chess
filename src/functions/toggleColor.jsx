const toggleColor = (color) => {
  color === "black" ? (color = "white") : (color = "black");

  return color;
};

export { toggleColor };
