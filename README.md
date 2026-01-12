# TaskFlow

TaskFlow is a full-stack productivity web application that helps users securely manage their personal tasks and stay organized with a modern, responsive interface.

## Features

- User registration and login  
- Secure password hashing using bcrypt  
- JWT-based authentication  
- Protected API routes  
- User-specific task management  
- Responsive modern UI  
- Fast and scalable backend  

## Tech Stack

### Backend
- FastAPI  
- SQLAlchemy  
- PostgreSQL  
- JWT (JSON Web Tokens)  
- Passlib (bcrypt)  

### Frontend
- React  
- Vite  
- React Router  
- Axios  
- Custom CSS & animations  

## Project Structure

```
TaskFlow/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routers/
│   │   ├── core/
│   │   └── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── api/
│   └── package.json
│
└── README.md
```

## Installation & Setup

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at:
```
http://127.0.0.1:8000
```

API docs:
```
http://127.0.0.1:8000/docs
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

## Authentication Flow

1. User registers with name, email, and password  
2. Password is hashed with bcrypt before saving  
3. User logs in  
4. Backend returns a JWT token  
5. Token is stored in the browser  
6. Token is sent in the Authorization header  
7. Backend validates token and returns protected data  

## API Endpoints

| Method | Endpoint | Description |
|--------|--------|------------|
| POST | /auth/register | Register new user |
| POST | /auth/login | Login user |
| GET | /auth/me | Get logged-in user |
| GET | /tasks | Get user tasks |
| POST | /tasks | Create new task |
| PUT | /tasks/{id} | Update task |
| DELETE | /tasks/{id} | Delete task |

## Current Status

### Completed
- Authentication system  
- JWT security  
- User model  
- Task CRUD backend  
- Home, Login, Register, Dashboard UI  

### In Progress
- Task management UI  
- Dashboard improvements  

## Author

Naitik  
Project: TaskFlow
