# MSPR Project
## Liste des tâches à effectuer

- [ ] Le [ClickUp](https://app.clickup.com/9003116160/v/l/t/9003116160) du projet ! Le maintenir à jour pour la bonne compréhension du travail fourni.


## Tester les requêtes comme pendant le cours avec Baptiste

- Installer python sur sa machine en le configurant correctement (https://www.youtube.com/watch?v=3nrCgMTDTdY)
- Installer PostgreSQL avec l'outil pgAdmin 4 pour l'administration (https://www.youtube.com/watch?v=H_TFWZo-I5w)
- Importer la base de données que j'ai mis dans le dossier backupPostgreSQL avec pgAdmin (https://windows8facile.fr/postgresql-importer-exporter-base-pgadmin/ Appelez la base de données "LiveEvents" pour ne rien avoir à modifier)
- Installer les packages nécessaires avec pip (pip install ...):
 - flask
 - flask_restful
 - sqlalchemy
 - unicode
 - unidecode
 - psycopg2
- A vous de jouer, sois en lançant main.py et en choississant quel méthodes vous utilisez en mettant un # devant les méthodes que vous ne voulez pas utiliser dans "if __name__ == '__main__':" ou sois en lançant run_api et la vous aurez flask qui vous permettra de faire des requêtes avec un navigateur ou Postman via l'adresse qui vous est donnée