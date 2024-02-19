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
  
  # Méthode pour insérer un nouvel artiste dans la base de données
  def insertClients(self, data):
      # Création d'une nouvelle instance d'Artistes à partir des données fournies
      a = Clients(**data)
      # Utilisation de l'Engine ORM pour ajouter le nouvel artiste à la base de données
      res = self.orm.addObject(a)
      # Si l'ajout a réussi, convertit le nouvel artiste en dictionnaire, sinon retourne False
      if res:
          a = a.to_dict()
      else:
          a = False
      return a
  
  def updateClientCommandes(self, client_id, commandes_ids):
      # Assurer la conversion de client_id en entier
      try:
          client_id = int(client_id)
      except ValueError:
          print(f"ID client invalide : {client_id}")
          return False

      # Normaliser commandes_ids en une liste d'entiers
      if not isinstance(commandes_ids, list):
          commandes_ids = [commandes_ids]  # Supporter un seul ID ou une liste d'IDs

      try:
          commandes_ids = [int(id) for id in commandes_ids]
      except ValueError:
          print("Tous les IDs de commandes doivent être des entiers.")
          return False

      # Récupérer le client via l'ORM
      client = self.orm.selectObjectById(Clients, client_id)
      if not client:
          print(f"Client avec ID {client_id} introuvable.")
          return False

      try:
          # Créer des instances de Commandes pour les nouveaux IDs de commandes
          new_commandes_instances = []
          for commande_id in commandes_ids:
              # Vérifier si la commande est déjà liée au client
              if commande_id not in [commande.id for commande in client.commandes]:
                  # Créer une nouvelle instance de Commande
                  new_commande = Commandes(id=commande_id)
                  self.orm.session.add(new_commande)  # Ajouter la nouvelle commande à la session pour la création
                  new_commandes_instances.append(new_commande)

          # Associer les nouvelles commandes au client
          client.commandes.extend(new_commandes_instances)

          # Appliquer les modifications
          self.orm.session.commit()
          print("Commandes mises à jour avec succès.")
          return True
      except Exception as e:
          self.orm.session.rollback()  # Annuler les modifications en cas d'erreur
          print(f"Erreur lors de la mise à jour : {e}")
          return False

