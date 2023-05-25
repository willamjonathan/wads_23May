from fastapi import Depends, FastAPI, HTTPException, Request, Response, status
from sqlalchemy.orm import Session
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, create_engine
from sqlalchemy.ext.declarative import declarative_base
from typing import Annotated
from jose import JWTError, jwt
from passlib.context import CryptContext
from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy.orm import sessionmaker

# to get a string like this run:
# openssl rand -hex 32
SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
SQLALCHEMY_DATABASE_URL = "sqlite:///./exc6.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
Base = declarative_base()


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    username = Column(String, unique=True)
    pass_hash = Column(String)


Base.metadata.create_all(bind=engine)
app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


class CreateUser(BaseModel):
    username: str
    email: str
    pass_hash: str


def create_tables():
    Base.metadata.create_all(bind=engine)


def get_user(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()

# Route to get token using JWT authentication
@app.post("/user-login")