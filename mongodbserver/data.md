+ Execute the below command `db.stations.insertMany` on the schema stations
+ mongodb can be called any name but `Vue front end`
+ will need a collection with the name `stations` to work
+ otherwise you will have to change several files

```js
db.stations.insertMany(
[
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Anaheim Street Station",
    "latitude": 33.7818299,
    "longitude": -118.18938
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Pacific Coast Hwy Station",
    "latitude": 33.7890899,
    "longitude": -118.18938
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Willow Street Station",
    "latitude": 33.8070799,
    "longitude": -118.18983
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Downtown Long Beach Station",
    "latitude": 33.7680699,
    "longitude": -118.19292
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Pacific Ave Station",
    "latitude": 33.7722599,
    "longitude": -118.1937
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Wardlow Station",
    "latitude": 33.8198599,
    "longitude": -118.19609
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Del Amo Station",
    "latitude": 33.8482199,
    "longitude": -118.21102
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "7th Street / Metro Center Station - Metro Blue & Expo Lines",
    "latitude": 34.0486099,
    "longitude": -118.25882
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Grand / Lattc Station",
    "latitude": 34.0331599,
    "longitude": -118.26933
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Pico Station",
    "latitude": 34.0407299,
    "longitude": -118.26612
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "5th Street Station",
    "latitude": 33.7735999,
    "longitude": -118.18941
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "1st Street Station",
    "latitude": 33.7687399,
    "longitude": -118.18936
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "San Pedro Street Station",
    "latitude": 34.0268099,
    "longitude": -118.2555
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Washington Station",
    "latitude": 34.0196499,
    "longitude": -118.24308
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "103rd Street / Watts Towers Station",
    "latitude": 33.9422199,
    "longitude": -118.24316
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Willowbrook - Rosa Parks Station - Metro Blue Line",
    "latitude": 33.9280499,
    "longitude": -118.23755
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Compton Station",
    "latitude": 33.8974899,
    "longitude": -118.22425
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Artesia Station",
    "latitude": 33.8760799,
    "longitude": -118.2225
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Vernon Station",
    "latitude": 34.0029199,
    "longitude": -118.2433
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Slauson Station",
    "latitude": 33.9887599,
    "longitude": -118.2434
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Florence Station",
    "latitude": 33.9737399,
    "longitude": -118.24327
  },
  {
    "route_id": 801,
    "lineName": "Blue Line",
    "lineStation": "Firestone Station",
    "latitude": 33.9596099,
    "longitude": -118.2432
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Civic Center / Grand Park Station",
    "latitude": 34.0548999,
    "longitude": -118.24606
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Union Station - Metro Red & Purple Lines",
    "latitude": 34.0561999,
    "longitude": -118.23425
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Wilshire / Vermont Station",
    "latitude": 34.0626999,
    "longitude": -118.29008
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Vermont / Beverly Station",
    "latitude": 34.0765299,
    "longitude": -118.29169
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Vermont / Santa Monica Station",
    "latitude": 34.0899099,
    "longitude": -118.29173
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Vermont / Sunset Station",
    "latitude": 34.0977099,
    "longitude": -118.29176
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Hollywood / Western Station",
    "latitude": 34.1017399,
    "longitude": -118.30812
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Hollywood / Vine Station",
    "latitude": 34.1016299,
    "longitude": -118.32518
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Hollywood / Highland Station",
    "latitude": 34.1015499,
    "longitude": -118.33855
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Universal / Studio City Station",
    "latitude": 34.1399999,
    "longitude": -118.3627
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "North Hollywood Station",
    "latitude": 34.1684999,
    "longitude": -118.37681
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Westlake / Macarthur Park Station",
    "latitude": 34.0563699,
    "longitude": -118.27488
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "7th Street / Metro Center Station - Metro Red & Purple Lines",
    "latitude": 34.0486299,
    "longitude": -118.25868
  },
  {
    "route_id": 802,
    "lineName": "Red Line",
    "lineStation": "Pershing Square Station",
    "latitude": 34.0493199,
    "longitude": -118.25126
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Norwalk Station",
    "latitude": 33.9140299,
    "longitude": -118.10472
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Long Beach Blvd Station",
    "latitude": 33.9248799,
    "longitude": -118.20994
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Hawthorne / Lennox Station",
    "latitude": 33.9334099,
    "longitude": -118.3516
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Crenshaw Station",
    "latitude": 33.9251999,
    "longitude": -118.32655
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Mariposa Station",
    "latitude": 33.9231999,
    "longitude": -118.38757
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Aviation / Lax Station",
    "latitude": 33.9296199,
    "longitude": -118.37713
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Douglas Station",
    "latitude": 33.9052999,
    "longitude": -118.38311
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "El Segundo Station",
    "latitude": 33.9160599,
    "longitude": -118.38654
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Lakewood Blvd Station",
    "latitude": 33.9130699,
    "longitude": -118.1406
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Redondo Beach Station",
    "latitude": 33.8946399,
    "longitude": -118.3692
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Avalon Station",
    "latitude": 33.9274599,
    "longitude": -118.26522
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Willowbrook - Rosa Parks Station - Metro Green Line",
    "latitude": 33.9282599,
    "longitude": -118.23805
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Vermont / Athens Station",
    "latitude": 33.9286799,
    "longitude": -118.29173
  },
  {
    "route_id": 803,
    "lineName": "Green Line",
    "lineStation": "Harbor Freeway Station",
    "latitude": 33.9287099,
    "longitude": -118.2811
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Memorial Park Station",
    "latitude": 34.1483599,
    "longitude": -118.14751
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Lake Station",
    "latitude": 34.1518099,
    "longitude": -118.13139
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Heritage Square / Arroyo Station",
    "latitude": 34.0872299,
    "longitude": -118.21321
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Southwest Museum Station",
    "latitude": 34.0982399,
    "longitude": -118.20671
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Chinatown Station",
    "latitude": 34.0638599,
    "longitude": -118.23584
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Lincoln Heights / Cypress Park Station",
    "latitude": 34.0809499,
    "longitude": -118.22043
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Fillmore Station",
    "latitude": 34.1335199,
    "longitude": -118.14813
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Del Mar Station",
    "latitude": 34.1419099,
    "longitude": -118.14821
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Highland Park Station",
    "latitude": 34.1111799,
    "longitude": -118.19261
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "South Pasadena Station",
    "latitude": 34.1151899,
    "longitude": -118.15789
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Apu / Citrus College Station",
    "latitude": 34.1368099,
    "longitude": -117.89164
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Azusa Downtown Station",
    "latitude": 34.1358599,
    "longitude": -117.90663
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Irwindale Station",
    "latitude": 34.1290499,
    "longitude": -117.93251
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Duarte / City Of Hope Station",
    "latitude": 34.1325199,
    "longitude": -117.96768
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Monrovia Station",
    "latitude": 34.1331599,
    "longitude": -118.00347
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Arcadia Station",
    "latitude": 34.1428599,
    "longitude": -118.0292
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Sierra Madre Villa Station",
    "latitude": 34.1477499,
    "longitude": -118.08121
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Allen Station",
    "latitude": 34.1524199,
    "longitude": -118.11435
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Union Station - Metro Gold Line",
    "latitude": 34.0560599,
    "longitude": -118.23476
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Little Tokyo / Arts District Station",
    "latitude": 34.0500999,
    "longitude": -118.2379
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Atlantic Station",
    "latitude": 34.0333999,
    "longitude": -118.15447
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Maravilla Station",
    "latitude": 34.0333199,
    "longitude": -118.16814
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "East La Civic Center Station",
    "latitude": 34.0333599,
    "longitude": -118.16121
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Soto Station",
    "latitude": 34.0437499,
    "longitude": -118.21006
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Indiana Station",
    "latitude": 34.0342999,
    "longitude": -118.19218
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Pico / Aliso Station",
    "latitude": 34.0476299,
    "longitude": -118.22594
  },
  {
    "route_id": 804,
    "lineName": "Gold Line",
    "lineStation": "Mariachi Plaza / Boyle Heights Station",
    "latitude": 34.0472199,
    "longitude": -118.21965
  },
  {
    "route_id": 805,
    "lineName": "Purple Line",
    "lineStation": "Wilshire / Vermont Station",
    "latitude": 34.0626999,
    "longitude": -118.29008
  },
  {
    "route_id": 805,
    "lineName": "Purple Line",
    "lineStation": "Westlake / Macarthur Park Station",
    "latitude": 34.0563699,
    "longitude": -118.27488
  },
  {
    "route_id": 805,
    "lineName": "Purple Line",
    "lineStation": "7th Street / Metro Center Station - Metro Red & Purple Lines",
    "latitude": 34.0486299,
    "longitude": -118.25868
  },
  {
    "route_id": 805,
    "lineName": "Purple Line",
    "lineStation": "Pershing Square Station",
    "latitude": 34.0493199,
    "longitude": -118.25126
  },
  {
    "route_id": 805,
    "lineName": "Purple Line",
    "lineStation": "Civic Center / Grand Park Station",
    "latitude": 34.0548999,
    "longitude": -118.24606
  },
  {
    "route_id": 805,
    "lineName": "Purple Line",
    "lineStation": "Union Station - Metro Red & Purple Lines",
    "latitude": 34.0561999,
    "longitude": -118.23425
  },
  {
    "route_id": 805,
    "lineName": "Purple Line",
    "lineStation": "Wilshire / Normandie Station",
    "latitude": 34.0617499,
    "longitude": -118.30146
  },
  {
    "route_id": 805,
    "lineName": "Purple Line",
    "lineStation": "Wilshire / Western Station",
    "latitude": 34.0616899,
    "longitude": -118.30876
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Expo Park / Usc Station",
    "latitude": 34.0182299,
    "longitude": -118.28573
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Jefferson / Usc Station",
    "latitude": 34.0221199,
    "longitude": -118.27812
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Expo / Western Station",
    "latitude": 34.0183299,
    "longitude": -118.30891
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Lattc / Ortho Institute Station",
    "latitude": 34.0291099,
    "longitude": -118.2736
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "7th Street / Metro Center Station - Metro Blue & Expo Lines",
    "latitude": 34.0486099,
    "longitude": -118.25882
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Expo / Vermont Station",
    "latitude": 34.0182399,
    "longitude": -118.29154
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Pico Station",
    "latitude": 34.0407299,
    "longitude": -118.26612
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Downtown Santa Monica Station",
    "latitude": 34.0140099,
    "longitude": -118.49138
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "17th Street / Smc Station",
    "latitude": 34.0231599,
    "longitude": -118.48037
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Expo / Crenshaw Station",
    "latitude": 34.0225299,
    "longitude": -118.33508
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Farmdale Station",
    "latitude": 34.0239799,
    "longitude": -118.34609
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Expo / Sepulveda Station",
    "latitude": 34.0354099,
    "longitude": -118.43423
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Westwood / Rancho Park Station",
    "latitude": 34.0368199,
    "longitude": -118.42458
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "26th Street / Bergamot Station",
    "latitude": 34.0279899,
    "longitude": -118.46912
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Expo / Bundy Station",
    "latitude": 34.0317099,
    "longitude": -118.4529
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "La Cienega / Jefferson Station",
    "latitude": 34.0263599,
    "longitude": -118.37212
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Expo / La Brea / Ethel Bradley Station",
    "latitude": 34.0247999,
    "longitude": -118.35516
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Palms Station",
    "latitude": 34.0293199,
    "longitude": -118.40425
  },
  {
    "route_id": 806,
    "lineName": "Expo Line",
    "lineStation": "Culver City Station",
    "latitude": 34.0278999,
    "longitude": -118.38899
  }
]
 );
```
