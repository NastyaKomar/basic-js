const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (Array.isArray(arr)) {
		let discardPrev = "--discard-prev";
		let discardNext = "--discard-next";
		let doublePrev = "--double-prev";
		let doubleNext = "--double-next";
		let resultArray = new Array();
		let modify = false;
		for (let i = 0; i < arr.length; i++) {
			switch (arr[i]) {
				case discardPrev:
					if (i === 0) { break }
					if (modify) { modify = false; break }
					resultArray.pop();
					break;
				case discardNext:
					if (i === arr.length - 1) { break }
					modify = true;
					i += 1
					break;
				case doublePrev:
					if (i === 0) { break }
					if (modify) { modify = false; break }
					resultArray.push(arr[i - 1]);
					break;
				case doubleNext:
					if (i === arr.length - 1) { break }
					resultArray.push(arr[i + 1]);
					break;
				default:
					resultArray.push(arr[i])
					modify = false;
					break;
			}
		}
		return resultArray
	} else {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}

}

module.exports = {
	transform
};
