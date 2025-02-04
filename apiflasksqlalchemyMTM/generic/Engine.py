# -*- coding: utf-8 -*-

# Import de la classe User depuis le fichier User.py

# Import des outils nécessaires depuis le package SQLAlchemy
from sqlalchemy import create_engine, inspect as sql_inspect
from sqlalchemy.orm import Session

# Classe Engine pour la gestion de la base de données
class Engine(object):

    def __init__(self, type, user, mdp, server, port, database):

        self.engine = create_engine(f"{type}://{user}:{mdp}@{server}:{port}/{database}", pool_size=1, max_overflow=50, pool_recycle=3600, pool_pre_ping=True)
        self.session = Session(self.engine)

    # Fonction qui initialise la base de données
    def initializer(self, objClass = None, asTable=True):

        obj = objClass  # Instanciation de la classe passée en paramètre
        inspected = sql_inspect(self.engine) # Instanciation de l'inspecteur du SGBDR
        if(obj):
            if not inspected.has_table(obj.__tablename__): # Si la table n'existe pas dans la base de données
                asTable = False
            if not asTable: # Si la table n'existe pas
                obj.__table__.create(self.engine)  # Création de la table dans la base de données

    def selectObjects(self, obj):
        res = self.session.query(obj).all()  # Exécution de la requête et récupération des résultats
        return res  # Retour des résultats

    def selectObjectById(self, obj, id):
        res = self.session.query(obj).filter_by(id=id).first() # Exécution de la requête et récupération d'un resultat unique
        return res  # Retour de l'objet récupéré

    def selectObjectByEmail(self, obj, email):
        res = self.session.query(obj).filter_by(email=email).first() # Exécution de la requête et récupération d'un resultat unique
        return res  # Retour de l'objet récupéré

    # Fonction qui insère un nouvel utilisateur dans la base de données
    def addObject(self, obj):
        bReturn = False  # Valeur par défaut de la variable de retour
        try:
            bReturn = True
            self.session.add(obj)  # Ajout du nouvel utilisateur à la session
            self.session.commit()  # Validation des changements dans la base de données
        except:
            print("Error during insertion")  # Gestion des erreurs lors de l'insertion
        return bReturn  # Retour du succès ou de l'échec de l'opération

    def deleteObjects(self, obj):
        bReturn = False  # Valeur par défaut de la variable de retour
        try:
            bReturn = True
            self.session.delete(obj)  # Ajout du nouvel utilisateur à la session
            self.session.commit()  # Validation des changements dans la base de données
        except:
            print("Error during suppresion")  # Gestion des erreurs lors de l'insertion
        return bReturn  # Retour du succès ou de l'échec de l'opération

    def updateObject(self, obj, id, data):
        bReturn = False  # Valeur par défaut de la variable de retour
        try:
            # Recherche de l'objet par son ID
            existing_obj = self.session.query(obj).filter_by(id=id).first()
            if existing_obj:
                # Mise à jour des champs de l'objet avec les données fournies
                for key, value in data.items():
                    if hasattr(existing_obj, key):
                        setattr(existing_obj, key, value)

                self.session.commit()  # Validation des changements dans la base de données
                bReturn = True
            else:
                print(f"Object with ID {id} not found.")
        except Exception as e:
            self.session.rollback()  # En cas d'erreur, annulation des changements
            print(f"Error during update: {e}")
        return bReturn  # Retour du succès ou de l'échec de l'opération
