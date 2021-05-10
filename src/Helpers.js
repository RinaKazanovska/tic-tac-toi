export function calculateWinner(squares) {

    const lines = [ // this calls look up array - all the winning combinations
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6] 
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a]
            && squares[a] === squares[b] 
            && squares[a] === squares[c]
            ) { //if a matches b and matche c - it is a winning situation
            return squares[a];
        }
   
   }

return null;

}

// const squares = [
//     null, null, null,
//     'X', 'X', 'O',
//     null, null, null
// ];
// const squares2 = [
//     null, null, null,
//     'X', 'X', 'X',
//     null, null, null
// ];
// console.log(calculateWinner(squares));
// console.log(calculateWinner(squares2));