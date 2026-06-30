from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.analyze import router as analyze_router
from app.api.image import router as image_router
from app.api.dashboard import router as dashboard_router
from app.api.resume import router as resume_router
from app.api.history import router as history_router
from app.api.url import router as url_router

from app.database.database import engine
from app.database.models import Base

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
        "http://127.0.0.1:5173",
        "https://ai-job-shield-pro.vercel.app",
        "https://ai-job-shield-pro-git-main-shemanth25.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "JobShield AI Backend Running"}

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