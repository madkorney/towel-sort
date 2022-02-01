// You should implement your task here.

module.exports = function towelSort(matrix) {
    let resultMatrix = [];

    
    if (arguments.length == 0) {
        return [];
    }
    if (matrix.length == 0) {
        return [];
    }

    // console.log('matrix');
    // console.log(matrix);
    // console.log('resultMatrix');
    // console.log(resultMatrix);

    for (let k = 0; k < matrix.length; k++) {
        if (k % 2 == 1) {
            resultMatrix = resultMatrix.concat(matrix[k].sort((a, b) => b - a));
        } else {
            resultMatrix = resultMatrix.concat(matrix[k].sort((a, b) => a - b));
        }

        // console.log('step ' + k);
        
        // console.log(matrix[k]);
        // console.log(resultMatrix);
    }
    return resultMatrix;
}

let test1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let test2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
];

//  console.log(test2);
// console.log("пиу  ");
// console.log(towelSort(test2));
