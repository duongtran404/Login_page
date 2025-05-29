from sqlalchemy import Column, Integer, String
from database import Base
from database import engine

class Users(Base):
    __tablename__ = "Users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)

Users.metadata.create_all(bind=engine)
