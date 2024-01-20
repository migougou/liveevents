import hashlib

from generic.GenericResource import GenericResource
from orm.controller.ClientsController import ClientsController
from flask import request

# Classe pour la ressource Clients, dérivée de la ressource générique


class ClientsTestResource(GenericResource):

    def __init__(self):
        '''
        Constructeur
        '''
        # Initialisation de la ressource générique avec le contrôleur
        GenericResource.__init__(self, serviceController=ClientsController())
        # Initialisation du contrôleur de service
        self.serviceController.__init__()

    # Méthode GET pour récupérer les clients
    def get(self, email=None):
        res = []
        # Requête client par id
        if email:
            client = self.serviceController.selectClientsByEmail(email)
            if client is None or client == []:
                return {'message': 'Pas d''email correspondant'}, 404
            else:
                # Sinon, charge le client dans le résultat
                res = client.to_dict()
            return res, 200
        else:
            clients = self.serviceController.selectClients()
            # Si aucun client n'est trouvé, renvoie un message d'erreur
            if clients is None or clients == []:
                return {'message': 'Clients not found'}, 404
            else:
                # Sinon, transforme chaque client en dictionnaire et l'ajoute à la liste des résultats
                for a in clients:
                    res.append(a.to_dict())
            return res, 200

    # Méthode POST pour ajouter un nouveau client
    def post(self):
        # Obtenir les paramètres de la requête POST
        email = request.json.get('email').lower()
        motdepasse = request.json.get('motdepasse')
        motdepasse_crypte = hashlib.sha256(motdepasse.encode()).hexdigest()

        client = self.serviceController.selectClientsByEmail(email)

        if client or client != []:
            client_data = client.to_dict()
            client_data.pop("motdepasse", None)

        if client is None or client == []:
            return {'message': 'Email ou mot de passe inexact'}, 404

        client_data = client.to_dict()
        client_data.pop("motdepasse", None)
        if motdepasse_crypte != client.motdepasse:
            return {'message': 'Email ou mot de passe inexact'}, 404
        else:
            return {'message': f'Bienvenue {client.prenom} {client.nom}', 'data': client_data}, 200
