/*

Write a function that takes as input each of the following strings in turn:
‘4+2’
‘5*7’
‘6-1’
‘9/2’
This function should
Determine the operator (+, *, -, or /) embedded in the string
Return a function to implement the input operator that returns the result
For example, if the input string is ‘8%3’, return (left, right) => left % right
Execute the returned function to evaluate and print each expression. For example,
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`) 
	 

You can assume that the format of the input string is fixed (i.e. a digit, an 
operator, and a digit, lways the same length).

*/


function splitExpression(input) {
	let numbers = input.split(/\/|\*|\+|\-|\%/);
	let operator = input.match(/\/|\*|\+|\-|\%/);
	let result = [numbers[0], operator[0], numbers[1]];
	return result;
}

function evaluate(parts) {
	let num1 = parseInt(parts[0]);
	let num2 = parseInt(parts[2]);
	let operator = parts[1]
	if (operator === '+') {
		return num1 + num2;
	} else if (operator === '-') {
		return num1 - num2;
	} else if (operator === '*') {
		return num1 * num2;
	} else if (operator === '/') {
		return num1 / num2;
	} else if (operator === '%') {
		return num1 % num2;
	} else {
		return;
	}
}

const doEval = (statement) => (expression) => evaluate(splitExpression(expression));

console.log('The input `4+2` returns: ');
console.log(doEval('4+2')('4+2'));

console.log('\nThe input `5*7` returns: ');
console.log(doEval('5*7')('5*7'));

console.log('\nThe input `6-1` returns: ');
console.log(doEval('6-1')('6-1'));

console.log('\nThe input `9/2` returns: ');
console.log(doEval('9/2')('9/2'));
