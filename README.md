# MSPR Project
## Liste des tâches à effectuer

- [ ] Le [ClickUp](https://app.clickup.com/9003116160/v/l/t/9003116160) du projet ! Le maintenir à jour pour la bonne compréhension du travail fourni.


## Tester les requêtes comme pendant le cours avec Baptiste

- Installer python sur sa machine en le configurant correctement (https://www.youtube.com/watch?v=3nrCgMTDTdY)
- Installer PostgreSQL avec l'outil pgAdmin 4 pour l'administration (https://www.youtube.com/watch?v=H_TFWZo-I5w)
- Importer la base de données que j'ai mis dans le dossier backupPostgreSQL avec pgAdmin (https://windows8facile.fr/postgresql-importer-exporter-base-pgadmin/ Appelez la base de données "LiveEvents" pour ne rien avoir à modifier)
- Installer les packages nécessaires avec pip (pip install ...) :
 - flask
 - flask_restful
 - sqlalchemy
 - unicode
 - unidecode
 - psycopg2
- A vous de jouer, sois en lançant main.py et en choississant quel méthodes vous utilisez en mettant un # devant les méthodes que vous ne voulez pas utiliser dans "if __name__ == '__main__':" ou sois en lançant run_api et la vous aurez flask qui vous permettra de faire des requêtes avec un navigateur ou Postman via l'adresse qui vous est donnée

## Review 15/03/2024 => Points à améliorer
- Le render d'un composant doit être unique (voir App.js)
- Possibilité d'utilisation des refs à plusieurs endroits du code plutôt qu'en permanence des states.
- Il aurait fallu mettre les pages dans un dossier pages à la racine.
- Il aurait fallu mettre les routes dans un dossier routes à la racine.
- Utilisation de display: grid plus adapaté à certains endroits pour l'UI.
- L'utilisation des % pour les dimensions n'étaient pas une bonne idée avec l'expérience que j'ai actuellement.