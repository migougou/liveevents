# -*- coding: utf-8 -*-

from flask import Flask
from flask_restful import Api

from .resources.ArtistesResource import ArtistesResource
from .resources.ClientsResource import ClientsResource
from .resources.ClientsTestResource import ClientsTestResource
from .resources.LocalisationsRessource import LocalisationsResource
from .resources.InformationsRessource import InformationsResource
from .resources.PlusRessource import PlusRessource

from .resources.PartenairesResource import PartenairesResource
from werkzeug.routing import BaseConverter


class TextConverter(BaseConverter):
    regex = r'[^/]+@[^/]+\.[a-zA-Z]+'


# Initialisation de l'application Flask
app = Flask("LiveEvents")
# Initialisation de l'API Flask-RESTful
api = Api(app)

# Ajout de la ressource Artistes à l'API avec l'endpoint /artistes
api.add_resource(ArtistesResource, '/artistes')

# Ajout de la ressource Client à l'API avec l'endpoint /clients
api.add_resource(ClientsResource, '/clients', '/clients/<int:client_id>')

# Ajout de la ressource Client à l'API avec l'endpoint /clients-test
api.add_resource(ClientsTestResource, '/clients-test')

# Ajout de la ressources Localisations à l'API avec l'endpoint /localisations
api.add_resource(LocalisationsResource, '/localisations')

# Ajout de la ressources Informations à l'API avec l'endpoint /informations
api.add_resource(InformationsResource, '/informations')

# Ajout de la ressources Plus à l'API avec l'endpoint /localisations
api.add_resource(PlusRessource, '/plus')

# Ajout de la ressource Partenaires à l'API avec l'endpoint /partenaires
api.add_resource(PartenairesResource, '/partenaires')
