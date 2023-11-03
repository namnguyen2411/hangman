export function removeSpace(word: string): string {
  if (word.includes(" ")) {
    const newWord = word.replace(" ", "");
    return newWord;
  }
  return word;
}
