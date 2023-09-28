# -*- coding: utf-8 -*-

# Importation des classes de modèles et de l'Engine ORM
from ..model.Localisations import Localisations
from generic.Engine import Engine

# Classe LocalisationsController pour gérer les interactions entre l'ORM et les APIs
class LocalisationsController(object):

    # Initialisation du contrôleur
    def __init__(self):

        # Création d'une instance de l'Engine ORM avec les informations de connexion à la base de données
        self.orm = Engine(type='postgresql', user='postgres', mdp='projetliveevents', server='localhost', port='5432', database='LiveEvents')
    
    # Méthode pour initialiser les tables de la base de données pour les objets Localisations
    def init(self):
        self.orm.initializer(Localisations)

    # Méthode pour sélectionner tous les localisations dans la base de données
    def selectLocalisations(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets Localisations
        res = self.orm.selectObjects(Localisations)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer une nouvelle localisation dans la base de données
    def insertLocalisations(self, data):
        # Création d'une nouvelle instance de Localisations à partir des données fournies
        a = Localisations(**data)
        # Utilisation de l'Engine ORM pour ajouter la nouvelle localisation à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit la nouvelle localisation en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a