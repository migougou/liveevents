# Importation des classes de modèles et de l'Engine ORM
from ..model.Clients import Clients, Commandes, CommandesClients
from generic.Engine import Engine

# Classe ClientsController pour gérer les interactions entre l'ORM et les APIs
class ClientsController(object):

  # Initialisation du contrôleur
  def __init__(self):
    # Création d'une instance de l'Engine ORM avec les informations de connexion à la base de données
    self.orm = Engine(type='postgresql', user='postgres', mdp='projetliveevents', server='localhost', port='5432', database='LiveEvents')
  
  # Méthode pour initialiser les tables de la base de données pour les objets Clients
  def init(self):
    self.orm.initializer(Clients)

  # Méthode pour sélectionner tous les clients dans la base de données
  def selectClients(self):
    res = []
    # Utilisation de l'Engine ORM pour sélectionner tous les objets Clients
    res = self.orm.selectObjects(Clients)
    # Retourne les résultats de la sélection
    return res
  
  # Méthode pour sélectionner tous les clients dans la base de données
  def selectClientsById(self, client_id):
    res = []
    # Utilisation de l'Engine ORM pour sélectionner tous les objets Clients
    res = self.orm.selectObjectById(Clients, client_id)
    # Retourne les résultats de la sélection
    return res

  # Méthode pour sélectionner tous les clients dans la base de données
  def selectClientsByEmail(self, email):
    res = []
    # Utilisation de l'Engine ORM pour sélectionner tous les objets Clients
    res = self.orm.selectObjectByEmail(Clients, email)
    # Retourne les résultats de la sélection
    return res