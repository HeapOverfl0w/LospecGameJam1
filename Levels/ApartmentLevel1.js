let ApartmentLevel1 = new Level (
    [
      [1,1,4,1,4,1,1,1,4,4,1,4,1,4,4,1,4,1,4,4,1,1,1,4,4,1,4,4,1,4,4,1,4,1,4,4,4,4,1,4,4,1,4,4,1,4,4,1,1,1,4,4,1,4,1,4,4,1,4,1,4,4,1,1,1,4,1,4,1,1],
      [1,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,1],
      [4,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,4],
      [1,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,1],
      [4,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,4],
      [1,0,0,0,0,0,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,0,0,0,0,0,1],
      [1,2,34,2,2,2,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,3,2,2,2,2,34,2,1],
      [1,0,0,0,0,0,2,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,2,0,0,0,0,0,1],
      [4,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,4],
      [4,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5,34,0,0,0,0,0,4],
      [1,0,0,0,0,0,2,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,2,0,0,0,0,0,1],
      [1,0,0,0,0,0,2,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,2,0,0,0,0,0,1],
      [4,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,2,0,0,0,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,0,0,0,2,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,4],
      [4,0,0,0,0,0,34,5,6,6,3,2,0,0,0,0,0,34,0,0,0,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,0,0,0,34,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,4],
      [1,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,2,0,0,0,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,0,0,0,2,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,1],
      [1,2,2,2,2,2,2,3,6,6,3,2,0,0,0,0,0,2,0,0,0,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,0,0,0,2,0,0,0,0,0,2,3,6,6,3,2,2,2,2,2,2,1],
      [1,0,0,0,0,0,0,3,6,6,3,2,2,34,2,2,2,2,2,2,2,2,3,6,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,6,3,2,2,2,2,2,2,2,2,34,2,2,3,6,6,3,0,0,0,0,0,0,1],
      [1,0,0,1,1,1,1,3,6,6,3,3,3,5,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,0,0,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,1,1,1,1,0,0,1],
      [1,0,0,1,0,0,0,3,6,6,6,6,6,6,6,6,6,6,3,0,0,0,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,0,0,0,3,6,6,6,6,6,6,6,6,6,6,3,0,0,0,1,0,0,1],
      [1,0,0,1,0,0,0,0,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,0,0,0,0,1,0,0,1],
      [1,0,0,1,0,0,0,3,6,6,6,6,6,6,6,6,6,6,3,0,0,0,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,0,0,0,3,6,6,6,6,6,6,6,6,6,6,3,0,0,0,1,0,0,1],
      [1,0,0,1,1,1,1,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,1,1,1,1,0,0,1],
      [1,0,0,0,0,0,0,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,6,6,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,0,0,0,0,0,0,1],
      [1,2,2,2,2,2,2,3,6,6,3,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,3,6,6,6,6,6,6,3,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,3,6,6,3,2,2,2,2,2,2,1],
      [1,0,0,0,0,0,2,3,6,6,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,6,6,3,2,0,0,0,0,0,1],
      [4,0,0,0,0,0,2,3,6,6,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,6,6,5,34,0,0,0,0,0,4],
      [4,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,3,6,6,6,6,6,6,3,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,4],
      [1,0,0,0,0,0,2,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,6,6,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,2,0,0,0,0,0,1],
      [1,0,0,0,0,0,2,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,2,0,0,0,0,0,1],
      [4,0,0,0,0,0,34,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,4],
      [4,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,4],
      [1,0,0,0,0,0,2,3,3,3,3,3,3,3,3,3,5,3,3,3,5,3,3,3,3,3,3,3,3,3,3,3,0,3,6,6,3,0,3,3,3,3,3,3,3,3,3,3,3,5,3,3,3,5,3,3,3,3,3,3,3,3,3,2,0,0,0,0,0,1],
      [1,2,34,2,2,2,2,2,2,2,2,2,2,2,2,2,34,2,2,2,34,2,2,2,2,2,2,2,2,2,2,3,0,3,6,6,3,0,3,2,2,2,2,2,2,2,2,2,2,34,2,2,2,34,2,2,2,2,2,2,2,2,2,2,2,2,2,34,2,1],
      [1,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,3,0,3,6,6,3,0,3,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,1],
      [4,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,3,3,3,6,6,3,3,3,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,4],
      [1,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,3,77,6,6,6,6,77,3,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,1],
      [4,0,0,0,0,0,2,0,0,0,0,34,0,0,0,0,0,0,2,0,0,0,0,0,0,34,0,0,0,0,2,3,77,6,6,6,6,77,3,2,0,0,0,0,34,0,0,0,0,0,0,2,0,0,0,0,0,0,34,0,0,0,0,2,0,0,0,0,0,4],
      [1,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,3,77,6,6,6,6,77,3,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,1],
      [1,1,4,1,4,1,1,1,4,4,1,1,1,4,1,1,4,1,1,1,4,1,1,4,1,1,1,4,4,1,1,1,1,1,0,0,1,1,1,1,1,4,4,1,1,1,4,1,1,4,1,1,1,4,1,1,4,1,1,1,4,4,1,1,1,4,1,4,1,1]
    ],
      document.getElementById("skyboxblank"),
    true,
    "#1d1c1f",
      [{"type":"computerdesk","x":26,"y":11},{"type":"computerdesk","x":28,"y":11},{"type":"computerdesk","x":30,"y":11},{"type":"computerdesk","x":32,"y":11},{"type":"computerdesk","x":36,"y":11},{"type":"computerdesk","x":38,"y":11},{"type":"computerdesk","x":40,"y":11},{"type":"computerdesk","x":42,"y":11}],[],[{"type":"computerdesk","x":26,"y":13},{"type":"computerdesk","x":28,"y":13},{"type":"computerdesk","x":30,"y":13},{"type":"computerdesk","x":32,"y":13},{"type":"computerdesk","x":36,"y":13},{"type":"computerdesk","x":38,"y":13},{"type":"computerdesk","x":40,"y":13},{"type":"computerdesk","x":42,"y":13}],[],[{"type":"computerdesk","x":26,"y":15},{"type":"computerdesk","x":28,"y":15},{"type":"computerdesk","x":30,"y":15},{"type":"computerdesk","x":32,"y":15},{"type":"computerdesk","x":36,"y":15},{"type":"computerdesk","x":38,"y":15},{"type":"computerdesk","x":40,"y":15},{"type":"computerdesk","x":42,"y":15}],[],[],[],[{"type":"elevatordoorsbroken","x":18,"y":19},{"type":"elevatordoorsbroken","x":22,"y":19},{"type":"elevatordoorsbroken","x":47,"y":19},{"type":"elevatordoorsbroken","x":51,"y":19}],
      [],
      [],
      [],
      []
)