// fonction qui permet de remplacer un élément d'une chaine de caracèrte
const replaceAt = (string, index, replacement) => {
  return (
    string.substring(0, index) +
    replacement +
    string.substring(index + replacement.length)
  );
};

export { replaceAt };
