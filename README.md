# Clinic Patient Management

A patient management web application built with React, featuring CRUD operations for managing patient records.

The project was originally developed as a full-stack academic web application with a Go REST API and MySQL/MariaDB database. For the public portfolio deployment, the application uses browser `localStorage` so the complete CRUD workflow can be explored without requiring an external backend service.

**Live Demo:** https://clinic-patient-management-beta.vercel.app/

---

## Overview

Clinic Patient Management provides a simple web-based interface for managing patient information.

Users can create, view, update, search, and delete patient records through a React interface. Each record contains basic patient information such as:

- Name
- Age
- Gender
- Address
- Medical complaint or description

The public portfolio version stores data locally in the user's browser, allowing the application to remain fully interactive without requiring a hosted database or backend server.

---

## Features

- View patient records
- Add new patient records
- Edit existing patient information
- Delete patient records
- Search patients by name
- View detailed patient information
- Client-side routing using React Router
- Browser-based data persistence using `localStorage`
- Responsive user interface using Bootstrap

---

## Live Demo

The application is deployed on Vercel:

https://clinic-patient-management-beta.vercel.app/

The live portfolio version uses browser `localStorage`.

This means:

- Data is stored locally in the user's browser
- CRUD operations remain fully functional
- Data is not shared between different users or devices
- Clearing browser storage will remove locally stored records

The original project also includes a Go REST API and MySQL/MariaDB database implementation in the repository.

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
| Demo Data Persistence | Browser Local Storage |
| Original Backend | Go |
| Original Database | MySQL / MariaDB |
| Deployment | Vercel |

---

## Application Architecture

### Public Portfolio Demo

```text
User
  |
  v
React Application
  |
  v
CRUD Operations
  |
  v
Browser Local Storage
```

### Original Full-Stack Implementation

```text
React Frontend
      |
      v
Go REST API
      |
      v
MySQL / MariaDB
```

The original backend implementation is preserved in the repository as part of the project's development history.

---

## Project Structure

```text
clinic-patient-management/
│
├── back-end_tubes/
├── public/
├── src/
├── db_2205330_fatih_uas.sql
├── package.json
├── package-lock.json
└── README.md
```

### Main Components

**`src/`**  
Contains the React frontend application, components, services, routing, and client-side logic.

**`back-end_tubes/`**  
Contains the original Go backend implementation used to provide REST API endpoints for patient data.

**`db_2205330_fatih_uas.sql`**  
Contains the original MySQL/MariaDB database structure and sample data.

---

## Application Flow

```text
User
  |
  v
Patient List
  |
  +---- Add Patient
  |
  +---- Search Patient
  |
  +---- View Patient Details
  |
  +---- Edit Patient
  |
  +---- Delete Patient
  |
  v
Browser Local Storage
```

---

## Running Locally

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

The application will run locally using the React development server.

---

## Data Persistence

The public portfolio version uses the browser's `localStorage` API to persist patient records.

Sample data is initialized automatically when the application is opened for the first time.

Changes made through the application, including adding, editing, and deleting records, are stored in the user's browser.

This implementation is intended specifically for demonstration and portfolio purposes.

---

## Original Backend and Database

The original version of the project includes a Go REST API and MySQL/MariaDB database implementation.

The backend source code is available in:

```text
back-end_tubes/
```

The original SQL database file is available as:

```text
db_2205330_fatih_uas.sql
```

These files are retained to demonstrate the original full-stack architecture of the project.

---

## Project Context

This project was originally developed as part of an academic web programming course.

The project provided practical experience with:

- Component-based frontend development using React
- Client-side routing
- CRUD application workflows
- REST API communication
- Relational database integration
- Separating frontend, backend, and database responsibilities
- Deploying a frontend application for public access

For the portfolio version, the frontend was adapted to use browser-based persistence so the application can remain publicly accessible without relying on a paid backend or database service.

---

## Author

**Muhammad Izzuddin Al Fatih**

Computer Science Education  
Universitas Pendidikan Indonesia

GitHub: https://github.com/mialfatih
