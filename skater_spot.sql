DROP TABLE IF EXISTS skater_spots;
CREATE TABLE skater_spots(
    id serial,
    location_name varchar (500) NOT NULL,
    image_url varchar (100) NOT NULL,
    distance integer NOT NULL,
    google_maps varchar (500) NOT NULL,
    description varchar (1000)NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO skater_spots (location_name, distance, google_maps, description) VALUES ('Bresemann Forest Park Trail', 11 , 'https://www.google.com/maps/place/Bresemann+Forest/@47.1243039,-122.4479554,16.25z/data=!4m5!3m4!1s0x549103c622fa0737:0x4133ddf6c34d3f4f!8m2!3d47.1239456!4d-122.4451286','This naturally wooded site is approximately 70 acres with a system of pedestrian nature trails within the Parkland/Spanaway area. The beautiful and secluded walking trail may have users thinking they are miles from the city as they stroll along Morey Creek. Spanaway Creek is  a small stream tha runs through Breesemann Forest from Spanaway Lake and is part of the Clover Creek watershed. Pavement is smooth enough to ride comfortably. Paths can become hilly, watch your speed and try not to hit any pedestrians.');
INSERT INTO skater_spots (location_name, distance, google_maps, description) VALUES ('Chambers Bay Golf Course', 9.6 , 'https://www.google.com/maps/place/Chambers+Bay+Golf+Course/@47.2003271,-122.5940159,14z/data=!4m9!1m2!2m1!1schambers+golf+course!3m5!1s0x5491aa737cf00391:0xe446730d39a18895!8m2!3d47.2003276!4d-122.5707511!15sChRjaGFtYmVycyBnb2xmIGNvdXJzZVoWIhRjaGFtYmVycyBnb2xmIGNvdXJzZZIBEnB1YmxpY19nb2xmX2NvdXJzZeABAA','This hike starts on the ridge above Chambers Bay golf course, heading clockwise around the park, golf course and back up onto the ridge overlooking Chambers Bay and Puget Sound. The grade for the hills can reach 13%, users with less skating experience might find themselves kissing the ground a lot.');
