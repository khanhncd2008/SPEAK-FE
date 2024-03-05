from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from passlib.context import CryptContext
from database import Session
from auth import oauth2_scheme, Token, TokenData, create_access_token, get_current_user
from routes import *
from app import app



origins = [
    "http://localhost:3000",  # Allow only this origin
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
