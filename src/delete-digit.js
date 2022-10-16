const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const arr = n.toString().split("");
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		let itisnotabigdeal =
			(arr.slice(0, i) + arr.slice(i + 1)).split(",").join("") * 1;
		if (itisnotabigdeal > result) {
			result = itisnotabigdeal;
		}
	}
	return result;
}

module.exports = {
	deleteDigit
};
