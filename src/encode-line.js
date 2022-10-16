const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	const arr = [];
	let count = 0;

	for (let i = 0; i < str.length; i++) {
		let next = i + 1;
		if (str[i] === str[next]) {
			count += 1;
		} else {
			if (!!count) {
				arr.push(count + 1);
			}
			arr.push(str[i]);
			count = 0;
		}
	}

	return arr.join('')
}

module.exports = {
	encodeLine
};
