from sqlalchemy import Column, Integer, String, Text, TIMESTAMP
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Informations(Base):
  __tablename__ = 'informations'
  __table_args__ = {'schema': 'informations'}

  id = Column(Integer, primary_key=True, autoincrement=True)
  messagecourt = Column(String(255), nullable=False)
  message = Column(Text, nullable=False)
  momentdepublication = Column(TIMESTAMP, nullable=False)
  niveaudimportance = Column(String(255), nullable=False)

  def to_dict(self):
    return {
      'id' : self.id,
      'acf': {
        'messagecourt' : self.messagecourt,
        'message' : self.message,
        'momentdepublication' : self.momentdepublication.strftime('%Y-%m-%d %H:%M:%S'),
        'niveaudimportance' : self.niveaudimportance,
      }
    }