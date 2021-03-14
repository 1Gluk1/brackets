module.exports = function check(str, bracketsConfig) {
  let bracketsPairArray = bracketsConfig.map((arr) => arr.join(""));
  let stack = [];
  for (let i of str) {
    stack.push(i);
    let closeBracket = stack[stack.length - 2] + stack[stack.length - 1];
    if (bracketsPairArray.indexOf(closeBracket) !== -1) {
      stack.length = stack.length - 2
    }
  }
  return stack.length === 0;
}