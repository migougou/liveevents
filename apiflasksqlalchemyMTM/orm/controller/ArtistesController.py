# -*- coding: utf-8 -*-

# Importation des classes de modèles et de l'Engine ORM
from ..model.Artistes import Artistes, Scenes, StylesMusicaux, Origines, StylesMusicauxArtistes, OriginesArtistes
from generic.Engine import Engine

# Classe ArtistesController pour gérer les interactions entre l'ORM et les APIs
class ArtistesController(object):

    # Initialisation du contrôleur
    def __init__(self):

        # Création d'une instance de l'Engine ORM avec les informations de connexion à la base de données
        self.orm = Engine(type='postgresql', user='postgres', mdp='projetliveevents', server='localhost', port='5432', database='LiveEvents')
    
    # Méthode pour initialiser les tables de la base de données pour les objets Artistes
    def init(self):
        self.orm.initializer(Artistes)

    # Méthode pour sélectionner tous les artistes dans la base de données
    def selectArtistes(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets Artistes
        res = self.orm.selectObjects(Artistes)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer un nouvel artiste dans la base de données
    def insertArtistes(self, data):
        # Création d'une nouvelle instance d'Artistes à partir des données fournies
        a = Artistes(**data)
        # Utilisation de l'Engine ORM pour ajouter le nouvel artiste à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit le nouvel artiste en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a

    # Méthode pour sélectionner toutes les scènes dans la base de données
    def selectScenes(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets Scenes
        res = self.orm.selectObjects(Scenes)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer une nouvelle scène dans la base de données
    def insertScenes(self, data):
        # Création d'une nouvelle instance de Scene à partir des données fournies
        a = Scenes(**data)
        # Utilisation de l'Engine ORM pour ajouter la nouvelle scène à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit la nouvelle scène en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a
    
    # Méthode pour sélectionner tous les styles musicaux dans la base de données
    def selectStylesMusicaux(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets StylesMusicaux
        res = self.orm.selectObjects(StylesMusicaux)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer un nouveau style musical dans la base de données
    def insertStylesMusicaux(self, data):
        # Création d'une nouvelle instance de StylesMusicaux à partir des données fournies
        a = StylesMusicaux(**data)
        # Utilisation de l'Engine ORM pour ajouter le nouveau style musical à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit le nouveau style musical en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a
    
    # Méthode pour sélectionner toutes les origines dans la base de données
    def selectOrigines(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets Origines
        res = self.orm.selectObjects(Origines)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer une nouvelle origine dans la base de données
    def insertOrigines(self, data):
        # Création d'une nouvelle instance de Origines à partir des données fournies
        a = Origines(**data)
        # Utilisation de l'Engine ORM pour ajouter la nouvelle origine à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit la nouvelle origine en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a
    
    # Méthode pour sélectionner la table de liaison styles musicaux - artistes dans la base de données
    def selectStylesMusicauxArtistes(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets StylesMusicauxArtistes
        res = self.orm.selectObjects(StylesMusicauxArtistes)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer une nouvelle liaison style musical - artiste dans la base de données
    def insertStylesMusicauxArtistes(self, data):
        # Création d'une nouvelle instance de StylesMusicauxArtistes à partir des données fournies
        a = StylesMusicauxArtistes(**data)
        # Utilisation de l'Engine ORM pour ajouter la nouvelle liaison style musical - artiste à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit la nouvelle liaison style musical - artiste en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a
    
    # Méthode pour sélectionner toutes les liaisons origines - artistes dans la base de données
    def selectOriginesArtistes(self):
        res = []
        # Utilisation de l'Engine ORM pour sélectionner tous les objets OriginesArtistes
        res = self.orm.selectObjects(OriginesArtistes)
        # Retourne les résultats de la sélection
        return res

    # Méthode pour insérer une nouvelle liaison origine - artiste dans la base de données
    def insertOriginesArtistes(self, data):
        # Création d'une nouvelle instance de OriginesArtistes à partir des données fournies
        a = OriginesArtistes(**data)
        # Utilisation de l'Engine ORM pour ajouter la nouvelle liaison origine - artiste à la base de données
        res = self.orm.addObject(a)
        # Si l'ajout a réussi, convertit la nouvelle liaison origine - artiste en dictionnaire, sinon retourne False
        if res:
            a = a.to_dict()
        else:
            a = False
        return a
    
    # Méthode pour supprimer toutes les données du schéma artistes
    def deleteAll(self):
        bReturn = False  # Valeur par défaut de la variable de retour
        try:
            self.orm.session.query(OriginesArtistes).delete()  # Supprimer tous les enregistrements de la table OriginesArtistes
            self.orm.session.query(StylesMusicauxArtistes).delete()  # Supprimer tous les enregistrements de la table StylesMusicauxArtistes
            self.orm.session.query(Artistes).delete()  # Supprimer tous les enregistrements de la table Artistes
            self.orm.session.query(StylesMusicaux).delete()  # Supprimer tous les enregistrements de la table StylesMusicaux
            self.orm.session.query(Origines).delete()  # Supprimer tous les enregistrements de la table Origines
            self.orm.session.query(Scenes).delete()  # Supprimer tous les enregistrements de la table Scenes
            self.orm.session.commit()  # Validation des changements dans la base de données
            bReturn = True
        except Exception as e:
            print("Erreur lors de la suppression :", str(e))  # Gestion des erreurs lors de la suppression
            self.orm.session.rollback()  # Annulation des changements en cas d'erreur
        return bReturn
