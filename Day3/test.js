let colors = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255]
];


const board = [
    ['X', null, '0'],
    ['0', 'X', null],
    [null, '0', 'X']
];
//? pop -> last element
//? shift -> first element
console.log(colors[1][2]);
console.log(board[2]);

for(let i = 0; i < colors.length; i++)
{
    for(let j = 0; j < colors[i].length; j++)
        console.log(colors[i][j]);
}




