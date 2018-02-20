function init_build() {

    //init vars
    var rows = document.getElementById("row").value;
    var cols = document.getElementById("col").value;
    var inputDiv = document.getElementById("info");
    var outputDiv = document.getElementById("build-table");

    //makes inputDiv disapear and outputDiv appear
    inputDiv.style.display = "none";
    outputDiv.style.display = "block";

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
            completed += "<td id=" + [i] + "," + [j] + " style='min-width:100px;' height='50px'>Cell:(" + [i] + ", " + [j] + ")</td>";
        }
        completed += "</tr>";

    }

    //end table
    completed += "</table>";

    //button to reset the table
    completed += '<a class="button2" href="assn4.html">Reset</a>';


    //sends the completed table as a string to the outputDiv
    document.getElementById("build-table").innerHTML = completed;

}
