// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

  const res = [];
  for(let i = 0; i < n; i++){
    res.push([]);
  }

  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let sRow = 0;
  let eRow = n - 1;

  while(startCol <= endCol && sRow <= eRow){
    //top row
    for(let i = startCol; i <= endCol; i++){
      res[sRow][i] = counter;
      counter++;
    }
    sRow++;

    //Right col
    for(let i = sRow; i <= eRow; i++){
      res[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for(let i = endCol; i >= startCol; i--){
      res[eRow][i] = counter;
      counter++;
    }
    eRow--;

    for(let i = eRow; i >= sRow; i--){
      res[i][startCol] = counter;
      counter++;
    }
    startCol++;

  }

  return res;

}

module.exports = matrix;
