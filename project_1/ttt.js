function game(clicked) {

    var current_turn = document.getElementById("player");

    //sanity check
    //alert(current_turn);
    if (clicked.innerHTML != 'x' && clicked.innerHTML != 'o') {
        clicked.innerHTML = current_turn.innerHTML;


        if (current_turn.innerHTML == 'x') {
            current_turn.innerHTML = 'o';
        } else if (current_turn.innerHTML == 'o') {
            current_turn.innerHTML = 'x';
        } else {}
    } else {}


    checkWinner();

    setTimeout(function () {
        checkEnd();
    }, 500);

}

function checkWinner() {

    var player = document.getElementById("the-game");
    var end = document.getElementById("end-game");
    var xxx = document.getElementById("x-wins");
    var ooo = document.getElementById("o-wins");
    var fin_div = document.getElementById("dclr");

    var winner = 'none';

    //sanity check
    //alert("hi");
    //alert(document.getElementById("cell_00").innerHTML);

    var cell_00 = document.getElementById("cell_00").innerHTML;
    var cell_01 = document.getElementById("cell_01").innerHTML;
    var cell_02 = document.getElementById("cell_02").innerHTML;
    var cell_10 = document.getElementById("cell_10").innerHTML;
    var cell_11 = document.getElementById("cell_11").innerHTML;
    var cell_12 = document.getElementById("cell_12").innerHTML;
    var cell_20 = document.getElementById("cell_20").innerHTML;
    var cell_21 = document.getElementById("cell_21").innerHTML;
    var cell_22 = document.getElementById("cell_22").innerHTML;


    if (cell_00 == 'x' && cell_01 == 'x' && cell_02 == 'x') {
        winner = 'x';
    } else if (cell_10 == 'x' && cell_11 == 'x' && cell_12 == 'x') {
        winner = 'x';
    } else if (cell_20 == 'x' && cell_21 == 'x' && cell_22 == 'x') {
        winner = 'x';
    } else if (cell_00 == 'x' && cell_10 == 'x' && cell_20 == 'x') {
        winner = 'x';
    } else if (cell_01 == 'x' && cell_11 == 'x' && cell_21 == 'x') {
        winner = 'x';
    } else if (cell_02 == 'x' && cell_12 == 'x' && cell_22 == 'x') {
        winner = 'x';
    } else if (cell_00 == 'x' && cell_11 == 'x' && cell_22 == 'x') {
        winner = 'x';
    } else if (cell_20 == 'x' && cell_11 == 'x' && cell_02 == 'x') {
        winner = 'x';
    }
    /////
    else if (cell_00 == 'o' && cell_01 == 'o' && cell_02 == 'o') {
        winner = 'o';
    } else if (cell_10 == 'o' && cell_11 == 'o' && cell_12 == 'o') {
        winner = 'o';
    } else if (cell_20 == 'o' && cell_21 == 'o' && cell_22 == 'o') {
        winner = 'o';
    } else if (cell_00 == 'o' && cell_10 == 'o' && cell_20 == 'o') {
        winner = 'o';
    } else if (cell_01 == 'o' && cell_11 == 'o' && cell_21 == 'o') {
        winner = 'o';
    } else if (cell_02 == 'o' && cell_12 == 'o' && cell_22 == 'o') {
        winner = 'o';
    } else if (cell_00 == 'o' && cell_11 == 'o' && cell_22 == 'o') {
        winner = 'o';
    } else if (cell_20 == 'o' && cell_11 == 'o' && cell_02 == 'o') {
        winner = 'o';
    } else {}

    setTimeout(function () {
        if (winner == 'x') {
            player.style.display = 'none';
            end.style.display = 'block';
            xxx.innerHTML += 'I ';
            current_turn = 'x';
            fin_div.innerHTML = 'The Winner is player X'
            scare();
            clearBoard();

        } else if (winner == 'o') {
            player.style.display = 'none';
            end.style.display = 'block';
            ooo.innerHTML += 'I ';
            current_turn = 'x';
            fin_div.innerHTML = 'The Winner is player O'
            scare();
            clearBoard();
        }
    }, 500);

}

function startGame() {
    var player = document.getElementById("the-game");
    var intro = document.getElementById("pre-game");
    intro.style.display = "none";
    player.style.display = "block";
}

function reset() {
    var game = document.getElementById("the-game");
    var intro = document.getElementById("pre-game");
    var end = document.getElementById("end-game");
    var over = document.getElementById("no_winner");

    over.style.display = 'none';
    end.style.display = 'none';
    game.style.display = 'block';

    clearBoard();

}

function clearBoard() {
    document.getElementById("cell_00").innerHTML = "";
    document.getElementById("cell_01").innerHTML = "";
    document.getElementById("cell_02").innerHTML = "";
    document.getElementById("cell_10").innerHTML = "";
    document.getElementById("cell_11").innerHTML = "";
    document.getElementById("cell_12").innerHTML = "";
    document.getElementById("cell_20").innerHTML = "";
    document.getElementById("cell_21").innerHTML = "";
    document.getElementById("cell_22").innerHTML = "";
}

function checkEnd() {
    var game = document.getElementById("the-game");
    var intro = document.getElementById("pre-game");
    var end = document.getElementById("end-game");
    var over = document.getElementById("no_winner");


    var table = document.getElementById("ttt");

    var colLength = table.rows.length;
    var rowLength = table.rows[0].cells.length;
    var isEnd = '1';

    //alert(table.rows.length);

    for (i = 0; i < colLength; i++) {
        row = document.getElementById("ttt").rows[i];
        for (j = 0; j < rowLength; j++) {
            cell = row.cells[j];
            if (cell.innerHTML != 'x' && cell.innerHTML != 'o') {
                isEnd = '0';
            }

        }

    }

    if (isEnd == '1') {
        //game ended with no winner
        //alert("yo");
        game.style.display = 'none';
        over.style.display = 'block';
        clearBoard();
    }


}

function stop() {
    location.reload();
}

function scare() {
    var jiggy = document.getElementById("jigsaw");
    jiggy.classList.add("scare");
    setTimeout(function () {
        jiggy.classList.remove("scare");
    }, 1000);


}
