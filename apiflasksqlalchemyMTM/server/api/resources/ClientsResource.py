import hashlib

from generic.GenericResource import GenericResource
from orm.controller.ClientsController import ClientsController

# Classe pour la ressource Clients, dérivée de la ressource générique


class ClientsResource(GenericResource):

    def __init__(self):
        '''
        Constructeur
        '''
        # Initialisation de la ressource générique avec le contrôleur
        GenericResource.__init__(self, serviceController=ClientsController())
        # Initialisation du contrôleur de service
        self.serviceController.__init__()

    # Méthode GET pour récupérer les clients
    def get(self, client_id=None):
        res = []
        # Requête client par id
        if client_id:
            client = self.serviceController.selectClientsById(client_id)
            if client is None or client == []:
                return {'message': 'Pas d''id correspondant'}, 404
            else:
                # Sinon, charge le client dans le résultat
                client_data = client.to_dict()
                client_data.pop("motdepasse", None)
            return client_data, 200
        else:
            clients = self.serviceController.selectClients()
            # Si aucun client n'est trouvé, renvoie un message d'erreur
            if clients is None or clients == []:
                return {'message': 'Clients not found'}, 404
            else:
                # Sinon, transforme chaque client en dictionnaire et l'ajoute à la liste des résultats
                for a in clients:
                    client_data = a.to_dict()
                    client_data.pop("motdepasse", None)
                    res.append(client_data)
            return res, 200

    # Méthode POST pour ajouter un nouvel client
    def post(self):
        data = self.rebuild_params()
        res = None
        testNouveauClient = ['prenom', 'nom', 'adresse', 'pays', 'ville',
                             'codepostal', 'departement', 'email', 'telephone', 'motdepasse']

        if all(key in data for key in testNouveauClient):
            if self.test_email(data['email']):
                res = 1
            else:
                motdepasse_crypte = hashlib.sha256(
                    data['motdepasse'].encode()).hexdigest()
                # Remplace le mot de passe non crypté par le mot de passe crypté
                data['motdepasse'] = motdepasse_crypte
                data['email'] = data['email'].lower()
                res = self.serviceController.insertClients(data)
                res.pop("motdepasse", None)

        if (res == None):
            return {'message': 'Clients non envoyés'}, 404
        if (res == 1):
            return {'message': 'Cette email existe déjà'}, 404
        else:
            return {'message': 'Compte créé', 'res': res}, 201

    def test_email(self, email):
        clients = self.serviceController.selectClients()
        check = False
        for c in clients:
            if c.email == email:
                check = True
                break
        return check
