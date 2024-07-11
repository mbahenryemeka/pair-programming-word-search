const wordSearch = (letters, word) => {     
    const transpose = (matrix) => {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    };
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (const l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}
module.exports = wordSearch