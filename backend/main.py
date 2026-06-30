from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.url import router as url_router
# Database
from app.database.database import engine
from app.database.models import Base
# Routers
from app.api.analyze import router as analyze_router
from app.api.image import router as image_router
from app.api.dashboard import router as dashboard_router
from app.api.resume import router as resume_router
from app.api.history import router as history_router
# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="JobShield AI",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Home
@app.get("/")
def home():
    return {"message": "JobShield AI Backend Running"}

# Routers
app.include_router(
    analyze_router,
    prefix="/api/analyze",
    tags=["AI Analysis"]
)

app.include_router(
    image_router,
    prefix="/api/image",
    tags=["Image Analysis"]
)

app.include_router(
    dashboard_router,
    prefix="/api/dashboard",
    tags=["Dashboard"]
)

app.include_router(
    url_router,
    prefix="/api/url",
    tags=["URL Analyzer"]
)

app.include_router(
    resume_router,
    prefix="/api/resume",
    tags=["Resume Analyzer"]
)

app.include_router(
    history_router,
    prefix="/api/history",
    tags=["Analysis History"]
)