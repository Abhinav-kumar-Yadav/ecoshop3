# ecoshop3
eCommerce Website - Java Servlet & JSP Based Project
This is an eCommerce website project developed using Java, JavaScript, HTML, CSS, SQL, and Maven. The project focuses on implementing dynamic web pages with a robust backend, allowing users to register, manage their profiles, and view their data.

Project Features
Servlets Configuration
The project uses Java Servlets for handling HTTP requests. The Servlets are properly configured and integrated into the web application to handle both doGet and doPost methods.

User Form Registration & Profile
A user registration form is implemented, allowing users to create an account. After registration, users can view and edit their profile information.

Integration of JSP with Servlets
JSP (JavaServer Pages) is integrated with Servlets to create dynamic content. The data processing logic is handled by Servlets, while JSP pages are responsible for displaying the data.

JSP Pages for User Data Display
There are JSP pages that retrieve and display user-specific data, such as profile information, using data from the backend database.

Usage of JSTL & EL in JSP
The project leverages JSTL (JavaServer Pages Standard Tag Library) and Expression Language (EL) to simplify the integration of Java logic and HTML elements in JSP pages.

Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Java (Servlets)
Database: SQL (MySQL or similar)
Build Tool: Maven
Web Technology: JSP, JSTL, EL
Getting Started
Prerequisites
Java 8 or higher
Maven 3.6 or higher
SQL database (MySQL recommended)
IDE-Eclipse

ecommerce-website/
│
├── src/                            
│   └── main/                     
│       ├── java/                    
│       │   ├── com/
│       │   │   ├── entities/         # Entity classes like User, Product, Order
│       │   │   ├── servlets/         # Servlets for user actions (Login, Register, etc.)
│       │   │   ├── dao/              # Data access objects (DB interactions)
│       │   │   ├── model/            # Model classes for handling business logic
│       │   │   └── controller/       # Controllers managing requests
│       │   └── resources/            # Hibernate configuration (hibernate.cfg.xml)
│       │   
│       ├── webapp/                    
│       │   ├── WEB-INF/               # Web configuration files (web.xml)
│       │   ├── css/                   # CSS files for styling
│       │   ├── img/                   # Image assets
│       │   ├── js/                    # JavaScript files (validation.js)
│       │   ├── jsp/                   # JSP files for different views
│       │   │   ├── aboutus.jsp
│       │   │   ├── add-products.jsp
│       │   │   ├── admin.jsp
│       │   │   ├── checkout.jsp
│       │   │   ├── editprofile.jsp
│       │   │   ├── index.jsp
│       │   │   ├── login.jsp
│       │   │   ├── normal.jsp
│       │   │   ├── orderStatus.jsp
│       │   │   ├── register.jsp
│       │   │   ├── registration.jsp
│       │   │   ├── searchProduct.jsp
│       │   │   ├── seller.jsp
│       │   │   ├── showProduct.jsp
│       │   │   └── userprofile.jsp
│       ├── target/                   # Compiled classes and resources
│       ├── m2e-wtp/                  # Maven web plugin resources
│       ├── schema.sql                # Database schema for MySQL
│       ├── pom.xml                   # Maven build configuration
└── README.md                        # Project documentation

