from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Partenaires(Base):
  __tablename__ = 'partenaires'
  __table_args__ = {'schema': 'partenaires'}

  id = Column(Integer, primary_key=True, autoincrement=True)
  partenaire = Column(String(50), nullable=False)
  imageurl = Column(Text, nullable=False)
  sitepartenaire = Column(Text, nullable=False)

  def to_dict(self):
      return {
        'id' : self.id,
        'acf': {
          'partenaire' : self.partenaire,
          'imageurl' : self.imageurl,
          'sitepartenaire' : self.sitepartenaire,
        }
      }