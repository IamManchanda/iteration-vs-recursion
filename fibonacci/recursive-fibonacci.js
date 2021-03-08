function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}

console.log(`
function recursiveFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return recursiveFibonacci(n - 2) + recursiveFibonacci(n - 1);
}
`);
console.log("recursiveFibonacci(2); //", recursiveFibonacci(2));
console.log("recursiveFibonacci(6); //", recursiveFibonacci(6));
console.log("recursiveFibonacci(10); //", recursiveFibonacci(10));
console.log("recursiveFibonacci(20); //", recursiveFibonacci(20));
