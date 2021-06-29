const chessboard = document.getElementById('chessboard');
const pawn = document.createElement('div');

for (let i = 0; i < 4; i++){
    for (let i = 0; i < 8; i++){
        const panel = document.createElement('div');
        if (i % 2 === 0){
            panel.className = 'chessboard__panel--light';
        } else{
            panel.className = 'chessboard__panel--dark';
        }
        chessboard.appendChild(panel);
    }

    for (let i = 0; i < 8; i++){
        const panel = document.createElement('div');
        if (i % 2 === 0){
            panel.className = 'chessboard__panel--dark';
        } else{
            panel.className = 'chessboard__panel--light';
        }
        chessboard.appendChild(panel);
    }
 }
for (let i = 0; i < 16, i++;){
    const pawn = document.createElement('div');
    pawn.className = 'chessboard__pawn--light';
    panel.appendChild(pawn);
}

    pawn.className = 'chessboard__pawn--light';
    panel.appendChild(pawn);







