let f2lList = [];

f2lList.push(
  // new RubikCube(
  //   0, 
  //   { 
  //     u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
  //     d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
  //     f: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ], 
  //     b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
  //     r: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ], 
  //     l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
  //   },
  //   [ 
  //     ``,
  //   ]
  // ),

  new RubikCube(
    1, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, r, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R' F R F'`,
      `U R U' R'`,
      `y F' L F L'`,
      `y2 U L U' L'`,
      `y' r' U' R U M'`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    2, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, b ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `F R' F' R`,
      `y L F' L' F`,
      `y U' L' U L`,
      `y2 l U L' U' M'`,
      `y' U' R' U R`,
    ],
    {
      u: 1, d: 0,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 1, d: 0,
      f: 2, b: 0, r: 0, l: 0,
    }
  ),
  new RubikCube(
    3, 
    { 
      u: [ [ g, g, g ], [ r, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, b, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `F' U' F`,
      `y L' U' L`,
      `y' R' U' R`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 0, b: 2, r: 0, l: 0,
    }
  ),
  new RubikCube(
    4, 
    { 
      u: [ [ g, b, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, r, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U R'`,
      `y F U F'`,
      `y2 L U L'`,
    ],
    {
      u: 1, d: 0,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 1, r: 0, l: 0,
    }
  ),
    new RubikCube(
    5, 
    { 
      u: [ [ g, b, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, r, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' R U R' U' | R U2 R' |`,
      `y U l' U L U' L' U' l`,
      `y2 U' L U L' U2 | L U' L' |`,
      `y' U r' U R U' R' U' r`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 1, r: 0, l: 0,
    }
  ),
  new RubikCube(
    6, 
    { 
      u: [ [ g, g, g ], [ r, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, b, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' r U' R' U R U r'`,
      `y U L' U' L U | L' U2 L |`,
      `y2 U' l U' L' U L U l'`,
      `y' U R' U' R U2 | R' U R |`,
    ],
    {
      u: 1, d: 0,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 1, d: 0,
      f: 0, b: 0, r: 0, l: 2,
    }
  ),
  new RubikCube(
    7, 
    { 
      u: [ [ g, g, g ], [ b, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, r, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' R U2 R' U2 | R U' R' |`,
      `y l U2 L2 U' L2' U' l'`,
      `y2 U' L U2 L' U2 | L U' L' |`,
      `y' r U2 R2 U' R2 U' r'`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, r: 0, l: 1,
    }
  ),
  new RubikCube(
    8, 
    { 
      u: [ [ g, r, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, b, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `r' U2 R2 U R2' U r`,
      `y U L' U2 L U2 | L' U L |`,
      `y2 l' U2 L2 U L2 U l`,
      `y' U R' U2 R U2 | R' U R |`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 0, b: 2, r: 0, l: 0,
    }
  ),
  new RubikCube(
    9, 
    { 
      u: [ [ g, r, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, b, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' R U' R' U | F' U' F |`,
      `y U L' U' L U' | L' U' L |`,
      `y U2 L' U L U | L' U' L |`,
      `y' U R' U' R U' | R' U' R |`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 1, r: 0, l: 0,
    }
  ),
  new RubikCube(
    10, 
    { 
      u: [ [ g, g, g ], [ b, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, r, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' R U R' U | R U R' |`,
      `U2 R U' R' U' | R U R' |`,
      `y U L' U L U' | F U F' |`,
      `y2 U' L U L' U | L U L' |`,
    ],
    {
      u: 1, d: 0,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, r: 0, l: 1,
    }
  ),
  new RubikCube(
    11, 
    { 
      u: [ [ g, g, g ], [ g, y, r ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, b, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' R U2 R' U | F' U' F |`,
      `y L U2 L2 U' L2 U' L'`,
      `y2 U' L U2 L' U y' | L' U' L |`,
      `y' R U2 R2 U' R2 U' R'`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 0, b: 0, r: 2, l: 0,
    }
  ),
  new RubikCube(
    12, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, b, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, r, b ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R' U2 R2 U R2 U R`,
      `y U L' U2 L U' | F U F' |`,
      `y2 L' U2 L2 U L2' U L`,
      `y' U R' U2 R U' y | R U R' |`
    ],
    {
      u: 1, d: 0,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 2, d: 0,
      f: 1, b: 0, r: 0, l: 0,
    }
  ),
  new RubikCube(
    13, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, w ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `M' U' R U R' U' R U2 r'`,
      `y U L' U L U' | L' U' L |`,
      `y2 M U' L U L' U' L U2 l'`,
      `y' U R' U R U' | R' U' R |`
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 2, b: 0, r: 0, l: 0,
    }
  ),
  new RubikCube(
    14, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, r, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U R U' R' U | R U R' |`,
      `y M' U L' U' L U L' U2 l`,
      `y2 U' L U' L' U | L U L' |`,
      `y' M U R' U' R U R' U2 r`,
    ],
    {
      u: 1, d: 0,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    15, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, b, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, r, w ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U R' U2 R U' R' U | R U' R' |`,
      `M U r U' r' U' M'`,
      `y L' U L U2 | F U F' |`,
      `y2 L U L' U2 L U' L' U | L U' L' |`,
      `y2 M' U l U' l' U' M`,
      `y' R' U R U2 y | R U R' |`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 1, b: 0, r: 0, l: 0,
    }
  ),
  new RubikCube(
    16, 
    { 
      u: [ [ g, g, g ], [ g, y, r ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, b, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U' R' U2 | F' U' F |`,
      `y L' U' L U2 L' U L U' | L' U L |`,
      `y M U' l' U l U M'`,
      `y2 L U' L' U2 y' | L' U' L |`,
      `y' R' U' R U2 R' U R U' | R' U R |`,
      `y' M' U' r' U r U M`,
    ],
    {
      u: 1, d: 0,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 1, d: 0,
      f: 0, b: 0, r: 2, l: 0,
    }
  ),
  new RubikCube(
    17, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, r, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U2 R' U' | R U R' |`,
      `y L F' L' F L' U L U' | L' U L |`,
      `y2 L U2 L' U' | L U L' |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    18, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, r ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R' F R F' R U' R' U | R U' R' |`,
      `y L' U2 L U | L' U' L |`,
      `y' R' U2 R U | R' U' R |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 2, b: 0, r: 0, l: 0,
    }
  ),
  new RubikCube(
    19, 
    { 
      u: [ [ g, b, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, r, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U R U2 R' U | R U' R' |`,
      `y U L' U' L U' l' U l U2 | l' U' l |`,
      `y2 U L U2 L' U | L U' L' |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 1, r: 0, l: 0,
    }
  ),
  new RubikCube(
    20, 
    { 
      u: [ [ g, g, g ], [ r, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, b, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' R U R' U r U' r' U2 | r U r' |`,
      `y U' L' U2 L U' | L' U L |`,
      `y' U' R' U2 R U' | R' U R |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 0, b: 0, r: 0, l: 2,
    }
  ),
  new RubikCube(
    21, 
    { 
      u: [ [ g, g, g ], [ b, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, r, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U' R' U2 | R U R' |`,
      `y F R U2 R' F'`,
      `y2 L U' L' U2 | L U L' |`,
      `y' r' U r U2 | r' U' r |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, r: 0, l: 1,
    }
  ),
  new RubikCube(
    22, 
    { 
      u: [ [ g, r, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, b, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `F' L' U2 L F`,
      `y L' U L U2 | L' U' L |`,
      `y2 l U' l' U2 | l U l' |`,
      `y' R' U R U2 | R' U' R |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 0, b: 2, r: 0, l: 0,
    }
  ),
  new RubikCube(
    23, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, b, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, r, r ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U R' U2 R U R' U' | R U R' |`,
      `U2 R2 U2 R' U' R U' R2`,
      `y F' U' L' U L F | L' U L |`,
      `y2 L U L' U2 L U L' U' | L U L' |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 1, b: 0, r: 0, l: 0,
    }
  ),
  new RubikCube(
    24, 
    { 
      u: [ [ g, g, g ], [ g, y, r ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ b, b, g ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, b, g ], [ g, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `F U R U' R' F' | R U' R' |`,
      `y L' U' L U2 L' U' L U | L' U' L |`,
      `y U2 L2 U2 L U L' U L2`,
      `y' R' U' R U2 R' U' R U | R' U' R |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 0, b: 0, r: 2, l: 0,
    }
  ),
  new RubikCube(
    25, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, g ], [ b, b, b ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, r, g ], [ g, r, r ], [ r, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R' F' R U R U' R' F`,
      `U' F' R U R' U' R' F R`,
      `R U' R' U' R U' R' U | R U R' |`,
      `y U' L' U L y' U | R U' R' |`,
      `y U' L' U L F' L F L'`,
      `y2 U' M U L U' M' U L'`,
      `y' U' R' U M U' R U M'`,
    ],
    {
      u: 0, d: 2,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    26, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, g ], [ b, b, g ], [ b, b, b ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, g, g ], [ g, r, r ], [ r, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U R U' R' y U' | L' U L |`,
      `U R U' R' F R' F' R`,
      `y L F L' U' L' U L F'`,
      `y U F L' U' L U L F' L'`,
      `y L' U L U L' U L U' | L' U' L |`,
      `y' U M U' R' U M' U' R`,
      `y2 U L U' M U L' U' M'`,
    ],
    {
      u: 0, d: 2,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 2, b: 0, r: 0, l: 0,
    }
  ),
  new RubikCube(
    27, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, g ], [ b, b, w ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, r, g ], [ g, r, r ], [ b, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U' R' U | R U' R'|`,
      `y L' U' L U2 | F U' F' |`,
      `y2 L U' L' U | L U' L'|`,
      `y' R' U' R U y U | R U' R' |`,
    ],
    {
      u: 0, d: 1,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    28, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, g ], [ b, b, g ], [ b, b, r ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, g, g ], [ g, r, r ], [ w, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U R' U2 | F' U F |`,
      `y L' U L U' | L' U L |`,
      `y2 L U L' U' y' U' | L' U L |`,
      `y' R' U R U' | R' U R |`
    ],
    {
      u: 0, d: 1,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 1, d: 0,
      f: 2, b: 0, r: 0, l: 0,
    }
  ),
  new RubikCube(
    29, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, g ], [ b, b, g ], [ b, b, w ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, g, g ], [ g, r, r ], [ b, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `M' U R U' r' U | R U' R' |`,
      `y L' U' L U | L' U' L |`,
      `y2 M U L U' l' U | L U' L' |`,
      `y' R' U' R U | R' U' R |`,
    ],
    {
      u: 0, d: 1,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 2, b: 0, r: 1, l: 0,
    }
  ),
  new RubikCube(
    30, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, g ], [ b, b, r ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, r, g ], [ g, r, r ], [ w, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U R' U' | R U R' |`,
      `y M' U' L' U l U' | L' U L |`,
      `y' M U' R' U r U' | R' U R' |`,
      `y2 L U L' U' | L U L' |`,
    ],
    {
      u: 0, d: 1,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    31, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ b, b, r ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, g, g ], [ b, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' R' F R F' | R U' R' |`,
      `R U' R' y' | R' U2 R |`,
      `y2 L U' L' y | R' U2 R |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 0, d: 0,
      f: 1, b: 0, 
      r: 2, l: 0,
    }
  ),
  new RubikCube(
    32, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ b, b, b ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ b, g, g ], [ r, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U R' U' R U R' U' | R U R' |`,
      `y L' U' L U L' U' L U | L' U' L |`,
      `y2 L U L' U' L U L' U' | L U L' |`,
      `y' R' U' R U R' U' R U | R' U' R |`,
    ],
    {
      u: 2, d: 0,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 1, d: 0,
      f: 2, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    33, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ b, b, b ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, g, g ], [ r, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' R U' R' U2 | R U' R' |`,
      `y R' D R U' R' D' R`,
      `y U' L' U' L U2 | L' U' L |`,
      `y U L' U2 L U' | L' U' L |`,
      `y2 U' L U' L' U2 | L U' L' |`,
      `y' L' D L U' L' D' L`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 0, d: 0,
      f: 2, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    34, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ b, b, b ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, g, g ], [ r, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [
      `L D' L' U L D L'`,
      `U R U R' U2 | R U R' |`,
      `U' R U2 R' U | R U R' |`,
      `y U L' U L U2 | L' U L |`,
      `y2 R D' R' U R D R'`,
      `y' U R' U R U2 | R' U R |`,
    ],
    {
      u: 1, d: 0,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 0, d: 0,
      f: 2, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    35, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ b, b, r ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ r, g, g ], [ b, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `U' R U R' U y' | R' U' R |`,
      `U M' U R U' r' | R U' R' |`,
      `U2 R U M' U R' U' M`,
      `y L2 u' L' U' L U u L U' L`,
      `y2 U2 L U M U L' U' M'`,
      `y' R2 u' R' U' R U u R U' R`,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 0, d: 0,
      f: 1, b: 0, 
      r: 2, l: 0,
    }
  ),
  new RubikCube(
    36, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ b, b, r ], [ b, b, g ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ w, g, g ], [ b, r, r ], [ g, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R2 u R U R' U' u' R' U R'`,
      `y U L' U' L U' y | L U L' |`,
      `y U' M' U' L' U l | L' U L |`,
      `y U2 L' U' M' U' L U M`,
      `y2 L2 u' L' U' L U u L U' L`,
      `y' U2 R' U' M U' R U M'`,
    ],
    {
      u: 1, d: 0,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 0, d: 0,
      f: 1, b: 0, 
      r: 2, l: 0,
    }
  ),
  new RubikCube(
    37, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, r ], [ b, b, b ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, g, g ], [ b, r, r ], [ r, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R2' U2' F R2 F' U2' R' U R'`,
      `y L2 U2 F' L2' F U2 L U' L`,
      `r U' r' R U R' U r U' r' | R U R' |`,
      `y2 l U' l' L U L' U l U' l' | L U L' |`,
    ],
    {
      u: 0, d: 2,
      f: 1, b: 0,
      r: 1, l: 0,
    },
    {
      u: 0, d: 0,
      f: 1, b: 0, 
      r: 2, l: 0,
    }
  ),
  new RubikCube(
    38, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, b ], [ b, b, w ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, g, g ], [ r, r, r ], [ b, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U R' U' R U2 R' U' | R U R' |`,
      `y L' U L U' L' U2 L U' | L' U L |`,
      `y2 L U L' U' L U2 L' U' | L U L' |`,
      `y' R' U R U' R' U2 R U' | R' U R |`,
    ],
    {
      u: 0, d: 1,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 0, d: 0,
      f: 2, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    39, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, b ], [ b, b, r ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, g, g ], [ r, r, r ], [ w, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U' R' U R U2 R' U | R U' R' |`,
      `y L' U' L U L' U2 L U | L' U' L |`,
      `y2 L U' L' U L U2 L' U | L U' L' |`,
      `y' R' U' R U R' U2 R U | R' U' R |`,
    ],
    {
      u: 0, d: 1,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 0, d: 0,
      f: 2, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    40, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, r ], [ b, b, w ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, g, g ], [ b, r, r ], [ b, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `r U' r' U2 r U r' | R U R' |`,
      `y L' U L l U l U2 l' U' l`,
      `y2 l U' l' U2 l U l' | L U L' |`,
    ],
    {
      u: 0, d: 1,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 0, d: 0,
      f: 1, b: 0, 
      r: 2, l: 0,
    }
  ),
  new RubikCube(
    41, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, r ], [ b, b, r ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, g, g ], [ b, r, r ], [ w, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      `R U' R' r U' r' U2 r U r'`,
      `y l' U l U2 l' U' l | L' U' L |`,
      `y' r' U r U2 r' U' r | R' U' R |`,
    ],
    {
      u: 0, d: 1,
      f: 1, b: 0,
      r: 2, l: 0,
    },
    {
      u: 0, d: 0,
      f: 1, b: 0, 
      r: 2, l: 0,
    }
  ),
  new RubikCube(
    42, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ g, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ b, gr, gr ], [ g, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, r ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    43, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ b, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ g, gr, gr ], [ g, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, g ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, r ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    44, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ g, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ r, gr, gr ], [ g, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, b ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    45, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ r, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ g, gr, gr ], [ g, gr, gr ] ],
      r: [ [ b, g, g ], [ g, r, g ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, b ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    46, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ gr, gr, b ], [ gr, gr, g ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ b, g, g ], [ r, o, o ], [ g, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    47, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, w ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, r ], [ gr, gr, r ], [ gr, gr, g ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ b, g, g ], [ b, o, o ], [ g, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    48, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ g, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ b, gr, gr ], [ g, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, r ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    49, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ b, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ g, gr, gr ], [ g, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, g ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, r ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    50, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ g, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ r, gr, gr ], [ g, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, b ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    51, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ r, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ g, gr, gr ], [ g, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, g ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, b ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    52, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ b, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ g, gr, gr ], [ g, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, g ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, r ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    53, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ g, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ b, gr, gr ], [ g, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, r ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    54, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ r, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ g, gr, gr ], [ g, gr, gr ] ],
      r: [ [ w, g, g ], [ g, r, g ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, b ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    55, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ g, b, g ], [ g, b, g ] ], 
      b: [ [ g, g, g ], [ r, gr, gr ], [ g, gr, gr ] ],
      r: [ [ r, g, g ], [ g, r, b ], [ g, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    56, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ gr, gr, b ], [ gr, gr, g ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ w, g, g ], [ r, o, o ], [ g, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    57, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ gr, gr, b ], [ gr, gr, g ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ r, g, g ], [ r, o, o ], [ g, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    58, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, r ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, b ], [ gr, gr, r ], [ gr, gr, g ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ w, g, g ], [ b, o, o ], [ g, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    59, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, b ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, w ], [ gr, gr, r ], [ gr, gr, g ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ r, g, g ], [ b, o, o ], [ g, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    60, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, g ], [ g, r, g ], [ g, r, b ] ], 
      b: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
      r: [ [ g, g, g ], [ g, gr, gr ], [ r, gr, gr ] ], 
      l: [ [ g, g, g ], [ g, b, g ], [ g, b, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    61, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, b, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, r, g ], [ g, r, g ], [ g, r, b ] ], 
      b: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
      r: [ [ g, g, g ], [ g, gr, gr ], [ r, gr, gr ] ], 
      l: [ [ g, g, g ], [ g, b, g ], [ g, b, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    62, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, g ], [ g, r, g ], [ g, r, w ] ], 
      b: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
      r: [ [ g, g, g ], [ g, gr, gr ], [ b, gr, gr ] ], 
      l: [ [ g, g, g ], [ g, b, g ], [ g, b, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    63, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, b, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, r, g ], [ g, r, g ], [ g, r, w ] ], 
      b: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
      r: [ [ g, g, g ], [ g, gr, gr ], [ b, gr, gr ] ], 
      l: [ [ g, g, g ], [ g, b, g ], [ g, b, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    64, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, g ], [ g, r, g ], [ g, r, r ] ], 
      b: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
      r: [ [ g, g, g ], [ g, gr, gr ], [ w, gr, gr ] ], 
      l: [ [ g, g, g ], [ g, b, g ], [ g, b, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    65, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, b, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, r, g ], [ g, r, g ], [ g, r, r ] ], 
      b: [ [ g, g, g ], [ o, o, g ], [ o, o, g ] ],
      r: [ [ g, g, g ], [ g, gr, gr ], [ w, gr, gr ] ], 
      l: [ [ g, g, g ], [ g, b, g ], [ g, b, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    66, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ o, o, g ], [ o, o, b ] ], 
      b: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
      r: [ [ g, r, g ], [ g, b, g ], [ r, b, g ] ], 
      l: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    67, 
    { 
      u: [ [ g, g, g ], [ g, y, r ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ o, o, g ], [ o, o, b ] ], 
      b: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
      r: [ [ g, b, g ], [ g, b, g ], [ r, b, g ] ], 
      l: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    68, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ o, o, g ], [ o, o, r ] ], 
      b: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
      r: [ [ g, r, g ], [ g, b, g ], [ w, b, g ] ], 
      l: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    69, 
    { 
      u: [ [ g, g, g ], [ g, y, r ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ o, o, g ], [ o, o, r ] ], 
      b: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
      r: [ [ g, b, g ], [ g, b, g ], [ w, b, g ] ], 
      l: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    70, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ o, o, g ], [ o, o, w ] ], 
      b: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
      r: [ [ g, r, g ], [ g, b, g ], [ b, b, g ] ], 
      l: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    71, 
    { 
      u: [ [ g, g, g ], [ g, y, r ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ o, o, g ], [ o, o, w ] ], 
      b: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
      r: [ [ g, b, g ], [ g, b, g ], [ b, b, g ] ], 
      l: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    72, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ gr, gr, g ], [ gr, gr, b ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ g, r, g ], [ g, o, o ], [ r, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    73, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, g ], [ gr, gr, g ], [ gr, gr, b ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ g, g, g ], [ g, o, o ], [ r, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    74, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ gr, gr, g ], [ gr, gr, w ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ g, r, g ], [ g, o, o ], [ b, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    75, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, g ], [ gr, gr, g ], [ gr, gr, r ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ g, g, g ], [ g, o, o ], [ w, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    76, 
    { 
      u: [ [ g, g, g ], [ g, y, b ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ gr, gr, g ], [ gr, gr, r ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ g, r, g ], [ g, o, o ], [ w, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    77, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, r, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, b, g ], [ gr, gr, g ], [ gr, gr, w ] ], 
      b: [ [ g, g, g ], [ b, b, g ], [ b, b, g ] ],
      r: [ [ g, g, g ], [ g, o, o ], [ b, o, o ] ], 
      l: [ [ g, g, g ], [ g, r, r ], [ g, r, r ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    78, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, g ], [ b, b, b ] ], 
      b: [ [ g, g, g ], [ b, gr, gr ], [ g, gr, gr ] ],
      r: [ [ g, g, g ], [ g, r, r ], [ r, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    79, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, g ], [ b, b, b ] ], 
      b: [ [ g, g, g ], [ r, gr, gr ], [ g, gr, gr ] ],
      r: [ [ g, g, g ], [ g, r, b ], [ r, r, g ] ], 
      l: [ [ g, g, g ], [ o, o, o ], [ o, o, o ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    80, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, b, g ], [ g, b, b ] ], 
      b: [ [ g, g, g ], [ gr, gr, gr ], [ gr, gr, gr ] ],
      r: [ [ g, g, g ], [ g, r, r ], [ r, r, r ] ], 
      l: [ [ g, g, g ], [ o, o, r ], [ o, o, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    81, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ r, o, o ], [ g, o, o ] ], 
      b: [ [ g, g, g ], [ g, r, r ], [ r, r, r ] ],
      r: [ [ g, g, g ], [ b, b, g ], [ b, b, b ] ], 
      l: [ [ g, g, g ], [ gr, gr, b ], [ gr, gr, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  ),
  new RubikCube(
    82, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
      f: [ [ g, g, g ], [ b, o, o ], [ g, o, o ] ], 
      b: [ [ g, g, g ], [ g, r, r ], [ r, r, r ] ],
      r: [ [ g, g, g ], [ b, b, g ], [ b, b, b ] ], 
      l: [ [ g, g, g ], [ gr, gr, r ], [ gr, gr, g ] ],
    },
    [ 
      ``,
    ],
    {
      u: 1, d: 0,
      f: 2, b: 0,
      r: 1, l: 0,
    },
    {
      u: 2, d: 0,
      f: 0, b: 0, 
      r: 1, l: 0,
    }
  )
)

for (let i = 0; i < f2lList.length; i++) {
  document.querySelector("table > tbody").innerHTML += `
    <tr>
      <td>${f2lList[i].id}</td>
      <td>${drawCube(f2lList[i])}</td>
      <td>
        <button onclick="rotateImage(this)">Rotate y</button>
        <br>
        <button onclick="rotateColorScheme(this)">Rotate Color Scheme</button>
        <br>
      </td>
      <td>${createSelector(f2lList[i], /[^y]/)}</td>
    </tr>
  `;
}