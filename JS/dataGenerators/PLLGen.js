let pllList = [];

pllList.push(
  new RubikCube(
    "Aa", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 4, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 6, 5, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 5, 3, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 3, 6, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `x R' U R' D2 R U' R' D2 R2`,
      `l' U R' D2 R U' R' D2 R2`,
      `y R' D' R U' R' D R U2 R' D' R U' R' D R`,
      `y2 R' D' R U' R' D R U' R D' R U2 R' D R`,
      `y' R U R' F' r U R' U' r' F R2 U' R'`,
    ],
    '1/18',
  ),
  new RubikCube(
    "Ab", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 4, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 3, 5, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 6, 3, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 5, 6, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `x R2 D2 R U R' D2 R U' R x'`,
      `l' R' D2 R U R' D2 R U' R x'`,
      `R' D' R U R' D R U R' D' R U2 R' D R`,
      `y2 R' D' R U2 R' D R U R' D' R U R' D R`,
    ],
    '1/18',
  ),
  new RubikCube(
    "E", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 5, 4, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 4, 5, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 6, 3, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 3, 6, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `y x' R U' R' D R U R' D' R U R' D R U' R' D' x`,
      `y' x' R U' R' D R U R' D' R U R' D R U' R' D' x`,
      `y R' U' R' D' R U' R' D R U R' D' R U R' D R2`,
      `y' R' U' R' D' R U' R' D R U R' D' R U R' D R2`,
      `R2 U R2 U D R2 U' R2 U R2 U' D' R2 U R2 U2 R2`,
      `y2 R2 U R2 U D R2 U' R2 U R2 U' D' R2 U R2 U2 R2`,
    ],
    '1/36',
  ),
  new RubikCube(
    "F", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 6, 6, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 4, 3, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 3, 5, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 5, 4, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `y R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R`,
      `y2 R' U2 R' d' R' F' R2 U' R' U R' F R U' F`,
      `y' L U F L' U' L U L F' L2 U L U L' U' L U' L'`,
      `R' U R U' R2 F' U' F U R F R' F' R2`,
    ],
    '1/18',
  ),
  new RubikCube(
    "Ga", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 5, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 3, 6, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 5, 4, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 3, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `R2 u R' U R' U' R u' R2 y' R' U R`,
      `R2 U R' U R' U' R U' R2 D U' R' U R D'`,
      `y R U R' F' R U R' U' R' F R U' R' F R2 U' R' U' R U R' F'`,
      `y2 R U' R U R2 D R' U' R D' R' U2 R U' R' U' R2`,
      `y' R U2 R' U' F' R U R2 U' R' F R U R2 U2 R'`
    ],
    '1/18',
  ),
  new RubikCube(
    "Gb", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 3, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 3, 4, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 5, 6, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 5, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `R' U' R U D' R2 U R' U R U' R U' R2 D`,
      `y R U R' F' r U R' U' r' F R F' R U R' U' R' F R2 U' R'`,
      `y2 R' U2 R U' F R U R' U' R' F' U' R U R U' R'`,
    ],
    '1/18',
  ),
  new RubikCube(
    "Gc", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 3, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 3, 6, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 5, 5, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 4, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `R2 U' R U' R U R' U R2 D' U R U' R' D`,
      `y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2`,
      `y' u R2 U' R U' R U R' U R2 D' U R U' R' D`
    ],
    '1/18',
  ),
  new RubikCube(
    "Gd", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 6, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 3, 3, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 5, 4, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 5, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `R U R' U' D R2 U' R U' R' U R' U R2 D'`,
      `D' R U R' U' D R2 U' R U' R' U R' U R2`,
      `y R2 F' R U R U' R' F' R U2 R' U2 R' F2 R2`,
    ],
    '1/18',
  ),
  new RubikCube(
    "H", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 3, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 5, 6, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 3, 4, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 5, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `M2 U M2 U2 M2 U M2`,
      `y M2 U M2 U2 M2 U M2`,
      `y2 M2 U M2 U2 M2 U M2`,
      `y' M2 U M2 U2 M2 U M2`,
      `M2 U' M2 U2 M2 U' M2`,
      `y M2 U' M2 U2 M2 U' M2`,
      `y2 M2 U' M2 U2 M2 U' M2`,
      `y' M2 U' M2 U2 M2 U' M2`,
    ],
    '1/72',
  ),
  new RubikCube(
    "Ja", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 6, 6, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 5, 5, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 3, 3, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 4, 4, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `L' U' L F L' U' L U L F' L2 U L`,
      `y R' U L' U2 R U' R' U2 R L`,
      `y2 F U' R' F R2 U' R' U' R U R' F' R U R' F'`,
    ],
    '1/18',
  ),
  new RubikCube(
    "Jb", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 5, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 3, 4, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 5, 3, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 6, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `R U R' F' R U R' U' R' F R2 U' R'`,
      `R U2 R' U' R U2 L' U R' U' L`,
      `R L U2 R' U' R U2 L' U R'`,
      `y' L U' R U2 L' U L U2 R' L'`,
      `y R U' L U2 R' U R U2 L' R'`,
    ],
    '1/18',
  ),
  new RubikCube(
    "Na", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 5, 6, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 4, 3, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 6, 5, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 3, 4, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r U2`,
      `y r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r`,
      `y2 r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r`,
      `y' r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r`,
      `R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'`,
      `y R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'`,
      `y2 R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'`,
      `y' R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'`,
      `L U' R U2 L' U R' L U' R U2 L' U R'`,
      `y L U' R U2 L' U R' L U' R U2 L' U R'`,
      `y2 L U' R U2 L' U R' L U' R U2 L' U R'`,
      `y' L U' R U2 L' U R' L U' R U2 L' U R'`,
    ],
    '1/72',
  ),
  new RubikCube(
    "Nb", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 5, 5, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 4, 4, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 6, 6, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 3, 3, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `r D r' U2 r D r' U2 r D r' U2 r D r' U2 r D r' U2`,
      `y r D r' U2 r D r' U2 r D r' U2 r D r' U2 r D r' U2`,
      `y2 r D r' U2 r D r' U2 r D r' U2 r D r' U2 r D r' U2`,
      `y' r D r' U2 r D r' U2 r D r' U2 r D r' U2 r D r' U2`,
      `R' U R U' R' F' U' F R U R' F R' F' R U' R`,
      `y R' U R U' R' F' U' F R U R' F R' F' R U' R`,
      `y2 R' U R U' R' F' U' F R U R' F R' F' R U' R`,
      `y' R' U R U' R' F' U' F R U R' F R' F' R U' R`,
      `R' U L' U2 R U' L R' U L' U2 R U' L`,
      `y R' U L' U2 R U' L R' U L' U2 R U' L`,
      `y2 R' U L' U2 R U' L R' U L' U2 R U' L`,
      `y' R' U L' U2 R U' L R' U L' U2 R U' L`,
    ],
    '1/72',
  ),
  new RubikCube(
    "Ra", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 5, 4, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 3, 3, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 4, 6, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 5, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `y R U' R' U' R U R D R' U' R D' R' U2 R'`,
      `y R U R' F' R U2 R' U2 R' F R U R U2 R'`,
      `y2 R U2 R D R' U R D' R' U' R' U R U R'`,
    ],
    '1/18',
  ),
  new RubikCube(
    "Rb", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 6, 4, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 4, 6, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 3, 5, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 5, 3, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `y R2 F R U R U' R' F' R U2 R' U2 R`,
      `R' U2 R U2 R' F R U R' U' R' F' R2`,
      `R' U2 R' D' R U' R' D R U R U' R' U' R`
    ],
    '1/18',
  ),
  new RubikCube(
    "T", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 4, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 3, 6, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 5, 3, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 5, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `R U R' U' R' F R2 U' R' U' R U R' F'`,
      `R2 U R2 U' R2 U' D R2 U' R2 U R2 D'`
    ],
    '1/18',
  ),
  new RubikCube(
    "Ua", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 4, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 5, 3, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 3, 6, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 5, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `M2 U M' U2 M U M2`,
      `R2 U' R' U' R U R U R U' R`,
      `y M2 u' M' u2 M' u' M2`,
      `y2 M2 U M U2 M' U M2`,
      `y2 R U' R U R U R U' R' U' R2`,
      `y' M2 u' M u2 M u' M2`,
    ],
    '1/18',
  ),
  new RubikCube(
    "Ub", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 4, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 5, 6, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 3, 5, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 6, 3, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `M2 U' M' U2 M U' M2`,
      `R' U R' U' R' U' R' U R U R2`,
      `y M2 U' M2 U2 M' U2 M' U M2`,
      `y2 M2 U' M U2 M' U' M2`,
      `y2 R2 U R U R' U' R' U' R' U R'`,
      `y' M2 u M' u2 M' u M2`,
      `y' M2 U' M2 U2 M' U2 M' U M2`,
    ],
    '1/18',
  ),
  new RubikCube(
    "V", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 6, 6, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 3, 5, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 5, 4, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 4, 3, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `R' U R' U' y R' F' R2 U' R' U R' F R F`,
      `R' U R' U' R D' R' D R' U D' R2 U' R2 D R2`,
      `R U2 R' D R U' R U' R U R2 D R' U' R D2`,
      `R2 D' R2 U R2 U' D R D' R D R' U R U' R`,
      `y2 R U' R U R' D R D' R U' D R2 U R2 D' R2`
    ],
    '1/18',
  ),
  new RubikCube(
    "Y", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 4, 4, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 6, 5, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 3, 6, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 5, 3, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `F R U' R' U' R U R' F' R U R' U' R' F R F'`,
    ],
    '1/18',
  ),
  new RubikCube(
    "Z", 
    { 
      u: [ [ 2, 2, 2 ], [ 2, 2, 2 ], [ 2, 2, 2 ] ],
      f: [ [ 3, 6, 3 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      r: [ [ 6, 3, 6 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ], 
      b: [ [ 4, 5, 4 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      l: [ [ 5, 4, 5 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
      d: [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ],
    },
    [ 
      `M' U' M2 U' M2 U' M' U2 M2`,
      `M2 U M2 U M' U2 M2 U2 M'`,
      `y M' U M2 U M2 U M' U2 M2`,
      `y M2 U' M2 U' M' U2 M2 U2 M'`,
      `y2 M' U' M2 U' M2 U' M' U2 M2`,
      `y2 M2 U M2 U M' U2 M2 U2 M'`,
      `y' M' U M2 U M2 U M' U2 M2`,
      `y' M2 U' M2 U' M' U2 M2 U2 M'`,
    ],
    '1/36',
  ),
)

for (let i = 0; i < pllList.length; i++) {
  document.querySelector("table > tbody").innerHTML += `
    <tr>
      <td>${pllList[i].id}</td>
      <td>${drawSquare(pllList[i])}</td>
      <td>${drawCube(pllList[i])}</td>
      <td>${createSelector(pllList[i], /[^y]/)}</td>
      <td>
        <button onclick="turnU(this)">Turn U</button>
        <br>
        <button onclick="rotateImage(this)">Rotate y</button>
        <br>
        <button onclick="rotateColorScheme(this)">Rotate Color Scheme</button>
        <br>
        <button onclick="turnColor(this)">Turn on/off 2 Layers Color</button>
      </td>
    </tr>
  `;
}