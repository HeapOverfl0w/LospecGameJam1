let ApartmentLevel1 = new Level (
  [
    [1,1,4,1,4,1,1,1,4,4,1,4,1,4,4,1,4,1,4,4,1,1,1,4,4,1,4,4,1,4,4,1,4,1,4,4,4,4,1,4,4,1,4,4,1,4,4,1,1,1,4,4,1,4,1,4,4,1,4,1,4,4,1,1,1,4,1,4,1,1],
    [1,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,1],
    [4,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,4],
    [1,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,1],
    [4,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,4],
    [1,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,1],
    [1,2,34,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,2,2,2,34,2,1],
    [1,0,0,0,0,0,2,3,3,3,3,3,3,87,87,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,2,0,0,0,0,0,1],
    [4,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,86,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,86,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,4],
    [4,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,86,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,86,6,6,6,6,6,6,6,6,6,6,6,6,5,34,0,0,0,0,0,4],
    [1,0,0,0,0,0,2,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,2,0,0,0,0,0,1],
    [1,0,0,0,0,0,2,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,2,0,0,0,0,0,1],
    [4,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,2,0,0,0,2,3,86,86,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,86,86,3,2,0,0,0,2,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,4],
    [4,0,0,0,0,0,34,5,6,6,3,2,0,0,0,0,0,34,0,0,0,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,0,0,0,34,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,4],
    [1,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,2,0,0,0,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,0,0,0,2,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,1],
    [1,2,2,2,2,2,2,3,6,6,3,2,0,0,0,0,0,2,0,0,0,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,0,0,0,2,0,0,0,0,0,2,3,6,6,3,2,2,2,2,2,2,1],
    [1,0,0,0,0,0,0,3,6,6,3,2,2,34,2,2,2,2,2,2,2,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,2,2,2,2,2,2,2,34,2,2,3,6,6,3,0,0,0,0,0,0,1],
    [1,0,0,1,1,1,1,3,6,6,3,3,3,5,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,1,1,1,1,0,0,1],
    [1,0,0,1,0,0,0,3,6,6,6,6,6,6,6,6,6,6,3,3,3,3,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,3,3,3,3,6,6,6,6,6,6,6,6,6,6,3,0,0,0,1,0,0,1],
    [1,0,0,1,0,0,0,3,6,6,6,6,6,6,6,6,6,6,0,0,3,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,3,0,0,6,6,6,6,6,6,6,6,6,6,3,0,0,0,1,0,0,1],
    [1,0,0,1,0,0,0,3,6,6,6,6,6,6,6,6,6,6,3,3,3,3,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,3,3,3,3,6,6,6,6,6,6,6,6,6,6,3,0,0,0,1,0,0,1],
    [1,0,0,1,1,1,1,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,1,1,1,1,0,0,1],
    [1,0,0,0,0,0,0,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,6,6,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,0,0,0,0,0,0,1],
    [1,2,2,2,2,2,2,3,86,86,3,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,3,6,6,6,6,6,6,3,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,3,6,6,3,2,2,2,2,2,2,1],
    [1,0,0,0,0,0,2,3,6,6,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,6,6,3,2,0,0,0,0,0,1],
    [4,0,0,0,0,0,2,3,6,6,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,6,6,5,34,0,0,0,0,0,4],
    [4,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,3,6,6,6,6,6,6,3,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,4],
    [1,0,0,0,0,0,2,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,6,6,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,2,0,0,0,0,0,1],
    [1,0,0,0,0,0,2,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,2,0,0,0,0,0,1],
    [4,0,0,0,0,0,34,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,86,6,6,6,6,6,6,6,6,6,6,6,6,86,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,4],
    [4,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,86,6,6,6,6,6,6,6,6,6,6,6,6,86,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,4],
    [1,0,0,0,0,0,2,3,3,3,3,3,3,3,3,3,5,3,3,3,5,3,3,3,3,3,3,3,3,3,3,3,87,3,6,6,3,87,3,3,3,3,3,3,3,3,3,3,3,5,3,3,3,5,3,3,3,3,3,3,3,3,3,2,0,0,0,0,0,1],
    [1,2,34,2,2,2,2,2,2,2,2,2,2,2,2,2,34,2,2,2,34,2,2,2,2,2,2,2,2,2,2,3,0,3,6,6,3,0,3,2,2,2,2,2,2,2,2,2,2,34,2,2,2,34,2,2,2,2,2,2,2,2,2,2,2,2,2,34,2,1],
    [1,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,3,0,3,6,6,3,0,3,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,1],
    [4,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,3,3,3,6,6,3,3,3,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,4],
    [1,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,3,77,6,6,6,6,77,3,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,1],
    [4,0,0,0,0,0,2,0,0,0,0,34,0,0,0,0,0,0,2,0,0,0,0,0,0,34,0,0,0,0,2,3,77,6,6,6,6,77,3,2,0,0,0,0,34,0,0,0,0,0,0,2,0,0,0,0,0,0,34,0,0,0,0,2,0,0,0,0,0,4],
    [1,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,3,77,6,6,6,6,77,3,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,1],
    [1,1,4,1,4,1,1,1,4,4,1,1,1,4,1,1,4,1,1,1,4,1,1,4,1,1,1,4,4,1,1,1,1,1,1,1,1,1,1,1,1,4,4,1,1,1,4,1,1,4,1,1,1,4,1,1,4,1,1,1,4,4,1,1,1,4,1,4,1,1]
  ],
      document.getElementById("skyboxblank"),
    true,
    "#1d1c1f",
      [{"type":"pottedplant","x":8.5,"y":8.5},{"type":"deaddude","x":8.5,"y":30.5},{"type":"deaddude","x":9.5,"y":33.5},
      {"type":"computerdesk","x":11.5,"y":26.5},{"type":"computerdesk","x":11.5,"y":28.5},{"type":"computerdesk","x":11.5,"y":30.5},{"type":"computerdesk","x":11.5,"y":38.5},
      {"type":"computerdesk","x":11.5,"y":40.5},{"type":"computerdesk","x":11.5,"y":42.5},{"type":"endtable","x":12.5,"y":13.5},
      {"type":"deaddude","x":12.5,"y":33.5},{"type":"tv","x":13.5,"y":12.5},{"type":"comfychair","x":13.5,"y":13.5},
      {"type":"bed","x":13.5,"y":20.5},{"type":"computerdesk","x":13.5,"y":26.5},{"type":"computerdesk","x":13.5,"y":28.5},
      {"type":"computerdesk","x":13.5,"y":30.5},
      {type:"fridge", x: 6.5, y: 9.5},{type:"tv", x: 1.5, y: 9},{type:"comfychair", x: 3.5, y: 11.5},{type:"endtable", x: 1.5, y: 11.5},
      {"type":"computerdesk","x":13.5,"y":38.5},{"type":"computerdesk","x":13.5,"y":40.5},{"type":"computerdesk","x":13.5,"y":42.5},
      {"type":"deaddude","x":14.5,"y":33.5},{"type":"fridge","x":15.5,"y":16.5},{"type":"computerdesk","x":15.5,"y":26.5},
      {"type":"computerdesk","x":15.5,"y":28.5},{"type":"computerdesk","x":15.5,"y":30.5},{"type":"computerdesk","x":15.5,"y":38.5},{"type":"computerdesk","x":15.5,"y":40.5},
      {"type":"computerdesk","x":15.5,"y":42.5},{"type":"deaddude","x":16.5,"y":33.5},{"type":"deaddude","x":18.5,"y":12.5},
      {"type":"elevatorbroken","x":18.5,"y":18.5},{"type":"elevatorbroken","x":18.5,"y":21.5},{"type":"elevatorbroken","x":19.5,"y":19.5},
      {"type":"elevatorbroken","x":18.5,"y":47.5},{"type":"elevatorbroken","x":18.5,"y":50.5},
      {"type":"statue","x":20.5,"y":34.5},{"type":"couch","x":22.5,"y":32.5},{"type":"couch","x":22.5,"y":37.5},
      {"type":"endtable","x":23.5,"y":32.5},{"type":"endtable","x":23.5,"y":37.5},{"type":"endtable","x":26.5,"y":32.5},
      {"type":"couch","x":27.5,"y":32.5},{"type":"couch","x":27.5,"y":37.5},{"type":"endtable","x":28.5,"y":37.5},
      {"type":"exitsign","x":30.5,"y":35.5},{"type":"cardboardbox","x":33.5,"y":32.5},{"type":"cardboardbox","x":33.5,"y":37.5},
      {"type":"deaddude","x":34.5,"y":35.5},{"type":"benchpress","x":2.5,"y":23.5},{"type":"benchpress","x":2.5,"y":26.5},{"type":"benchpress","x":2.5,"y":29.5},{"type":"dumbells","x":2.5,"y":32.5},{"type":"dumbells","x":2.5,"y":34.5},{"type":"treadmill","x":2.5,"y":38.5},{"type":"treadmill","x":2.5,"y":40.5},{"type":"treadmill","x":2.5,"y":42.5},{"type":"treadmill","x":2.5,"y":44.5},{"type":"treadmill","x":2.5,"y":46.5},{"type":"benchpress","x":4.5,"y":23.5},{"type":"benchpress","x":4.5,"y":26.5},{"type":"benchpress","x":4.5,"y":29.5}],
      [{"type":"turret","x":2.5,"y":30.5},{"type":"turret","x":2.5,"y":39.5},{"type":"turret","x":5.5,"y":30.5},{"type":"turret","x":5.5,"y":39.5},{"type":"melee","x":12.5,"y":27.5},{"type":"melee","x":12.5,"y":29.5},{"type":"melee","x":12.5,"y":39.5},{"type":"melee","x":12.5,"y":41.5},{"type":"melee","x":14.5,"y":27.5},{"type":"melee","x":14.5,"y":29.5},{"type":"melee","x":14.5,"y":39.5},{"type":"melee","x":14.5,"y":41.5},{"type":"melee","x":16.5,"y":27.5},{"type":"melee","x":16.5,"y":29.5},{"type":"melee","x":16.5,"y":39.5},{"type":"ranged","x":36.5,"y":34.5},{"type":"melee","x":16.5,"y":41.5},{"type":"ranged","x":29.5,"y":33.5},{"type":"ranged","x":29.5,"y":36.5}],
      [{"type":"health","x":4.5,"y":43.5},{"type":"ar","x":6.7,"y":8.8},{"type":"shotgun","x":25.5,"y":47},
      {"type":"ammo","x":14.5,"y":18.5},{"type":"ammo","x":14.5,"y":19.5},{"type":"health","x":32.5,"y":32.5},
      {"type":"ammo","x":32.5,"y":37.5},{"type":"ammo","x":14.5,"y":46},],
      [],
      [{type:"apartmentlevel1out", x: 37.3, y: 34.5}]
)