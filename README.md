# Clinic Patient Management

A full-stack web application for managing patient records in a community health clinic.

This project was developed as an academic web programming project and demonstrates the implementation of a React-based user interface, client-side routing, API communication, and relational database integration.

---

## Overview

Clinic Patient Management provides a simple interface for managing patient information.

The application allows patient records to be organized and accessed through a web-based interface, with data stored in a relational database.

Each patient record contains information such as:

- Name
- Age
- Gender
- Address
- Medical complaint or description

---

## Features

- View patient records
- Add new patient records
- Edit existing patient information
- View detailed patient information
- Navigate between application pages using client-side routing
- Store patient data in a MySQL/MariaDB database
- Responsive interface using Bootstrap

---

## Technology Stack

| Area | Technology |
| --- | --- |
| Frontend | React |
| Programming Language | JavaScript |
| Routing | React Router |
| HTTP Client | Axios |
| UI Framework | Bootstrap |
| Icons | Font Awesome |
| Database | MySQL / MariaDB |
| Database Administration | phpMyAdmin |

---

## Application Structure

```text
clinic-patient-management/
│
├── back-end_tubes/
├── public/
├── src/
├── db_2205330_fatih_uas.sql
├── package.json
└── package-lock.json
```

### Main Components

**`src/`**  
Contains the React frontend and application components.

The application includes pages for:

- Listing patient records
- Adding or editing patient information
- Viewing patient details

**`back-end_tubes/`**  
Contains the backend implementation used to connect the application with the database.

**`db_2205330_fatih_uas.sql`**  
SQL database structure and sample data used by the application.

---

## Application Flow

```text
User
  |
  v
React Interface
  |
  v
Patient Management
  |
  +---- View Records
  |
  +---- Add / Edit Records
  |
  +---- View Patient Details
  |
  v
Backend
  |
  v
MySQL / MariaDB Database
```

---

## Frontend Setup

Clone the repository:

```bash
git clone https://github.com/mialfatih/clinic-patient-management.git
cd clinic-patient-management
```

Install the required dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will run locally using the React development server.

---

## Database Setup

The repository includes:

```text
db_2205330_fatih_uas.sql
```

Import this file into a MySQL or MariaDB database using phpMyAdmin or another compatible database management tool.

The database contains the patient table used by the application.

Backend database configuration may need to be adjusted according to your local environment.

---

## Project Context

This project was developed as part of an academic web programming course.

The main objective was to practice building a web application that combines a React frontend with backend and relational database operations.

Through this project, I worked with component-based frontend development, routing, HTTP requests, CRUD-oriented application flows, and database integration.

---

## Author

**Muhammad Izzuddin Al Fatih**

Computer Science Education  
Universitas Pendidikan Indonesia

GitHub: https://github.com/mialfatih
