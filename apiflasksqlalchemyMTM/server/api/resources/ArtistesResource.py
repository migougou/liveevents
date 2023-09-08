# -*- coding: utf-8 -*-

from generic.GenericResource import GenericResource
from orm.controller.ArtistesController import ArtistesController
from datetime import datetime

# Classe pour la ressource Artistes, dérivée de la ressource générique
class ArtistesResource(GenericResource):

    def __init__(self):
        '''
        Constructeur
        '''
        # Initialisation de la ressource générique avec le contrôleur
        GenericResource.__init__(self, serviceController=ArtistesController())
        # Initialisation du contrôleur de service
        self.serviceController.__init__()

    # Méthode GET pour récupérer les artistes
    def get(self):
        res = []
        artistes = self.serviceController.selectArtistes()
        # Si aucun artiste n'est trouvé, renvoie un message d'erreur
        if artistes is None or artistes == []:
            return {'message': 'Artistes not found'}, 404
        else:
            # Sinon, transforme chaque artiste en dictionnaire et l'ajoute à la liste des résultats
            for a in artistes:
                res.append(a.to_dict())
        return res, 200

    # Méthode POST pour ajouter un nouvel artiste
    def post(self):
        data = self.rebuild_params()
        res = []
        
        if isinstance(data, list):
            if "acf" in data[0]:
                nouvelles_donnees = self.mise_en_forme_donnees(data)
                self.inserer_nouvelle_donnes(nouvelles_donnees)
                #Permet d'afficher les data complètes en retour par ordre d'id croissant
                artistesaffichage = self.serviceController.selectArtistes()
                res = sorted([a.to_dict() for a in artistesaffichage], key=lambda x: x["id"])
            else:
                res = 2
        else:
            res = 1
        
        if isinstance(res, int):
            return self.handle_error(res)
        elif(res == 1):
            return {'message': 'Mauvais format de données, ceci n''est pas une liste de données'}, 404
        elif(res == 2):
            return {'message': 'Les données ne sont pas au bon format, il doit y avoir acf dans la liste de données'}, 404
        if(res == False):
            return {'message': 'Artistes non envoyés'}, 404
        elif(res == []):
            return {'message': 'Aucunes données rajoutées'}, 404
        else:
            return res, 201

    def mise_en_forme_donnees(self, data):
        nouvelles_donnees = []
        for d in data:
            da = d["acf"]
            datehdebut = datetime.strptime(da["date"] + da["hdebut"], "%Y%m%d%H:%M:%S")
            duree = datetime.strptime(da["hfin"], "%H:%M:%S") - datetime.strptime(da["hdebut"], "%H:%M:%S")
            duree_passage = f"{duree.seconds // 3600:02}:{(duree.seconds // 60) % 60:02}"
            nettoyage_donnees = {
                "artiste": da["artiste"],
                "datehdebut": datehdebut.strftime("%Y-%m-%d %H:%M"),
                "duree": duree_passage,
                "description": da["description"],
                "imageurl": da["imageurl"],
                "scene": da["scene"],
                "style_musical": da["style_musical"],
                "origine": da["origine"],
            }
            nouvelles_donnees.append(nettoyage_donnees)
        return nouvelles_donnees

    def inserer_nouvelle_donnes(self, nouvelles_donnees):
        if len(self.serviceController.selectArtistes()) > 0:
            self.serviceController.deleteAll()
        
        for nd in nouvelles_donnees:
            sceneid = self.trouver_ou_creer_une_scene(nd["scene"].upper())
            artisteid = len(self.serviceController.selectArtistes()) + 1
            cleand = {
                "artisteid": artisteid,
                "artiste": nd["artiste"],
                "datehdebut": nd["datehdebut"],
                "duree": nd["duree"],
                "description": nd["description"],
                "imageurl": nd["imageurl"],
                "sceneid": sceneid,
            }
            self.serviceController.insertArtistes(cleand)
            self.trouver_ou_creer_un_style_musical_et_une_origines(nd, artisteid)
            
    def trouver_ou_creer_une_scene(self, scene_name):
        scenes = self.serviceController.selectScenes()
        for s in scenes:
            if s.scene == scene_name:
                return s.sceneid
        new_scene = {"sceneid": len(scenes) + 1, "scene": scene_name}
        self.serviceController.insertScenes(new_scene)
        return new_scene["sceneid"]

    def trouver_ou_creer_un_style_musical_et_une_origines(self, nd, artisteid):
        styles_musicaux = self.serviceController.selectStylesMusicaux()
        origines = self.serviceController.selectOrigines()

        def inserer_un_style_musical(data):
            for s in styles_musicaux:
                if s.style_musical == data.upper():
                    new_styles_musicaux_artistes = {'styles_musicaux_style_musicalid': s.style_musicalid, 'artistes_artisteid': artisteid}
                    self.serviceController.insertStylesMusicauxArtistes(new_styles_musicaux_artistes)
                    return
            new_style_musical = {"style_musicalid": len(styles_musicaux) + 1, "style_musical": data.upper()}
            self.serviceController.insertStylesMusicaux(new_style_musical)
            new_styles_musicaux_artistes = {'styles_musicaux_style_musicalid': new_style_musical["style_musicalid"], 'artistes_artisteid': artisteid}
            self.serviceController.insertStylesMusicauxArtistes(new_styles_musicaux_artistes)

        def inserer_une_origine(data):
            for s in origines:
                if s.origine == data.upper():
                    new_origines_artistes = {'origines_origineid': s.origineid, 'artistes_artisteid': artisteid}
                    self.serviceController.insertOriginesArtistes(new_origines_artistes)
                    return
            new_origine = {"origineid": len(origines) + 1, "origine": data.upper()}
            self.serviceController.insertOrigines(new_origine)
            new_origines_artistes = {'origines_origineid': new_origine["origineid"], 'artistes_artisteid': artisteid}
            self.serviceController.insertOriginesArtistes(new_origines_artistes)

        if "," in nd["style_musical"]:
            style_musical_isole = [style.strip() for style in nd["style_musical"].split(',')]
            for si in style_musical_isole:
                inserer_un_style_musical(si)
        else:
            inserer_un_style_musical(nd["style_musical"])

        if "," in nd["origine"]:
            origine_isole = [origine.strip() for origine in nd["origine"].split(',')]
            for oi in origine_isole:
                inserer_une_origine(oi)
        else:
            inserer_une_origine(nd["origine"])
