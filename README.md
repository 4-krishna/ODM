# On Duty Management System

A web-based application for creating and managing duty sheets, allowing users to sign up for time slots and administrators to manage entries.

## Features

- User authentication (register/login)
- Create and manage duty sheets
- Submit entries with name, roll number, and time slots
- View all entries in a sheet
- Download sheet data as CSV
- Delete entries and sheets
- Search functionality for sheets

## Technology Stack

- **Backend**: Python with Flask
- **Database**: SQLite
- **Frontend**: HTML, CSS, JavaScript

## Installation

1. Clone the repository
2. Install the required dependencies:

```bash
pip install flask
```
1. Run the application:
```bash
python app.py
```
4.Access the application at http://localhost:5080
## Usage
1. Register a new account or login with existing credentials
2. Create a new sheet from the dashboard
3. Share the sheet with others who can submit their entries
4. As the creator, you can:
   - View all entries
   - Delete any entry
   - Download the sheet as CSV
   - Delete the entire sheet
## Project Structure
- app.py : Main application file with all routes and database logic
- templates/ : HTML templates for the web pages
- static/ : CSS and JavaScript files
- odms.db : SQLite database file (created on first run)