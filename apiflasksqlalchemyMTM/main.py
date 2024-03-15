# -*- coding: utf-8 -*-

#from cours1.package.Voiture import Voiture
from orm.controller.ArtistesController import ArtistesController
"""
def main():

    voiture1 = Voiture("BMW")
    voiture1.info()
"""
def sql_main():

    from sqlalchemy import create_engine, text
    from sqlalchemy.orm import Session

    engine = create_engine("postgresql://postgres:projetliveevents@localhost:5432/LiveEvents")

    session = Session(engine)

    req = text("""SELECT * FROM artistes.artistes""")

    res = session.execute(req).all()

    print(res)

def buildTables():
    grCtrl = ArtistesController()
    grCtrl.init()

def orm_main():
    grCtrl = ArtistesController()
    res = grCtrl.selectArtistes()
    print(res)
    for r in res:
        print(r.artistes)

if __name__ == '__main__':
    #sql_main()
    orm_main()
    #main()
    #buildTables()