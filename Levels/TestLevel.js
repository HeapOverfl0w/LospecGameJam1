
 let testLevel = new Level(
     [[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4],
    [2,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,3,3,4],
      [2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,3,3,4],
      [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [2,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1],
      [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
     [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]], document.getElementById("skybox"), true, "#1d1c1f", 
 [{type: "test", x: 2, y: 2}, {type: "couch", x: 5, y: 5}, {type: "trashcan", x: 6, y: 6}, {type: "pottedplant", x: 5, y: 2}, {type: "computerdesk", x: 5, y: 3}],
 [{type: "turret", x: 2, y: 10}, {type: "melee", x: 6, y: 2}],
 [{type: "pistol", x: 3, y: 12}, {type: "ammo", x: 6, y: 10}, {type:"health", x: 6.5, y: 14}, {type:"fireaxe", x: 6, y: 16}, {type:"ar", x: 3, y: 16.5}, {type:"shotgun", x: 2, y: 16.5}], []);