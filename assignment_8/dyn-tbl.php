<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xml:lang="en" lang="en" xmlns="http://www.w3.org/1999/xhtml">

<head>
    <title>Lee-Martin Clarke</title>
    <!-- JavaScript INCOMING -->
    <script type="text/javascript" src=""></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"></script>

    <!-- CSS INCOMING -->
    <link href="../css/buttons.css" rel="stylesheet" type="text/css" />
    <link href="../css/animate.css" rel="stylesheet" type="text/css" />
    <link href="../css/hamburg.css" rel="stylesheet" type="text/css" />
    <link href="../css/assn8.css" rel="stylesheet" type="text/css" />
    <link href="../css/style.css" rel="stylesheet" type="text/css" />
</head>

<body>


    <div class="midcontainer">

        <table border='2' style='border-color:white; color:white;'>
            <caption>This is the table we created with PHP!</caption>

            <?php

if(isset($_POST['submit'])) {
 
    $rows = $_POST['amount-rows']; 
    $cols = $_POST['amount-cols']; 
    
    for($rowCounter = 1 ; $rowCounter <= $rows; $rowCounter++){
        echo '<tr>';
        for($colCounter = 1; $colCounter <= $cols; $colCounter++){
            echo '<td id='. $rowCounter .','. $colCounter .' style="min-width:100px;" height="50px">Cell:('. $rowCounter .', '. $colCounter .')</td>';
        }
        echo '</tr>';
    }
    

    
}

?>
        </table>
        <a class="button2 center-x" href="assn8-main.html">Reset</a>
    </div>


</body>

</html>
