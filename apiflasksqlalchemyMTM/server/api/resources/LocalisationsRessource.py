from generic.GenericResource import GenericResource
from orm.controller.LocalisationsController import LocalisationsController

# Classe pour la ressource Localisations, dérivée de la ressource générique
class LocalisationsResource(GenericResource):

  def __init__(self):
    # Initialisation de la ressource générique avec le contrôleur
    GenericResource.__init__(self, serviceController=LocalisationsController())

    # Initialisation du contrôleur de service
    self.serviceController.__init__()

  def get(self):
    localisations = self.serviceController.selectLocalisations()
    if not localisations: return {'message': 'Localisations not found'}, 404

    data = []
    for l in localisations:
      data.append(l.to_dict())

    return data, 200

  def post(self):
    data = self.rebuild_params()

    return self.transform_data(data)

  def transform_data(self, input_data):
    """
    Transforme les données d'entrée en un format spécifique en extrayant les informations essentielles.
    """

    # Suppression de toutes les localisations dans la base de données si il y en a déjà
    if len(self.serviceController.selectLocalisations()) > 0: self.serviceController.deleteAll()

    output_data = []

    for item in input_data:
      location_data = {
        "localisation": item["acf"]["localisation"],
        "lattitude": item["acf"]["latitude"],
        "longitude": item["acf"]["longitude"],
        "description": item["acf"]["description"]
      }

      self.serviceController.insertLocalisations(location_data)
      output_data.append(location_data)

    return output_data