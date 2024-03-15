# -*- coding: utf-8 -*-

# Importation des classes de modèles et de l'Engine ORM
from ..model.Plus import Plus
from generic.Engine import Engine

# Classe PlusController pour gérer les interactions entre l'ORM et les APIs
class PlusController(object):

    # Initialisation du contrôleur
    def __init__(self):

        # Création d'une instance de l'Engine ORM avec les informations de connexion à la base de données
        self.orm = Engine(type='postgresql', user='postgres', mdp='projetliveevents', server='localhost', port='5432', database='LiveEvents')

    # Méthode pour initialiser les tables de la base de données pour les objets Plus
    def init(self):
        self.orm.initializer(Plus)

    # Méthode pour sélectionner tous les Plus dans la base de données
    def selectPlus(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets Plus
        res = self.orm.selectObjects(Plus)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer une nouvelle Plus dans la base de données
    def insertPlus(self, data):
        # Création d'une nouvelle instance de Plus à partir des données fournies
        a = Plus(**data)
        # Utilisation de l'Engine ORM pour ajouter la nouvelle Plus à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit la nouvelle Plus en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a

        # Méthode pour supprimer toutes les données du schéma artistes
    def deleteAll(self):
        bReturn = False  # Valeur par défaut de la variable de retour
        try:
            self.orm.session.query(Plus).delete()  # Supprimer tous les enregistrements de la table Plus
            self.orm.session.commit()  # Validation des changements dans la base de données
            bReturn = True
        except Exception as e:
            print("Erreur lors de la suppression :", str(e))  # Gestion des erreurs lors de la suppression
            self.orm.session.rollback()  # Annulation des changements en cas d'erreur
        return bReturn