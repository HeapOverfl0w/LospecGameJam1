let StreetsLevel1 = new Level(
  [
    [11,11,11,11,11,11,11,11,11,11,11,1,1,1,1,1,1,11,11,11,11,11,11,11,11,11,11,11,11,1,1,1,1,1,1,11,11,11,11,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,11,11,11,11,103,11,11,11,11,11,13,14,37,36,14,13,11,11,11,11,11,102,101,11,11,11,11,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,13,13,13,13,14,13,13,13,13,13,13,14,37,36,14,13,13,13,13,13,13,26,27,13,13,13,13,13,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,1,1,1,1,1,1,1,1,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,15,15,15,15,25,15,15,15,15,15,15,21,33,33,21,15,15,15,15,15,15,31,30,15,15,15,15,15,15,21,33,33,24,13,11,11,11,11,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,40,40,40,40,40,40,40,40,40,40,40,32,35,35,32,40,40,40,40,40,40,40,40,40,40,40,40,40,40,32,35,35,14,13,13,13,13,11,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,41,41,41,41,41,41,41,41,41,41,41,32,35,35,32,41,41,41,41,41,41,41,41,41,41,41,41,41,41,32,35,35,22,15,15,15,15,103,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,42,42,42,42,42,42,42,42,42,42,42,32,35,35,32,42,42,42,42,42,42,42,42,42,42,42,42,42,42,32,35,35,14,13,13,13,13,11,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,43,43,43,43,43,43,43,43,43,43,43,32,35,35,32,43,43,43,43,43,43,43,43,43,43,43,43,43,43,32,35,35,14,13,11,11,11,11,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,15,15,15,15,23,15,15,15,15,15,15,21,33,33,21,15,15,15,15,15,15,28,29,15,15,15,15,15,15,21,33,33,24,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,13,13,13,13,14,13,13,13,13,13,13,14,37,36,14,13,13,13,13,13,13,26,27,13,13,13,13,13,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,11,11,11,11,11,11,11,11,11,11,104,11,11,11,11,11,11,11,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,11,11,11,11,103,11,11,11,11,11,13,14,37,36,14,13,11,11,11,11,11,101,102,11,11,11,11,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,13,13,13,13,13,13,13,13,13,13,13,14,13,13,13,13,13,13,11,0,11,11,11,11,11,11,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,13,13,13,13,13,13,13,13,13,13,13,22,15,15,15,15,19,13,11,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,13,13,13,13,13,13,13,13,13,13,13,14,35,35,35,35,14,13,11,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,13,13,13,13,13,13,13,13,13,13,13,14,35,13,13,35,14,13,11,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,13,13,13,13,13,13,13,13,13,13,13,14,35,13,13,35,14,13,11,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,13,13,13,13,13,13,13,13,13,13,13,14,35,13,13,35,14,13,11,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [11,11,11,11,11,11,11,11,11,11,11,13,14,37,36,14,13,11,11,11,11,11,11,11,11,11,11,11,11,13,14,37,36,14,13,11,11,11,11,11,11,11,11,11,11,13,14,37,36,14,81,13,13,13,13,13,13,13,13,13,13,13,13,13,14,35,13,13,35,22,15,104,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,13,13,13,13,13,13,13,13,13,13,13,14,37,36,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,37,36,14,13,13,13,13,13,13,13,13,13,13,13,13,14,37,36,14,81,13,13,13,13,13,13,13,13,13,13,13,13,13,14,35,13,13,35,14,13,11,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,15,15,15,15,15,15,15,15,15,15,15,21,33,33,21,15,15,15,15,15,15,15,15,15,15,15,15,15,15,21,33,33,21,15,15,15,15,15,15,15,15,15,15,15,15,21,33,33,21,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,35,13,13,35,14,13,11,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,39,39,39,39,39,39,39,39,39,39,39,32,35,35,32,39,39,39,39,39,39,39,39,39,39,39,39,39,39,32,35,35,32,39,39,39,39,39,39,39,39,39,39,39,39,32,35,35,32,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,14,13,11,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,15,23,15,15,15,15,15,23,15,15,15,21,33,33,21,15,15,15,15,15,15,15,15,15,15,15,15,15,15,21,33,33,21,15,15,15,15,15,15,15,15,15,15,15,15,21,33,33,24,80,79,80,18,15,15,15,15,15,15,15,15,15,15,15,15,15,19,35,14,13,11,0,0,0,0,0,0,0,11,1,1,1,1,1,1,1,1,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
    [1,13,14,13,13,13,13,13,14,13,13,13,14,37,36,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,37,36,14,13,13,13,13,13,13,13,13,13,13,13,13,14,37,36,14,79,0,78,16,13,13,13,13,13,13,13,13,13,13,13,13,13,14,35,14,13,11,0,0,0,0,0,0,0,11,13,14,44,45,46,47,14,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [11,11,103,11,11,13,11,11,103,11,11,13,14,37,36,14,13,11,11,11,11,11,13,13,11,11,11,11,11,13,14,37,36,14,13,11,11,11,11,11,11,11,11,11,11,13,14,37,36,14,80,79,80,13,13,13,13,13,13,13,13,13,13,13,13,13,13,22,15,16,13,11,0,0,0,0,0,0,0,11,13,14,44,45,46,47,14,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [11,0,0,0,11,11,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,11,13,13,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,13,13,13,11,0,11,11,11,11,11,11,11,13,14,44,45,46,47,14,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,11,13,13,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,104,11,11,11,11,0,11,13,13,13,13,13,13,13,14,44,45,46,47,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,1],
    [11,11,11,11,11,11,11,11,11,11,11,13,14,37,36,14,13,11,0,0,0,11,13,13,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,13,13,13,18,15,15,25,33,33,33,33,25,15,15,19,13,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
    [1,13,13,13,13,13,13,13,13,13,13,13,14,37,36,14,13,11,0,0,0,11,13,13,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,13,13,18,15,16,35,35,35,35,35,35,35,35,35,35,17,15,19,13,13,13,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [1,13,13,13,13,13,13,13,13,13,13,13,14,37,36,14,13,11,0,0,0,11,13,13,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,13,13,18,16,35,35,35,35,35,35,35,35,35,35,35,35,35,35,17,19,13,13,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [11,11,11,11,11,11,11,11,11,11,11,13,14,37,36,14,13,11,0,0,0,11,13,13,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,13,18,16,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,17,19,13,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [11,0,0,0,0,0,0,0,0,0,11,13,14,37,36,14,13,11,0,0,0,11,13,13,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,13,14,35,35,35,35,35,35,13,13,13,13,13,13,35,35,35,35,35,35,14,13,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [11,0,0,0,11,11,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,11,13,13,11,0,0,0,11,13,14,37,36,14,13,11,0,0,0,0,0,0,0,0,11,13,14,37,36,14,81,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,18,16,35,35,35,35,13,13,13,13,13,13,13,13,13,13,35,35,35,35,17,19,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [11,11,103,11,11,13,11,11,103,11,11,13,14,37,36,14,13,11,11,103,11,11,13,13,11,11,103,11,11,13,14,37,36,14,13,11,11,11,11,102,101,11,11,11,11,13,14,37,36,14,81,81,81,11,11,105,105,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,13,14,35,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,35,14,13,13,11,11,11,0,0,11,11,11,11,11,11,11,11,11],
    [1,13,14,13,13,13,13,13,14,13,13,13,14,37,36,14,13,13,13,14,13,13,13,13,13,13,14,13,13,13,14,37,36,14,13,13,13,13,13,26,27,13,13,13,13,13,14,37,36,14,13,13,13,1,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,35,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,35,14,13,13,13,13,13,26,27,13,13,13,13,13,13,13,13,1],
    [1,15,25,15,15,15,15,15,25,15,15,15,21,33,33,21,15,15,15,25,15,15,15,15,15,15,25,15,15,15,21,33,33,21,15,15,15,15,15,31,30,15,15,15,15,15,21,33,33,21,15,15,15,1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,24,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,22,15,15,15,15,15,31,30,15,15,15,15,15,15,15,15,1],
    [1,40,40,40,40,40,40,40,40,40,40,40,32,35,35,32,40,40,40,40,40,40,40,40,40,40,40,40,40,40,32,35,35,32,40,40,40,40,40,40,40,40,40,40,40,40,32,35,35,32,40,40,40,1,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,32,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,32,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,1],
    [1,41,41,41,41,41,41,41,41,41,41,41,32,35,35,32,41,41,41,41,41,41,41,41,41,41,41,41,41,41,32,35,35,32,41,41,41,41,41,41,41,41,41,41,41,41,32,35,35,32,41,41,41,1,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,32,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,32,41,41,41,41,41,41,41,41,41,41,41,41,41,41,41,1],
    [1,42,42,42,42,42,42,42,42,42,42,42,32,35,35,32,42,42,42,42,42,42,42,42,42,42,42,42,42,42,32,35,35,32,42,42,42,42,42,42,42,42,42,42,42,42,32,35,35,32,42,42,42,1,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,32,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,32,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,1],
    [1,43,43,43,43,43,43,43,43,43,43,43,32,35,35,32,43,43,43,43,43,43,43,43,43,43,43,43,43,43,32,35,35,32,43,43,43,43,43,43,43,43,43,43,43,43,32,35,35,32,43,43,43,1,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,32,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,32,43,43,43,43,43,43,43,43,43,43,43,43,43,43,43,1],
    [1,15,15,15,15,15,15,15,15,15,15,15,21,33,23,25,15,15,15,15,15,15,15,15,15,15,15,15,15,15,25,23,33,21,15,15,15,15,15,15,15,15,15,15,15,15,21,33,23,25,15,15,15,1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,24,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,22,15,23,33,15,15,33,23,15,15,15,15,15,15,15,15,1],
    [1,13,13,13,13,13,13,13,13,13,13,13,14,37,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,37,14,13,13,13,13,13,13,13,13,13,13,13,13,14,37,14,13,13,13,13,1,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,35,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,35,14,13,14,35,35,35,35,14,13,13,13,13,13,13,13,13,1],
    [11,11,11,11,11,11,11,11,11,11,11,11,81,81,81,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,81,81,81,11,11,11,11,11,11,11,11,11,11,11,11,81,81,81,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,13,14,35,35,35,35,13,13,13,13,13,13,13,13,13,13,13,13,35,35,35,35,14,13,17,15,15,15,15,16,13,13,11,11,11,11,11,11,11],
    [11,0,0,0,0,0,0,0,0,0,0,11,14,37,14,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,14,37,14,11,0,0,0,0,0,0,0,0,0,0,11,14,37,14,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,17,19,35,35,35,35,13,13,13,13,13,13,13,13,13,13,35,35,35,35,18,16,13,13,13,13,13,13,13,13,13,11,0,0,0,0,0,11],
    [11,0,0,0,0,0,0,0,0,0,0,11,14,37,14,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,14,37,14,11,0,0,0,0,0,0,0,0,0,0,11,14,37,14,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,13,14,35,35,35,35,35,35,13,13,13,13,13,13,35,35,35,35,35,35,14,13,13,11,11,11,11,11,11,11,11,11,0,0,0,0,0,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,13,17,19,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,35,18,16,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,13,13,17,19,35,35,35,35,35,35,35,35,35,35,35,35,35,35,18,16,13,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,13,13,13,17,15,19,35,35,35,35,35,35,35,35,35,35,18,15,16,13,13,13,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,13,13,13,13,13,13,17,15,15,23,33,33,33,33,23,15,15,16,13,13,13,13,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,13,13,13,13,13,13,13,13,13,13,13,14,44,45,46,47,14,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,1],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,11,11,11,11,13,14,44,45,46,47,14,13,11,11,11,11,11,11,11,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,14,44,45,46,47,14,13,11,0,0,0,0,0,11,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,14,44,45,46,47,14,13,11,0,0,0,0,0,11,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,14,44,45,46,47,14,13,11,0,0,0,0,0,11,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,13,14,44,45,46,47,14,13,11,0,0,0,0,0,11,13,11,0,0,0,0,0,0,0,0,0,0,0,0,0,11],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,1,1,1,1,1,1,1,11,11,11,11,11,11,11,1,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11]
  ],
      document.getElementById("skybox"),
      true,
      "#1d1c1f",
      [],
      [],
      [],
      [],
      []
);