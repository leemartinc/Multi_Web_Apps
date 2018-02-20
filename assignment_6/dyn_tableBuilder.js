function buildIt() {

    //init vars
    var rows = 4;
    var cols = 6;
    var outputDiv = document.getElementById("dyn-table");


    //sanity check
    //outputDiv.innerHTML += "lmcSweg";

    //init table
    var completed = "<table border='2' style='border-color:white; color:white;'><caption>This is the table we created!</caption>";


    //nested loop to build table: Goes through each row and add the table data and repeat
    for (i = 1; i <= rows; i++) {

        //sanity check 
        //outputDiv.innerHTML += "lmcSweg <br />";

        completed += "<tr>";
        for (j = 1; j <= cols; j++) {
            completed += "<td id='" + [i] + "," + [j] + "' style='min-width:100px;padding:25px 0;'>Cell:(" + [i] + ", " + [j] + ")</td>";
        }
        completed += "</tr>";

    }

    //end table
    completed += "</table>";


    //sends the completed table as a string to the outputDiv
    document.getElementById("dyn-table").innerHTML = completed;

}

function insertRow() {
    var table = document.getElementById("dyn-table");
    var row = table.insertRow();
    var rowLength = table.rows[0].cells.length;
    var colLength = table.rows.length;
    //alert(table.rows.length);

    for (i = 0; i < rowLength; i++) {
        row.insertCell(i).innerHTML = "<div class='center'style='color:white;width:100px;padding:25px 0;'>Cell:( " + colLength + ", " + (i + 1) + " ) </div>";
    }


}

function delRow() {
    document.getElementById("dyn-table").deleteRow(-1);
}



function insertCol() {
    //alert("yolo");
    //for loop

    var table = document.getElementById("dyn-table");
    var colLength = table.rows.length;
    var rowLength = table.rows[0].cells.length;

    //alert(table.rows.length);

    for (i = 0; i < colLength; i++) {
        row = document.getElementById("dyn-table").rows[i];
        cell = row.insertCell();
        cell.innerHTML = "<div class='center'style='color:white;width:100px;padding:25px 0;'>Cell:( " + (i + 1) + ", " + (rowLength + 1) + " )</div>";
    }

}

function delCol() {
    var table = document.getElementById("dyn-table");
    var colLength = table.rows.length;



    for (i = 0; i < colLength; i++) {
        row = document.getElementById("dyn-table").rows[i];
        row.deleteCell(-1);

    }

}

function yolo() {
    alert("hahaha yolo");
}
