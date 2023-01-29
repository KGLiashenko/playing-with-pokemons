export const capitalizeFirstLetter = (word: string) => {
  if (!word || word.length < 1) return "";
  if (word.length < 2) return word.toUpperCase();
  return word[0].toUpperCase() + word.substring(1);
};
