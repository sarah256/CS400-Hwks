/* Write a function that takes a string as its input and returns a new string 
 * that contains all of the letters in the original string, but in alphabetical 
 * order. Ignore punctuation and numbers. Test your function using the string 
 * ‘supercalifragilisticexpialidocious’.
*/

function alphabeticalString(originalStr) {
	let stripStr = originalStr.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
	let splitStr = stripStr.split('');
	return splitStr.sort().join('');
}

console.log('The input ‘supercalifragilisticexpialidocious’ returns: ');
console.log(alphabeticalString('supercalifragilisticexpialidocious'));
