/*

Write a function that accepts two input parameters: a string, and a function. The function
should execute the passed function with the passed string and return the result.
Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
[‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
For the second, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
replaces all of the ‘a’ characters with ‘A’ characters. Return an object that contains the original
string, the modified string, the total number of As in the modified string, and the overall length
of the modified string:
{
	 	 originalString: xxx,
	 	 modifiedString: xxx,
	 	 numberReplaced: xxx,
	 	 length:		 	 xxx
}
Print the data from the returned object on the console.

*/

let stringFunc = (str, func) => func(str);

let fragments = stringFunc('supercalifragilisticexpialidocious', (
						   str => {
						   		return str.split(/(?=c)/g);
						   }
						  ));

let aChars = stringFunc('supercalifragilisticexpialidocious', (
						str => {
							let newStr = str.replace(/a/g, 'A');
							let count = str.match(/a/g).length;
							let length = str.length;
							return {
								originalString: str,
								modifiedString: newStr,
								numberReplaced: count,
								length: length,
							};
						}
					   ));

console.log('\nThe input `supercalifragilisticexpialidocious` returns: \n');
console.log(fragments);
console.log('\nwhen using the fragmenting lambda function.\n\n');

console.log('\nThe input `supercalifragilisticexpialidocious` returns: \n');
console.log(aChars);
console.log('\nwhen using the `a` character replace lambda function.\n');

