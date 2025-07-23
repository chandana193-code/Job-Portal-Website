# Job Portal Website

The Job Portal Website is a full-stack web application built using React JS (frontend), Spring Boot (backend), and MySQL (database). It allows users to register, browse categorized job listings, and apply for jobs online. This project demonstrates complete integration between frontend and backend with secure authentication and database connectivity.

---

## Features

- User registration and login
- Browse jobs by category
- Apply for jobs via dynamic forms
- Form validation on both client and server side
- Session-based login with Spring Security
- REST API integration using Axios
- Responsive frontend UI using React components

---

## Technologies Used

**Frontend:**

- HTML
- CSS
- JavaScript
- React JS

**Backend:**

- Java
- Spring Boot
- Spring Security
- REST APIs

**Database:**

- MySQL

**Tools:**

- Visual Studio Code
- Spring Tool Suite (STS)
- MySQL Workbench
- Postman

---

## Folder Structure

```bash
job-portal/
├── backend/
│ ├── src/
│ │ ├── main/
│ │ │ ├── java/com/jobportal/
│ │ │ ├── controller/
│ │ │ ├── service/
│ │ │ └── model/
│ │ └── resources/
│ │ └── application.properties
├── frontend/
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ ├── App.js
│ └── index.js
```

---

---

## How to Run the Project

### Backend (Spring Boot)

1. Import the backend folder into Spring Tool Suite or IntelliJ IDEA.
2. Create a MySQL database named `job_portal`.
3. Update the database credentials in `application.properties`.
4. Run the Spring Boot application from the main class.

### Frontend (React JS)

1. Open the frontend folder in VS Code.
2. Run the following commands:

```bash
npm install
npm start
```

- The React app will run at: http://localhost:3000

# Author

Name: Nalla Chandana

Email: nallachandana193@gmail.com

LinkedIn: https://www.linkedin.com/in/chandananalla/
