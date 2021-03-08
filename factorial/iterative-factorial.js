function iterativeFactorial(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n -= 1;
  }
  return product;
}

console.log(`
function iterativeFactorial(n) {
  let product = 1;
  while (n > 0) {
    product *= n;
    n -= 1;
  }
  return product;
}
`);
console.log("iterativeFactorial(3); //", iterativeFactorial(3));
console.log("iterativeFactorial(4); //", iterativeFactorial(4));
console.log("iterativeFactorial(5); //", iterativeFactorial(5));
