/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author leemartinc
 */
@WebServlet(urlPatterns = {"/login"})
public class login extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"); 
            out.println("<title>JSP Page</title>"); 
            out.println("</head>");
            out.println("<body>");
            out.println("<h1></h1>");
            out.println("<div class=\"midcontainer\">");
            out.println("<table border='2' style='border-color:black; color:black;'>\n" +
"            <caption>This is the table we created with PHP!</caption>");
             int rows = Integer.parseInt(request.getParameter("amount-rows"));
             int cols = Integer.parseInt(request.getParameter("amount-cols"));
            for(int rowCounter = 1 ; rowCounter <= rows; rowCounter++){
              out.println("<tr>");  
                for(int colCounter = 1; colCounter <= cols; colCounter++){ 
                    out.println("<td id=\""+rowCounter+", "+colCounter+"\" style=\"min-width:100px;\" height=\"50px\">Cell:("+rowCounter+","+colCounter+")</td>");
                }
                out.println("</tr>");
            }
            
            out.println("</table>\n" +
"        <a class=\"button2 center-x\" href=\"assn8-main.html\">Reset</a>\n" +
"    </div>");
            
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
