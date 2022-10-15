const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = false) {
	if (!date) {
		return "Unable to determine the time of year!"
	}
	if (date instanceof Date) {
		if (date.hasOwnProperty('toString')) throw Error("Invalid date!");

		let month = date.getMonth();
		switch (month) {
			case 0:

				return "winter"
			case 1:

				return "winter"
			case 2:

				return "spring"
			case 3:

				return "spring"
			case 4:

				return "spring"
			case 5:

				return "summer"
			case 6:

				return "summer"
			case 7:

				return "summer"
			case 8:

				return "autumn"
			case 9:

				return "autumn"
			case 10:

				return "autumn"
			case 11:

				return "winter"

			default:
				break;
		}
	} else {
		throw new Error('Invalid date!')
	}
}

module.exports = {
	getSeason
};
