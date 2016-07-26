CREATE EXTENSION postgis;
CREATE EXTENSION fuzzystrmatch;

CREATE TABLE public.points
(
  id integer NOT NULL,
  description character varying(255) NOT NULL,
  location GEOGRAPHY(POINT,4326),
  CONSTRAINT points_primary_key PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);


INSERT INTO points(id, description, location) VALUES(1, 'llllll', ST_GeomFromText('POINT(-71.060316 48.432044)', 4326));
commit;