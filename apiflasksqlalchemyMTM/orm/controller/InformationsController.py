# -*- coding: utf-8 -*-

# Importation des classes de modèles et de l'Engine ORM
from ..model.Informations import Informations
from generic.Engine import Engine

# Classe InformationsController pour gérer les interactions entre l'ORM et les APIs
class InformationsController(object):

    # Initialisation du contrôleur
    def __init__(self):

        # Création d'une instance de l'Engine ORM avec les informations de connexion à la base de données
        self.orm = Engine(type='postgresql', user='postgres', mdp='projetliveevents', server='localhost', port='5432', database='LiveEvents')

    # Méthode pour initialiser les tables de la base de données pour les objets Informations
    def init(self):
        self.orm.initializer(Informations)

    # Méthode pour sélectionner tous les Informations dans la base de données
    def selectInformations(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets Informations
        res = self.orm.selectObjects(Informations)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer une nouvelle information dans la base de données
    def insertInformations(self, data):
        # Création d'une nouvelle instance de Informations à partir des données fournies
        a = Informations(**data)
        # Utilisation de l'Engine ORM pour ajouter la nouvelle localisation à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit la nouvelle information en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a

        # Méthode pour supprimer toutes les données du schéma Informations
    def deleteAll(self):
        bReturn = False  # Valeur par défaut de la variable de retour
        try:
            self.orm.session.query(Informations).delete()  # Supprimer tous les enregistrements de la table Informations
            self.orm.session.commit()  # Validation des changements dans la base de données
            bReturn = True
        except Exception as e:
            print("Erreur lors de la suppression :", str(e))  # Gestion des erreurs lors de la suppression
            self.orm.session.rollback()  # Annulation des changements en cas d'erreur
        return bReturn