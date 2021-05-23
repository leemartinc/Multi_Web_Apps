<%-- 
    Document   : login
    Created on : Apr 2, 2018, 4:18:36 PM
    Author     : leemartinc
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1></h1>
        <div class="midcontainer">

        <table border='2' style='border-color:white; color:white;'>
            <caption>This is the table we created with PHP!</caption>

            <%


    int rows = Integer.parseInt(request.getParameter("amount-rows"));
    int cols = Integer.parseInt(request.getParameter("amount-cols"));
    
    
    for(int rowCounter = 1 ; rowCounter <= rows; rowCounter++){
        %>
        <tr>
        <%    
        for(int colCounter = 1; colCounter <= cols; colCounter++){ %>
           <td id=<%= rowCounter %>, <%= colCounter %> style="min-width:100px;" height="50px">Cell:(<%= rowCounter %>, <%= colCounter %>)</td>
       <% } %>
       </tr>
       
   <% } %>
    
        </table>
        <a class="button2 center-x" href="assn8-main.html">Reset</a>
    </div>
        
        
        
        
    </body>
</html>
