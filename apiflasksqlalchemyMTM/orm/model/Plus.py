from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Plus(Base):
  __tablename__ = 'plus'
  __table_args__ = {'schema': 'plus'}

  id = Column(Integer, primary_key=True, autoincrement=True)
  categories_infos = Column(String(255), nullable=False)
  sous_categories = Column(String(255), nullable=False)
  texte_info = Column(Text, nullable=False)

  def to_dict(self):
    return {
      'id' : self.id,
      'acf': {
        'categories_infos' : self.categories_infos,
        'sous_categories' : self.sous_categories,
        'texte_info' : self.texte_info,
      }
    }