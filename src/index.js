// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    if (matrix === undefined) {
        return (result = []);
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 != 0) {
                let newResult = matrix[i].reverse();
                result = result.concat(newResult);
            } else {
                result = result.concat(matrix[i]);
            }
        }
    }

    // if (matrix === undefined) {
    //     return (result = []);
    // } else {
    //     for (let i = 0; i < matrix.length; i++) {
    //         if (i % 2 != 0) {
    //             result.push(...matrix[i].reverse());
    //         } else {
    //             result.push(...matrix[i]);
    //         }
    //     }
    // }

    return result;
};
