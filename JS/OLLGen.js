class RubikCube{
  constructor(id, faces, algorithms, probability, type) {
    this.id = id;
    this.faces = faces;
    this.algorithms = algorithms;
    this.probability = probability;
    this.type = type;
    this.rotateCount = 0;
  }
  x() {
    let n = this.faces.r.length;
    let x = Math.floor(n / 2);
    let y = n - 1;
    let t = [ [], [], [] ];

    for (let i = 0; i<n/2; i++) {
      for (let j = i; j<n-i-1; j++) {
        var tmp = this.faces.r[i][j];
        this.faces.r[i][j] = this.faces.r[n-j-1][i];
        this.faces.r[n-j-1][i] = this.faces.r[n-i-1][n-j-1];
        this.faces.r[n-i-1][n-j-1] = this.faces.r[j][n-i-1];
        this.faces.r[j][n-i-1] = tmp;
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        t[i][j] = this.faces.f[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.f[i][j] = this.faces.d[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.d[i][j] = this.faces.b[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.b[i][j] = this.faces.u[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.u[i][j] = t[i][j];
      }
    }
  }
  xPrime() {
    let n = this.faces.u.length;
    let x = Math.floor(n / 2);
    let y = n - 1;
    let t = [ [], [], [] ];

    for (let i = 0; i < n/2; i++) {
      for (let j = i; j < n-i-1; j++) {
        var tmp = this.faces.r[i][j];
        this.faces.r[i][j] = this.faces.r[j][n-i-1];
        this.faces.r[j][n-i-1] = this.faces.r[n-i-1][n-j-1];
        this.faces.r[n-i-1][n-j-1] = this.faces.r[n-j-1][i];
        this.faces.r[n-j-1][i] = tmp;
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        t[i][j] = this.faces.f[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.f[i][j] = this.faces.u[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.u[i][j] = this.faces.b[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.b[i][j] = this.faces.d[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.d[i][j] = t[i][j];
      }
    }
  }
  y() {
    let n = this.faces.u.length;
    let x = Math.floor(n / 2);
    let y = n - 1;
    let t = [ [], [], [] ];

    for (let i = 0; i<n/2; i++) {
      for (let j = i; j<n-i-1; j++) {
        var tmp = this.faces.u[i][j];
        this.faces.u[i][j] = this.faces.u[n-j-1][i];
        this.faces.u[n-j-1][i] = this.faces.u[n-i-1][n-j-1];
        this.faces.u[n-i-1][n-j-1] = this.faces.u[j][n-i-1];
        this.faces.u[j][n-i-1] = tmp;
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        t[i][j] = this.faces.f[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.f[i][j] = this.faces.r[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.r[i][j] = this.faces.b[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.b[i][j] = this.faces.l[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.l[i][j] = t[i][j];
      }
    }
    this.rotateCount++;
  }
  yPrime() {
    let n = this.faces.u.length;
    let x = Math.floor(n / 2);
    let y = n - 1;
    let t = [ [], [], [] ];

    for (let i = 0; i < n/2; i++) {
      for (let j = i; j < n-i-1; j++) {
        var tmp = this.faces.u[i][j];
        this.faces.u[i][j] = this.faces.u[j][n-i-1];
        this.faces.u[j][n-i-1] = this.faces.u[n-i-1][n-j-1];
        this.faces.u[n-i-1][n-j-1] = this.faces.u[n-j-1][i];
        this.faces.u[n-j-1][i] = tmp;
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        t[i][j] = this.faces.f[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.f[i][j] = this.faces.l[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.l[i][j] = this.faces.b[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.b[i][j] = this.faces.r[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        this.faces.r[i][j] = t[i][j];
      }
    }
    this.rotateCount--;
  }
}

let ollList = [];

ollList.push(
  new RubikCube(
    1, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ],
    },
    [ 
      `R U2 R2 F R F' U2 R' F R F'`, 
      `y2 R U2 R2 F R F' U2 R' F R F'`, 
    ],
    '1/108',
    `dot`
  ),
  new RubikCube(
    2, 
    {
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, g ] ],
      f: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ],
    },
    [ `F R U R' U' F' f R U R' U' f'` ],
    '1/54',
    `dot`
  ),
  new RubikCube(
    3, 
    {
      u: [ [ g, g, g ], [ g, y, g ], [ y, g, g ] ],
      f: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ 
      `r' R2 U R' U r U2 r' U M'`,
      `y' f R U R' U' f' U' F R U R' U' F'`, 
      `y2 M' U r' U2 r U R' U R2 r'`,
    ],
    '1/54',
    `dot`
  ),
  new RubikCube(
    4, 
    { 
      u: [ [ g, g, g ], [ g, y, g ], [ g, g, y ] ],
      f: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ],
    },
    [ `y' f R U R' U' f' U F R U R' U' F'` ],
    `1/54`,
    `dot`
  ),
  new RubikCube(
    5, 
    { 
      u: [ [ g, g, g ], [ g, y, y ], [ g, y, y ] ],
      f: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r' U2 R U R' U r` ],
    `1/54`,
    `squareShape`
  ),
  new RubikCube(
    6, 
    { 
      u: [ [ g, y, y ], [ g, y, y ], [ g, g, g ] ],
      f: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r U2 R' U' R U' r'` ],
    `1/54`,
    `squareShape`
  ),
  new RubikCube(
    7, 
    { 
      u: [ [ g, y, g ], [ y, y, g ], [ y, g, g ] ],
      f: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r U R' U R U2 r'` ],
    `1/54`,
    `thunderBoltShape`
  ),
  new RubikCube(
    8, 
    { 
      u: [ [ g, y, g ], [ g, y, y ], [ g, g, y ] ],
      f: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R U2 R' U2 R' F R F'` ],
    `1/54`,
    `thunderBoltShape`
  ),
  new RubikCube(
    9, 
    {
      u: [ [ g, g, y ], [ y, y, g ], [ g, y, g ] ],
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `y R U R' U' R' F R2 U R' U' F'` ],
    `1/54`,
    `fishShape`
  ),
  new RubikCube(
    10, 
    { 
      u: [ [ g, g, y ], [ y, y, g ], [ g, y, g ] ],
      b: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R U R' U R' F R F' R U2 R'` ],
    `1/54`,
    `fishShape`
  ),
  new RubikCube(
    11, 
    { 
      u: [ [ g, g, g ], [ g, y, y ], [ y, y, g ] ],
      b: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `M R U R' U R U2 R' U M'` ],
    `1/54`,
    `thunderBoltShape`
  ),
  new RubikCube(
    12, 
    { 
      u: [ [ g, g, y ], [ g, y, y ], [ g, y, g ] ],
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `F R U R' U' F' U F R U R' U' F'` ],
    `1/54`,
    `thunderBoltShape`
  ),
  new RubikCube(
    13, 
    { 
      u: [ [ g, g, g ], [ y, y, y ], [ y, g, g ] ],
      b: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ],
    },
    [ 
      `r U' r' U' r U r' F' U F`,
      `F UR U2 R' U' R U R' F'`
    ],
    `1/54`,
    `knightMoveShape`
  ),
  new RubikCube(
    14, 
    { 
      u: [ [ g, g, g ], [ y, y, y ], [ g, g, y ] ],
      b: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R' F R U R' F' R F U' F'` ],
    `1/54`,
    `knightMoveShape`
  ),
  new RubikCube(
    15, 
    { 
      u: [ [ g, g, g ], [ y, y, y ], [ g, g, y ] ],
      b: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r' U' r R' U' R U r' U r` ],
    `1/54`,
    `knightMoveShape`
  ),
  new RubikCube(
    16, 
    { 
      u: [ [ g, g, y ], [ y, y, y ], [ g, g, g ] ],
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r U r' R U R' U' r U' r'` ],
    `1/54`,
    `knightMoveShape`
  ),
  new RubikCube(
    17, 
    { 
      u: [ [ y, g, g ], [ g, y, g ], [ g, g, y ] ],
      b: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ],  
    },
    [ `R U R' U R' F R F' U2 R' F R F'` ],
    `1/54`,
    `dot`
  ),
  new RubikCube(
    18, 
    { 
      u: [ [ y, g, y ], [ g, y, g ], [ g, g, g ] ],
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r U R' U R U2 r' r' U' R U' R' U2 r` ],
    `1/54`,
    `dot`
  ),
  new RubikCube(
    19, 
    { 
      u: [ [ y, g, y ], [ g, y, g ], [ g, g, g ] ],
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `M U R U R' U' M' R' F R F'` ],
    `1/54`,
    `dot`
  ),
  new RubikCube(
    20, 
    { 
      u: [ [ y, g, y ], [ g, y, g ], [ y, g, y ] ],
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ 
      `M U R U R' U' M2 U R U' r'`, 
      `y M U R U R' U' M2 U R U' r'`, 
      `y2 M U R U R' U' M2 U R U' r'`, 
      `y' M U R U R' U' M2 U R U' r'`, 
    ],
    `1/216`,
    `dot`
  ),
  new RubikCube(
    21, 
    { 
      u: [ [ g, y, g ], [ y, y, y ], [ g, y, g ] ],
      b: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [
      `R U2 R' U' R U R' U' R U' R'`, 
      `F R U R' U' R U R' U' R U R' U' F'`, 
      `y2 R U2 R' U' R U R' U' R U' R'`, 
      `y2 F R U R' U' R U R' U' R U R' U' F'`, 
    ],
    `1/108`,
    `cross`
  ),
  new RubikCube(
    22, 
    { 
      u: [ [ g, y, g ], [ y, y, y ], [ g, y, g ] ],
      b: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [
      `R U2 R2 U' R2 U' R2 U2 R`,
      `f R U R' U' f' F R U R' U' F'`
    ],
    `1/54`,
    `cross`
  ),
  new RubikCube(
    23, 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ g, y, g ] ],
      b: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R2 D R' U2 R D' R' U2 R'` ],
    `1/54`,
    `cross`
  ),
  new RubikCube(
    24, 
    { 
      u: [ [ g, y, y ], [ y, y, y ], [ g, y, y ] ],
      b: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r U R' U' r' F R F'` ],
    `1/54`,
    `cross`
  ),
  new RubikCube(
    25, 
    { 
      u: [ [ y, y, g ], [ y, y, y ], [ g, y, y ] ],
      b: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ] 
    },
    [ `F R' F' r U R U' r'` ],
    `1/54`,
    `cross`
  ),
  new RubikCube(
    26, 
    { 
      u: [ [ y, y, g ], [ y, y, y ], [ g, y, g ] ],
      b: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ] 
    },
    [ `R' U' R U' R' U2 R` ],
    `1/54`,
    `cross`
  ),
  new RubikCube(
    27, 
    { 
      u: [ [ g, y, g ], [ y, y, y ], [ y, y, g ] ],
      b: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ] 
    },
    [ `R U R' U R U2 R'` ],
    `1/54`,
    `cross`
  ),
  new RubikCube(
    28, 
    { 
      u: [ [ y, y, y ], [ y, y, g ], [ y, g, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ] 
    },
    [ `r U R' U' M U R U' R'` ],
    `1/54`,
    `fourCorner`
  ),
  new RubikCube(
    29, 
    { 
      u: [ [ y, g, y ], [ y, y, g ], [ g, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ] 
    },
    [ `M U R U R' U' R' F R F' M'` ],
    `1/54`,
    `awkwardShape`
  ),
  new RubikCube(
    30, 
    { 
      u: [ [ y, g, y ], [ g, y, y ], [ g, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ] 
    },
    [ `y2 F U R U2 R' U' R U2 R' U' F'` ],
    `1/54`,
    `awkwardShape`
  ),
  new RubikCube(
    31, 
    { 
      u: [ [ g, y, y ], [ g, y, y ], [ g, g, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R' U' F U R U' R' F' R` ],
    `1/54`,
    `pShape`
  ),
  new RubikCube(
    32, 
    { 
      u: [ [ g, g, y ], [ g, y, y ], [ g, y, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `S R U R' U' R' F R f'` ],
    `1/54`,
    `pShape`
  ),
  new RubikCube(
    33, 
    { 
      u: [ [ g, g, y ], [ y, y, y ], [ g, g, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R U R' U' R' F R F'` ],
    `1/54`,
    `tShape`
  ),
  new RubikCube(
    34, 
    { 
      u: [ [ y, g, y ], [ y, y, y ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `y2 R U R' U' B' R' F R F' B` ],
    `1/54`,
    `cShape`
  ),
  new RubikCube(
    35, 
    { 
      u: [ [ y, g, g ], [ g, y, y ], [ g, y, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R U2 R2' F R F' R U2 R'` ],
    `1/54`,
    `fishShape`
  ),
  new RubikCube(
    36, 
    { 
      u: [ [ y, g, g ], [ y, y, g ], [ g, y, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `y2 L' U' L U' L' U L U L F' L' F` ],
    `1/54`,
    `wShape`
  ),
  new RubikCube(
    37, 
    { 
      u: [ [ y, y, g ], [ y, y, g ], [ g, g, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `F R' F' R U R U' R'` ],
    `1/54`,
    `fishShape`
  ),
  new RubikCube(
    38, 
    {
      u: [ [ g, y, y ], [ y, y, g ], [ y, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, y, g ], [ g, g, g ], [ y, g, g ] ],
      f: [ [ g, y, g ], [ g, g, g ], [ y, g, g ] ],
      l: [ [ g, g, g ], [ g, g, g ], [ y, g, g ] ],
    },
    [ `R U R' U R U' R' U' R' F R F'` ],
    `1/54`,
    `wShape`
  ),
  new RubikCube(
    39, 
    { 
      u: [ [ y, y, g ], [ g, y, g ], [ g, y, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `y' R U R' F' U' F U R U2 R'` ],
    `1/54`,
    `bigThunderBoltShape`
  ),
  new RubikCube(
    40, 
    {
      u: [ [ g, y, y ], [ g, y, g ], [ y, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `y R' F R U R' U' F' U R` ],
    `1/54`,
    `bigThunderBoltShape`
  ),
  new RubikCube(
    41, 
    { 
      u: [ [ y, g, y ], [ g, y, y ], [ g, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `y2 R U R' U R U2 R' F R U R' U' F'` ],
    `1/54`,
    `awkwardShape`
  ),
  new RubikCube(
    42, 
    { 
      u: [ [ y, g, y ], [ y, y, g ], [ g, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R' U' R U' R' U2 R F R U R' U' F'` ],
    `1/54`,
    `awkwardShape`
  ),
  new RubikCube(
    43, 
    {
      u: [ [ y, g, g ], [ y, y, g ], [ y, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ],  
      r: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `y2 F' U' L' U L F` ],
    `1/54`,
    `pShape`
  ),
  new RubikCube(
    44, 
    {
      u: [ [ g, g, y ], [ g, y, y ], [ g, y, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ],  
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `f R U R' U' f'` ],
    `1/54`,
    `pShape`
  ),
  new RubikCube(
    45, 
    { 
      u: [ [ g, g, y ], [ y, y, y ], [ g, g, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `F R U R' U' F'` ],
    `1/54`,
    `tShape`
  ),
  new RubikCube(
    46, 
    { 
      u: [ [ y, y, g ], [ g, y, g ], [ y, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ],  
      r: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R' U' R' F R F' U R` ],
    `1/54`,
    `cShape`
  ),
  new RubikCube(
    47, 
    { 
      u: [ [ g, y, g ], [ g, y, y ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `F' L' U' L U L' U' L U F` ],
    `1/54`,
    `lShape`
  ),
  new RubikCube(
    48, 
    { 
      u: [ [ g, y, g ], [ y, y, g ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `F R U R' U' R U R' U' F'` ],
    `1/54`,
    `lShape`
  ),
  new RubikCube(
    49, 
    { 
      u: [ [ g, g, g ], [ y, y, g ], [ g, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `y2 r U' r2 U r2 U r2 U' r` ],
    `1/54`,
    `lShape`
  ),
  new RubikCube(
    50, 
    { 
      u: [ [ g, g, g ], [ g, y, y ], [ g, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r' U r2 U' r2 U' r2 U r` ],
    `1/54`,
    `lShape`
  ),
  new RubikCube(
    51, 
    {
      u: [ [ g, g, g ], [ y, y, y ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ y, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, y ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `f R U R' U' R U R' U' f'` ],
    `1/54`,
    `iShape`
  ),
  new RubikCube(
    52, 
    {
      u: [ [ g, y, g ], [ g, y, g ], [ g, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, y ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ y, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `R U R' U R d' R U' R' F'` ],
    `1/54`,
    `iShape`
  ),
  new RubikCube(
    53, 
    { 
      u: [ [ g, g, g ], [ g, y, y ], [ g, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r' U' R U' R' U R U' R' U2 r` ],
    `1/54`,
    `lShape`
  ),
  new RubikCube(
    54, 
    {
      u: [ [ g, y, g ], [ g, y, y ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ],  
      r: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ `r U R' U R U' R' U R U2 r'` ],
    `1/54`,
    `lShape`
  ),
  new RubikCube(
    55, 
    {
      u: [ [ g, y, g ], [ g, y, g ], [ g, y, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, y, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ 
      `R U2 R2 U' R U' R' U2 F R F'`, 
      `y2 R U2 R2 U' R U' R' U2 F R F'`, 
    ],
    `1/108`,
    `iShape`
  ),
  new RubikCube(
    56, 
    {
      u: [ [ g, g, g ], [ y, y, y ], [ g, g, g ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ y, g, y ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ 
      `r U r' U R U' R' U R U' R' r U' r'`, 
      `y2 r U r' U R U' R' U R U' R' r U' r'`, 
    ],
    `1/108`,
    `iShape`
  ),
  new RubikCube(
    57, 
    {
      u: [ [ y, g, y ], [ y, y, y ], [ y, g, y ] ], 
      d: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      f: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ g, y, g ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
      l: [ [ g, g, g ], [ g, g, g ], [ g, g, g ] ], 
    },
    [ 
      `R U R' U' M' U R U' r'`, 
      `y2 R U R' U' M' U R U' r'`, 
    ],
    `1/108`,
    `fourCorner`
  ),
)

for (let i = 0; i < ollList.length; i++) {
  document.querySelector("table > tbody").innerHTML += `
    <tr>
      <td>OLL ${ollList[i].id}</td>
      <td>${drawSquare(ollList[i])}</td>
      <td>${drawCube(ollList[i])}</td>
      <td>
        <button onclick="rotateImage(this)">Rotate y</button>
      </td>
      <td>${createSelector(ollList[i], /[^y]/)}</td>
      <td>${ollList[i].probability}</td>
      <td>${ollList[i].type}</td>
    </tr>
  `;
}