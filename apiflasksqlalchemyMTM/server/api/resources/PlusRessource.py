from generic.GenericResource import GenericResource
from orm.controller.PlusController import PlusController

# Classe pour la ressource Plus, dérivée de la ressource générique
class PlusRessource(GenericResource):

  def __init__(self):
    # Initialisation de la ressource générique avec le contrôleur
    GenericResource.__init__(self, serviceController=PlusController())

    # Initialisation du contrôleur de service
    self.serviceController.__init__()

  def get(self):
    plus = self.serviceController.selectPlus()
    if not plus: return {'message': 'Plus not found'}, 404

    data = []
    for p in plus:
      data.append(p.to_dict())

    return data, 200

  def post(self):
    data = self.rebuild_params()

    return self.transform_data(data)

  def transform_data(self, input_data):
    """
    Transforme les données d'entrée en un format spécifique en extrayant les informations essentielles.
    """

    # Suppression de toutes les Plus dans la base de données si il y en a déjà
    if len(self.serviceController.selectPlus()) > 0: self.serviceController.deleteAll()

    output_data = []

    for item in input_data:
      location_data = {
        "categories_infos": item["acf"]["categories_infos"],
        "sous_categories": item["acf"]["sous_categories"],
        "texte_info": item["acf"]["texte_info"],
      }

      self.serviceController.insertPlus(location_data)
      output_data.append(location_data)

    return output_data