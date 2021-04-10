// Rest Parameter
function addNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}
