from generic.GenericResource import GenericResource
from orm.controller.PartenairesController import PartenairesController

# Classe pour la ressource Clients, dérivée de la ressource générique
class PartenairesResource(GenericResource):

  def __init__(self):
    # Initialisation de la ressource générique avec le contrôleur
    GenericResource.__init__(self, serviceController=PartenairesController())

    # Initialisation du contrôleur de service
    self.serviceController.__init__()

  def get(self):
    partenaires = self.serviceController.selectPartenaires()
    if not partenaires: return {'message': 'Partenaires not found'}, 404

    data = []
    for l in partenaires:
      data.append(l.to_dict())

    return data, 200

  def post(self):
    data = self.rebuild_params()

    return self.transform_data(data)

  def transform_data(self, input_data):
    """
    Transforme les données d'entrée en un format spécifique en extrayant les informations essentielles.
    """

    # Suppression de tous les partenaires dans la base de données si il y en a déjà
    if len(self.serviceController.selectPartenaires()) > 0: self.serviceController.deleteAll()

    output_data = []

    for item in input_data:
      location_data = {
        "partenaire": item["acf"]["partenaire"],
        "imageurl": item["acf"]["imageurl"],
        "sitepartenaire": item["acf"]["sitepartenaire"],
      }

      self.serviceController.insertPartenaires(location_data)
      output_data.append(location_data)

    return output_data