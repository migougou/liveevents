from sqlalchemy import Column, Integer, String, ForeignKey, BigInteger, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Clients(Base):
  __tablename__ = 'clients'
  __table_args__ = {'schema': 'clients'}

  id = Column(Integer, primary_key=True, autoincrement=True)
  prenom = Column(String(50), nullable=False)
  nom = Column(String(100), nullable=False)
  adresse = Column(Text, nullable=False)
  pays = Column(String(50), nullable=False)
  ville = Column(String(50), nullable=False)
  codepostal = Column(Integer, nullable=False)
  departement = Column(String(50), nullable=False)
  email = Column(String(100), nullable=False)
  telephone = Column(BigInteger, nullable=False)
  motdepasse = Column(String(100), nullable=False)
  commandes = relationship('Commandes', secondary='clients.commandes_clients')

  def to_dict(self):
    return {
      'id' : self.id,
      'prenom' : self.prenom,
      'nom' : self.nom,
      'adresse' : self.adresse,
      'pays' : self.pays,
      'ville' : self.ville,
      'codepostal' : self.codepostal,
      'departement' : self.departement,
      'email' : self.email,
      'telephone' : self.telephone,
      'motdepasse' : self.motdepasse,
      'commandes' : [commande.id for commande in self.commandes],
    }
  

class Commandes(Base):
  __tablename__ = 'commandes'
  __table_args__ = {'schema': 'clients'}

  id = Column(Integer, primary_key=True, autoincrement=True)

  def to_dict(self):
    return {'id': self.id}
    

class CommandesClients(Base):
  __tablename__ = 'commandes_clients'
  __table_args__ = {'schema': 'clients'}

  commandes_id = Column(Integer, ForeignKey('clients.commandes.id'), primary_key=True)
  clients_id = Column(Integer, ForeignKey('clients.clients.id'), primary_key=True)

  def to_dict(self):
    return {'commandes_id': self.commandes_id, 'clients_id': self.clients_id}