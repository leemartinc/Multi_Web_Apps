function usrLogin() {
    var usr = document.getElementById("username").value;
    var pass = document.getElementById("pwd").value;

    var Len = new RegExp("(^[a-zA-Z])([a-zA-Z0-9]{5,23})");

    var passTest = Len.test(pass);
    var usrTest = Len.test(usr);

    clear = " ";

    //sanity check
    //alert(yolo);

    if (passTest != true) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Password failed";
        return false;

    } else if (usrTest != true) {
        document.getElementById("output").style.display = "block";
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Username failed";
        return false;

    } else {
        return true;
    }
}

function decCheck() {

    //check boxes
    var chkbx1_pc = document.getElementById("bx1").checked;
    var chkbx2_xbox = document.getElementById("bx2").checked;
    var chkbx3_ps4 = document.getElementById("bx3").checked;
    //check boxes selected
    var bx_amount = document.querySelectorAll('input[type="checkbox"]:checked').length;


    //radiobuttons
    var radio1_red = document.getElementById("rad1").checked;
    var radio2_black = document.getElementById("rad2").checked;
    var radio3_white = document.getElementById("rad3").checked;


    //select && options
    var sel_menu = document.getElementById("sel1").value;
    var opt1_null = document.getElementById("opt1").selected;
    var opt2_hawaii = document.getElementById("opt2").selected;
    var opt3_norway = document.getElementById("opt3").selected;
    var opt4_nz = document.getElementById("opt4").selected;


    //sanity check
    //alert(opt4_nz);

    //sanity check
    //alert(document.querySelectorAll('input[type="checkbox"]:checked').length);

    if (bx_amount == 0) {
        alert("Choose at least 1 box");
        return false;
    } else if (bx_amount > 2) {
        alert("you choose too many check boxes");
        return false;
    } else if (radio1_red != true && radio2_black != true && radio3_white != true) {
        alert("you must select a car color");
        return false;
    } else if (opt1_null == true) {
        alert("please choose a country");
        return false;
    } else {
        alert("Everything works fine");
        return true;
    }



}
