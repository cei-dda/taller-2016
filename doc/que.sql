SELECT * FROM points as p
  WHERE ST_DWithin(
    p.location,
    Geography(ST_MakePoint(-72.060316, 48.432044)),
    100
  );
