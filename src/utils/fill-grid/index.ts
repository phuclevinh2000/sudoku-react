import { GRID, NUMBERS } from "typings"
import { shuffle, isInRow, isInCol } from "utils";

const gridExample: GRID = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]

const numbers: NUMBERS[] = [1,2,3,4,5,6,7,8,9]

// A backtracking/recursive function to check all the possible combination of number a solution
// 9x9 sudoku
function fillGrid(grid: GRID) {
    let row = 0;
    let col = 0;

    for(let i = 0; i<81; i++) {
        row = Math.floor(i/9)
        col = i % 9

        if(grid[row][col] === 0) {
            shuffle(numbers)

            for(let value of numbers) {
                // chekc it is not in grid row
                if(!isInRow({grid, row, value})) {
                    // it is not in grid col
                    if (!isInCol({col, grid, value})) {
                        // is it not in the grid square
                        grid[row][col] = value
                    }
            
                }
                  
            }

            break;
        }
    }

    grid[row][col] = 0;
}

export default fillGrid