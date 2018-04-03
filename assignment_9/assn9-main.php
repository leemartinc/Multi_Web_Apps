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
    <link href="../css/assn2.css" rel="stylesheet" type="text/css" />
    <link href="../css/style.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <?php 
        include 'connect.php';
    ?>
    <div class="main">
        <a class="button2 fl-rt" href=" ">NULL</a>
        <a class="button2 fl-lt" href="../index.html">Go Home</a>
        <h2>Assignment 9</h2>

        <div class="midcontainer center">

            <?php
            //select table data
                $sql = "SELECT * FROM next_phone";
                $result = mysqli_query($conn, $sql);
            //init table
                echo '<table border="1" style="color: white;">
                <caption>Next Phone</caption>'; 
            //get table columns
                    $cols ="select * from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME='next_phone';";
                    $heads =mysqli_query($conn, $cols);
                echo '<tr>';
            //load table columns till no more
                 while($head = mysqli_fetch_assoc($heads))
                    { 
                        echo '<th width="100px" height="50px">'. $head['COLUMN_NAME'] .'</th>';
                    }
                echo '</tr>';
             //load table data till no more
                while($row = mysqli_fetch_assoc($result))
                    {               
                    echo '<tr>';
                        echo '<td width="100px" height="50px">'. $row['phoneid'] .'</td>' ;
                        echo '<td width="100px" height="50px">'. $row['name'] .'</td>' ;
                        echo '<td width="100px" height="50px">'. $row['ram'] .'</td>' ;
                        echo '<td width="100px" height="50px">'. $row['batt_size'] .'</td>' ;
                        echo '<td width="100px" height="50px">'. $row['year'] .'</td>' ;
                        echo '<td width="100px" height="50px">'. $row['price'] .'</td>' ;
                    echo '</tr>';
                    }
            echo '</table>';
        ?>
        </div>

    </div>


</body>

</html>
