from generic.GenericResource import GenericResource
from orm.controller.InformationsController import InformationsController

# Classe pour la ressource Clients, dérivée de la ressource générique
class InformationsResource(GenericResource):

  def __init__(self):
    # Initialisation de la ressource générique avec le contrôleur
    GenericResource.__init__(self, serviceController=InformationsController())

    # Initialisation du contrôleur de service
    self.serviceController.__init__()

  def get(self):
    info = self.serviceController.selectInformations()
    if not info: return {'message': 'Informations not found'}, 404

    data = []
    for i in info:
      data.append(i.to_dict())

    return data, 200

  def post(self):
    data = self.rebuild_params()

    return self.transform_data(data)

  def transform_data(self, input_data):
    """
    Transforme les données d'entrée en un format spécifique en extrayant les informations essentielles.
    """

    # Suppression de toutes les Informations dans la base de données si il y en a déjà
    if len(self.serviceController.selectInformations()) > 0: self.serviceController.deleteAll()

    output_data = []

    for item in input_data:
      location_data = {
        "messagecourt": item["acf"]["messagecourt"],
        "message": item["acf"]["message"],
        "momentdepublication": item["acf"]["momentdepublication"],
        "niveaudimportance": item["acf"]["niveaudimportance"]
      }

      self.serviceController.insertInformations(location_data)
      output_data.append(location_data)

    return output_data