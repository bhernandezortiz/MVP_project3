DROP TABLE IF EXISTS skater_spots;
CREATE TABLE skater_spots(
    id serial,
    location_name varchar (50) NOT NULL,
    distance integer NOT NULL,
    description varchar (1000)NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO skater_spots (location_name, distance, description) VALUES ('Bresemann Forest Park Trail',11, 'This naturally wooded site is approximately 70 acres with a system of pedestrian nature trails within the Parkland/Spanaway area. The beautiful and secluded walking trail may have users thinking they are miles from the city as they stroll along Morey Creek. Spanaway Creek is  a small stream the also runs through Breesemann Forest from Spanaway Lake and is part of the Clover Creek watershed. Pavement is smooth enough to ride comfortably. Paths can become hilly, watch your speed and try not to hit any pedestrians.');
