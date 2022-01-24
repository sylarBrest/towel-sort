// You should implement your task here.
module.exports = function towelSort (matrix) {
    return ((matrix == null) || (matrix.length == 0)) ? [] : matrix.map((row, index) => index % 2 === 0 ? row : row.reverse()).join(',').split(',').map(val => +val);
}
