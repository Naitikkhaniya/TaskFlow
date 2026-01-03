from fastapi import FastAPI
from app.database import Base, engine
from app.routers import auth, tasks
from fastapi.middleware.cors import CORSMiddleware
from app.models import user

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="LUMORA API")
app.include_router(auth.router)
app.include_router(tasks.router)


origins = [
    "http://127.0.0.1:5173",
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"LUMORA API is running 🚀"}
