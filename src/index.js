
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let result = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			result.push(matrix[i][j]);
		}
	}
  return result;
}
