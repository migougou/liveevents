from sqlalchemy import Column, Integer, String, Text, Numeric
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Localisations(Base):
  __tablename__ = 'localisations'
  __table_args__ = {'schema': 'localisations'}

  id = Column(Integer, primary_key=True, autoincrement=True)
  localisation = Column(String(50), nullable=False)
  lattitude = Column(Numeric(precision=9, scale=6), nullable=False)
  longitude = Column(Numeric(precision=9, scale=6), nullable=False)
  description = Column(Text, nullable=False)

  def to_dict(self):
    return {
      'id' : self.id,
      'acf':{
      'localisation' : self.localisation,
      'lattitude' : float(self.lattitude),
      'longitude' : float(self.longitude),
      'description' : self.description,
      }
    }