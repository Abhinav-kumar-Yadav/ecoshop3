package controller;

import java.io.IOException;
import jakarta.servlet.annotation.WebServlet;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/")
public class Home extends HttpServlet {
    private static final long serialVersionUID = 1L;

    public Home() {
        super();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        
        RequestDispatcher requestDispatcher;
        String action = request.getServletPath();
        
        switch (action) {
            case "/register":
                // Forwarding to registration page
                requestDispatcher = request.getRequestDispatcher("registration.jsp");
                requestDispatcher.forward(request, response);
                break;
            
            case "/login":
                // Forwarding to login page
                requestDispatcher = request.getRequestDispatcher("login.jsp");
                requestDispatcher.forward(request, response);
                break;

            case "/user-profile":
                // Forwarding to user profile page
                requestDispatcher = request.getRequestDispatcher("user-profile.html");
                requestDispatcher.forward(request, response);
                break;
            
            case "/edit-profile":
                // Forwarding to edit profile page
                requestDispatcher = request.getRequestDispatcher("edit-profile.html");
                requestDispatcher.forward(request, response);
                break;
                
            default:
                // Default route, redirect to home or login
                response.sendRedirect("login.jsp");
                break;
        }
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
