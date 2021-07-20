let ApartmentLevel3 = new Level (
  [
    [1,1,4,4,1,1,1,4,4,1,1,1,4,4,1,1,1,4,1,1,4,1,1,1,4,1,1,4,1,1,1,4,4,1,1,1,1,4,4,1,1,1,4,1,1,4,1,1,1,4,1,1,4,1,1,1,4,4,1,1,1,4,4,1,1,1,4,4,1,1],
    [1,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,1],
    [4,0,0,0,0,2,0,0,0,0,2,0,0,0,0,34,0,0,0,0,0,0,2,0,0,0,0,0,0,34,0,0,0,0,2,2,0,0,0,0,34,0,0,0,0,0,0,2,0,0,0,0,0,0,34,0,0,0,0,2,0,0,0,0,2,0,0,0,0,4],
    [1,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,1],
    [1,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,1],
    [4,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,4],
    [1,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,34,2,2,2,34,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,34,2,2,2,34,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,0,0,0,0,1],
    [1,2,2,34,2,2,2,34,2,2,2,3,3,3,3,3,3,3,3,3,5,3,3,3,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,3,3,3,5,3,3,3,3,3,3,3,3,3,2,2,2,34,2,2,2,34,2,2,1],
    [1,0,0,0,0,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,0,0,0,0,1],
    [4,0,0,0,0,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,2,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,2,0,0,0,0,0,0,0,0,0,4],
    [1,0,0,0,0,0,0,0,0,0,2,3,6,6,3,0,0,0,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,0,0,0,3,6,6,3,2,0,0,0,0,0,0,0,0,0,1],
    [4,0,0,0,0,0,0,0,0,0,2,3,6,6,3,0,0,0,3,2,0,0,0,0,2,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,2,0,0,0,0,2,3,0,0,0,3,6,6,3,2,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,34,5,6,6,0,0,0,0,3,2,0,0,0,0,34,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,34,0,0,0,0,2,3,0,0,0,0,6,6,5,34,0,0,0,0,0,0,0,0,0,4],
    [1,0,0,0,0,0,0,0,0,0,2,3,6,6,3,0,0,0,3,2,0,0,0,0,2,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,2,0,0,0,0,2,3,0,0,0,3,6,6,3,2,0,0,0,0,0,0,0,0,0,1],
    [1,2,2,2,2,2,2,2,2,2,2,3,6,6,3,0,0,0,3,2,0,0,0,0,2,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,2,0,0,0,0,2,3,0,0,0,3,6,6,3,2,2,2,2,2,2,2,2,2,2,1],
    [1,0,0,0,0,0,0,3,3,3,3,3,6,6,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,34,2,2,3,6,6,3,2,2,34,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,6,6,3,3,3,3,3,0,0,0,0,0,0,1],
    [1,0,0,1,1,1,1,3,6,6,6,6,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,5,3,3,3,6,6,3,3,3,5,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,6,6,6,6,3,1,1,1,1,0,0,1],
    [1,0,0,1,0,0,0,3,6,6,6,6,6,6,6,6,6,6,3,1,1,1,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,1,1,1,3,6,6,6,6,6,6,6,6,6,6,3,0,0,0,1,0,0,1],
    [1,0,0,1,0,0,83,0,6,6,6,6,6,6,6,6,6,6,0,1,0,1,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,1,0,1,0,6,6,6,6,6,6,6,6,6,6,82,0,0,0,1,0,0,1],
    [1,0,0,1,0,0,0,3,6,6,6,6,6,6,6,6,6,6,3,1,1,1,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,1,1,1,3,6,6,6,6,6,6,6,6,6,6,3,0,0,0,1,0,0,1],
    [1,0,0,1,1,1,1,3,6,6,6,6,6,6,6,6,6,6,3,3,3,3,3,3,3,3,3,3,3,3,5,3,3,3,6,6,3,3,3,5,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,6,6,6,6,6,6,6,3,1,1,1,1,0,0,1],
    [1,0,0,0,0,0,0,3,3,3,3,3,6,6,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,34,2,2,3,6,6,3,2,2,34,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,6,6,3,3,3,3,3,0,0,0,0,0,0,1],
    [1,2,2,2,2,2,2,2,2,2,2,3,6,6,3,0,0,0,3,2,0,0,0,0,2,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,2,0,0,0,0,2,3,0,0,0,3,6,6,3,2,2,2,2,2,2,2,2,2,2,1],
    [1,0,0,0,0,0,0,0,0,0,2,3,6,6,3,0,0,0,3,2,0,0,0,0,2,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,2,0,0,0,0,2,3,0,0,0,3,6,6,3,2,0,0,0,0,0,0,0,0,0,1],
    [4,0,0,0,0,0,0,0,0,0,34,5,6,6,0,0,0,0,3,2,0,0,0,0,34,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,34,0,0,0,0,2,3,0,0,0,0,6,6,5,34,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,2,3,6,6,3,0,0,0,3,2,0,0,0,0,2,0,0,0,0,0,0,0,2,3,6,6,3,2,0,0,0,0,0,0,0,2,0,0,0,0,2,3,0,0,0,3,6,6,3,2,0,0,0,0,0,0,0,0,0,4],
    [1,0,0,0,0,0,0,0,0,0,2,3,6,6,3,0,0,0,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,6,6,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,0,0,0,3,6,6,3,2,0,0,0,0,0,0,0,0,0,1],
    [4,0,0,0,0,0,0,0,0,0,2,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6,6,3,2,0,0,0,0,0,0,0,0,0,4],
    [4,0,0,0,0,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,0,0,0,0,4],
    [1,0,0,0,0,0,0,0,0,0,2,3,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,3,2,0,0,0,0,0,0,0,0,0,1],
    [1,2,2,34,2,2,2,34,2,2,2,3,3,3,3,3,3,3,3,3,5,3,3,3,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,3,3,3,5,3,3,3,3,3,3,3,3,3,2,2,2,34,2,2,2,34,2,2,1],
    [1,0,0,0,0,2,0,0,0,0,2,2,2,2,2,2,2,2,2,2,34,2,2,2,34,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,34,2,2,2,34,2,2,2,2,2,2,2,2,2,2,0,0,0,0,2,0,0,0,0,1],
    [4,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,4],
    [1,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,1],
    [1,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,1],
    [4,0,0,0,0,2,0,0,0,0,2,0,0,0,0,34,0,0,0,0,0,0,2,0,0,0,0,0,0,34,0,0,0,0,2,2,0,0,0,0,34,0,0,0,0,0,0,2,0,0,0,0,0,0,34,0,0,0,0,2,0,0,0,0,2,0,0,0,0,4],
    [1,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,1],
    [1,1,4,4,1,1,1,4,4,1,1,1,4,4,1,1,1,4,1,1,4,1,1,1,4,1,1,4,1,1,1,4,4,1,1,1,1,4,4,1,1,1,4,1,1,4,1,1,1,4,1,1,4,1,1,1,4,4,1,1,1,4,4,1,1,1,4,4,1,1]
    ],
      document.getElementById("skyboxblank"),
    true,
    "#1d1c1f",
      [{type:"elevatorbroken",x:18.5,y:17.5},{type:"elevatorbroken",x:18.5,y:22.5},{type:"elevatorbroken",x:18.5,y:46.5},{type:"elevatorbroken",x:18.5,y:51.5}],
      [],
      [],
      [],
      [{type:"apartmentlevel3down", x: 19.5, y: 7.5}]
)