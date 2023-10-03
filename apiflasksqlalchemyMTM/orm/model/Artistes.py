from sqlalchemy import Column, Integer, String, ForeignKey, Date, Time, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timedelta
from unidecode import unidecode

Base = declarative_base()

class Artistes(Base):
    __tablename__ = 'artistes'
    __table_args__ = {'schema': 'artistes'}

    artisteid = Column(Integer, primary_key=True, autoincrement=True)
    artiste = Column(String(50), nullable=False)
    datehdebut = Column(Date, nullable=False)
    duree = Column(Time, nullable=False)
    description = Column(Text, nullable=False)
    imageurl = Column(Text, nullable=False)
    sceneid = Column(Integer, ForeignKey('artistes.scenes.sceneid'))
    scene = relationship('Scenes')
    styles_musicaux = relationship('StylesMusicaux', secondary='artistes.styles_musicaux_artistes')
    origines = relationship('Origines', secondary='artistes.origines_artistes')

    def to_dict(self):
        # Permet de connaître l'heure de fin du passage de l'artiste
        datehdebut = datetime.strptime(self.datehdebut, '%Y-%m-%d %H:%M') if isinstance(self.datehdebut, str) else self.datehdebut
        duree = datetime.strptime(self.duree, '%H:%M') if isinstance(self.duree, str) else self.duree
        duree_timedelta = timedelta(hours=duree.hour, minutes=duree.minute)  # Conversion de la durée en timedelta
        hfin = datehdebut + duree_timedelta
        # Permet de réunir les styles musicaux si un artiste en a plusieurs
        style_musical_dictionnaire = [style_musical.style_musical for style_musical in self.styles_musicaux]
        style_musical_texte = ", ".join(style_musical_dictionnaire).capitalize()
        # Permet de réunir les origines si un artiste en a plusieurs
        origine_dictionnaire = [origine.origine for origine in self.origines]
        origine_texte = ", ".join(origine_dictionnaire)
        # Remets en forme la scène stockée dans la base de données pour qu'elle soit la même que nécessaire pour le code
        scene_value = unidecode(self.scene.to_dict()["scene"].lower())
        if "scene" in scene_value:
            scene_texte = scene_value.replace("scene", "").strip().capitalize()
        else:
            scene_texte = scene_value.capitalize()
        return {
            'id': self.artisteid,
            'acf':{
                'artiste': self.artiste,
                'date': datehdebut.strftime('%Y-%m-%d').replace('-', ''),
                'hdebut': datehdebut.strftime('%H:%M'),
                'hfin': hfin.strftime('%H:%M'),
                'description': self.description,
                'imageurl': self.imageurl,
                'scene' : scene_texte,
                'style_musical' : style_musical_texte,
                'origine' : origine_texte,
            }
        }


class Origines(Base):
    __tablename__ = 'origines'
    __table_args__ = {'schema': 'artistes'}

    origineid = Column(Integer, primary_key=True, autoincrement=True)
    origine = Column(String(20), nullable=False)

    def to_dict(self):
        return {'origineid': self.origineid, 'origine': self.origine}



class Scenes(Base):
    __tablename__ = 'scenes'
    __table_args__ = {'schema': 'artistes'}

    sceneid = Column(Integer, primary_key=True, autoincrement=True)
    scene = Column(String(20), nullable=False)

    def to_dict(self):
        return {'sceneid': self.sceneid, 'scene': self.scene}


class StylesMusicaux(Base):
    __tablename__ = 'styles_musicaux'
    __table_args__ = {'schema': 'artistes'}

    style_musicalid = Column(Integer, primary_key=True, autoincrement=True)
    style_musical = Column(String(20), nullable=False)

    def to_dict(self):
        return {'style_musicalid': self.style_musicalid, 'style_musical': self.style_musical}

class StylesMusicauxArtistes(Base):
    __tablename__ = 'styles_musicaux_artistes'
    __table_args__ = {'schema': 'artistes'}

    styles_musicaux_style_musicalid = Column(Integer, ForeignKey('artistes.styles_musicaux.style_musicalid'), primary_key=True)
    artistes_artisteid = Column(Integer, ForeignKey('artistes.artistes.artisteid'), primary_key=True)

    def to_dict(self):
        return {'styles_musicaux_style_musicalid': self.styles_musicaux_style_musicalid, 'artistes_artisteid': self.artistes_artisteid}

class OriginesArtistes(Base):
    __tablename__ = 'origines_artistes'
    __table_args__ = {'schema': 'artistes'}

    origines_origineid = Column(Integer, ForeignKey('artistes.origines.origineid'), primary_key=True)
    artistes_artisteid = Column(Integer, ForeignKey('artistes.artistes.artisteid'), primary_key=True)

    def to_dict(self):
        return {'origines_origineid': self.origines_origineid, 'artistes_artisteid': self.artistes_artisteid}


