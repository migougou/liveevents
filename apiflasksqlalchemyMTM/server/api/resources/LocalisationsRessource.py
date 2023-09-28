from generic.GenericResource import GenericResource
from orm.controller.LocalisationsController import LocalisationsController

# Classe pour la ressource Clients, dérivée de la ressource générique
class LocalisationsResource(GenericResource):

    def __init__(self):
        '''
        Constructeur
        '''
        # Initialisation de la ressource générique avec le contrôleur
        GenericResource.__init__(self, serviceController=LocalisationsController())
        # Initialisation du contrôleur de service
        self.serviceController.__init__()

    # Méthode GET pour récupérer les localisations
    def get(self):
        res = []
        localisations = self.serviceController.selectLocalisations()
        # Si aucun localisation n'est trouvé, renvoie un message d'erreur
        if localisations is None or localisations == []:
            return {'message': 'Localisations not found'}, 404
        else:
            # Sinon, transforme chaque localisation en dictionnaire et l'ajoute à la liste des résultats
            for l in localisations:
                res.append(l.to_dict())
        return res, 200

    # Méthode POST pour ajouter un nouvel client
    def post(self):
        data = self.rebuild_params()
        res = []

        print(data)
        return data