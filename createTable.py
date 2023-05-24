import logging
from sqlalchemy.orm import sessionmaker
from Models import Base, UserActivity
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, Column, Integer, String, DateTime, func
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.declarative import declarative_base
SQLALCHEMY_DATABASE_URL = "sqlite:///./login.db"
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def create_tables():
    Base.metadata.create_all(bind=engine)


app = FastAPI()


@app.post("/create_table")
async def create_table(id_col: str, username_id_col: str, password_col: str, db: Session = Depends(get_db)):
    try:
        # Define the table
        class NewTable(Base):
            __tablename__ = "User"

            id = Column(Integer, primary_key=True, index=True, name=id_col)
            username_id = Column(String, index=True, name=username_id_col)
            password = Column(String, name=password_col)

        # Create the table
        Base.metadata.create_all(bind=engine, tables=[NewTable.__table__])

        return {"message": f"Table 'User' created successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


logger = logging.getLogger(__name__)

Base = declarative_base()


class User(Base):
    __tablename__ = 'User'
    id = Column(Integer, primary_key=True, index=True)
    username_id = Column(String)
    password = Column(String)
