export function random(strArray: string[]): string {
  const randomNum = Math.round(Math.random() * strArray.length);
  const word = strArray[randomNum];

  return word;
}
