# -*- coding: utf-8 -*-

# Importation des classes de modèles et de l'Engine ORM
from ..model.Partenaires import Partenaires
from generic.Engine import Engine

# Classe PartenairesController pour gérer les interactions entre l'ORM et les APIs
class PartenairesController(object):

    # Initialisation du contrôleur
    def __init__(self):

        # Création d'une instance de l'Engine ORM avec les informations de connexion à la base de données
        self.orm = Engine(type='postgresql', user='postgres', mdp='projetliveevents', server='localhost', port='5432', database='LiveEvents')

    # Méthode pour initialiser les tables de la base de données pour les objets Partenaires
    def init(self):
        self.orm.initializer(Partenaires)

    # Méthode pour sélectionner tous les partenaires dans la base de données
    def selectPartenaires(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets Partenaires
        res = self.orm.selectObjects(Partenaires)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer un nouveau partenaire dans la base de données
    def insertPartenaires(self, data):
        # Création d'une nouvelle instance de Partenaires à partir des données fournies
        a = Partenaires(**data)
        # Utilisation de l'Engine ORM pour ajouter le nouveau partenaire à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit le nouveau partenaire en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a

        # Méthode pour supprimer toutes les données du schéma artistes
    def deleteAll(self):
        bReturn = False  # Valeur par défaut de la variable de retour
        try:
            self.orm.session.query(Partenaires).delete()  # Supprimer tous les enregistrements de la table Partenaires
            self.orm.session.commit()  # Validation des changements dans la base de données
            bReturn = True
        except Exception as e:
            print("Erreur lors de la suppression :", str(e))  # Gestion des erreurs lors de la suppression
            self.orm.session.rollback()  # Annulation des changements en cas d'erreur
        return bReturn