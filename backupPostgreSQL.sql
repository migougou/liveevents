-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS artistes.artistes
(
    id integer NOT NULL,
    artistes character varying(50) COLLATE pg_catalog."default" NOT NULL,
    style_musical character varying(10) COLLATE pg_catalog."default" NOT NULL,
    origine character varying(20) COLLATE pg_catalog."default" NOT NULL,
    scene character varying(10) COLLATE pg_catalog."default" NOT NULL,
    date date NOT NULL,
    hdebut time without time zone NOT NULL,
    hfin time without time zone NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    imageurl text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT artistes_pkey PRIMARY KEY (id)
);
END;

select *
from artistes.artistes

INSERT INTO artistes.artistes (id, artistes, style_musical, origine, scene, date, hdebut, hfin, description, imageurl)
VALUES
    (1, 'Artiste 1', 'Pop', 'France', 'Scène 1', '2023-08-16', '18:00', '20:00', 'Description de l''artiste 1', 'image1.jpg'),
    (2, 'Artiste 2', 'Rock', 'États-Unis', 'Scène 2', '2023-08-17', '19:30', '21:30', 'Description de l''artiste 2', 'image2.jpg'),
    (3, 'Artiste 3', 'Rap', 'Canada', 'Scène 1', '2023-08-18', '21:00', '23:00', 'Description de l''artiste 3', 'image3.jpg'),
    (4, 'Artiste 4', 'Électro', 'Allemagne', 'Scène 3', '2023-08-19', '22:30', '00:30', 'Description de l''artiste 4', 'image4.jpg');
	
DROP TABLE IF EXISTS artistes.artistes;