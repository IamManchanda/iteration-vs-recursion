function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i -= 1) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}

console.log(`
function iterativeFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let previous = 0;
  let current = 1;
  for (let i = n; i > 1; i -= 1) {
    let next = previous + current;
    previous = current;
    current = next;
  }
  return current;
}
`);
console.log("iterativeFibonacci(2); //", iterativeFibonacci(2));
console.log("iterativeFibonacci(6); //", iterativeFibonacci(6));
console.log("iterativeFibonacci(10); //", iterativeFibonacci(10));
console.log("iterativeFibonacci(20); //", iterativeFibonacci(20));
