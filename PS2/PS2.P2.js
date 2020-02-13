/*

Write a generator that is initialized with a sentence and that emits each word of the sentence in
turn.
Use the generator to print the words, one per line, of the string “All I know is something like a
bird within her sang”. 

*/

function* emitWord(input) {
	const words = input.split(/(\s+)/);
	for (const word of words) {
		if (word != " ") {
			yield word;
		}
	}
}

const emitSentence = sentence => {
	let res = "";
	for (word of emitWord(sentence)) {
		res += `${word}\n`;
	}
	return res;
}

const sentence = "All I know is something like a bird within her sang";
console.log(`The sentence is: ${emitSentence(sentence)}`);
