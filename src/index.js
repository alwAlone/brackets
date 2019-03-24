module.exports = function check(str, bracketsConfig) {
	let openBrackets = [];
	let closeBrackets = [];
	let stack   = [];

	bracketsConfig.forEach(element => {
    openBrackets.push(element[0]);
		closeBrackets.push(element[1]);
    });

	for (let i = 0; i < str.length; i++) {
		let currentBracket = str[i];

		if (openBrackets.includes(currentBracket) && closeBrackets.includes(currentBracket)) {
			if (stack.includes(currentBracket)) {
				stack.pop()
			} else {
				stack.push(currentBracket);
			}
			continue;
		}

		if (openBrackets.includes(currentBracket)) {
            stack.push(currentBracket);
		} else {
            let previousBracket = stack.pop();
			if (openBrackets.indexOf(previousBracket) !== closeBrackets.indexOf(currentBracket)) {
				return false;
            }
		}
	}

	return stack.length ? false : true;
}