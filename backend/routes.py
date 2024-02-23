from fastapi import Depends, Form, HTTPException, status
from datetime import timedelta
from database import Session
from models import User, Tutor
from auth import oauth2_scheme, Token, TokenData, create_access_token, get_current_user
from app import app
from passlib.context import CryptContext


pwd_context  = CryptContext(schemes=["bcrypt"], deprecated="auto")

@app.post("/login")
async def login(username: str = Form(...), password: str = Form(...)):
    db = Session()

    user = db.query(User).filter(User.username == username).first()
    tutor = db.query(Tutor).filter(Tutor.username == username).first()

    if not user and not tutor:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    if user and pwd_context.verify(password, user.password):
        role = "user"
    elif tutor and pwd_context.verify(password, tutor.password):
        role = "tutor"
    else:
        raise HTTPException(status_code=400, detail="Incorrect username or password")

    access_token_expires = timedelta(minutes=90)
    access_token = create_access_token(data={"sub": username, "role": role, "username": username}, expires_delta=access_token_expires)

    return {"access_token": access_token, "token_type": "bearer", "role": role,"username": username }

@app.post("/register")
async def register(username: str = Form(...), email: str = Form(...), password: str = Form(...), role: str = Form(...)):
    db = Session()

    # Kiểm tra xem tên người dùng đã tồn tại chưa
    user = db.query(User).filter(User.username == username).first()
    tutor = db.query(Tutor).filter(Tutor.username == username).first()
    if user or tutor:
        raise HTTPException(status_code=400, detail="Username already exists")

    # Mã hóa mật khẩu
    hashed_password = pwd_context.hash(password)

    # Tạo người dùng mới hoặc giáo viên mới tùy thuộc vào vai trò
    if role == "user":
        new_user = User(username=username, email=email, password=hashed_password)
        db.add(new_user)
    elif role == "tutor":
        new_tutor = Tutor(username=username, email=email, password=hashed_password)
        db.add(new_tutor)

    db.commit()

    return {"username": username, "email": email, "role": role, "message": "Registration successful"}

@app.get("/home")
async def read_home(current_user: User = Depends(get_current_user)):
    return {"message": "Welcome to the home page!"}
