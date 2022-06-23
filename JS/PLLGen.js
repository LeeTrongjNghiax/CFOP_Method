class RubikCube{
  constructor(id, faces, algorithms, probability, type) {
    this.id = id;
    this.faces = faces;
    this.algorithms = algorithms;
    this.probability = probability;
    this.type = type;
    this.rotateCount = 0;
    this.toggle2LayerColorsCount = 0;
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
  U() {
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
      t[0][i] = this.faces.f[0][i];
    }

    for (let i = 0; i < n; i++) {
      this.faces.f[0][i] = this.faces.r[0][i];
    }

    for (let i = 0; i < n; i++) {
      this.faces.r[0][i] = this.faces.b[0][i];
    }

    for (let i = 0; i < n; i++) {
      this.faces.b[0][i] = this.faces.l[0][i];
    }

    for (let i = 0; i < n; i++) {
      this.faces.l[0][i] = t[0][i];
    }

    this.rotateCount++;
  }
  rotateColorScheme() {
    for (const face in this.faces) {
      for (let i = 0; i < this.faces[face].length; i++) {
        for (let j = 0; j < this.faces[face][i].length; j++) {
          switch (this.faces[face][i][j]) {
            case gr :
              this.faces[face][i][j] = o;
              break;
            case o :
              this.faces[face][i][j] = b;
              break;
            case b :
              this.faces[face][i][j] = r;
              break;
            case r :
              this.faces[face][i][j] = gr;
              break;
          }
        }
      }
    }
  }
  toggle2LayerColors(mode) {
    switch (mode) {
      case "on":
        for (const face in this.faces) {
          for (let i = 1; i < this.faces[face].length; i++) {
            for (let j = 0; j < this.faces[face][i].length; j++) {
              if (face == "f") this.faces[face][i][j] = gr;
              if (face == "r") this.faces[face][i][j] = o;
              if (face == "b") this.faces[face][i][j] = b;
              if (face == "l") this.faces[face][i][j] = r;
            }
          }
        }
        this.toggle2LayerColorsCount++;
        break;
      case "off":
        for (const face in this.faces) {
          for (let i = 1; i < this.faces[face].length; i++) {
            for (let j = 0; j < this.faces[face][i].length; j++) {
              if (face != "u" && face != "d") {
                this.faces[face][i][j] = g;
              }
            }
          }
        }
        this.toggle2LayerColorsCount++;
        break;
    }
  }
}

let pllList = [];

pllList.push(
  new RubikCube(
    "Aa", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, b, gr ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ o, r, b ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ r, gr, r ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ gr, o, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `x R' U R' D2 R U' R' D2 R2`,
      `l' U R' D2 R U' R' D2 R2`,
      `y R' D' R U' R' D R U2 R' D' R U' R' D R`,
      `y2 R' D' R U' R' D R U' R D' R U2 R' D R`,
      `y' R U R' F' r U R' U' r' F R2 U' R'`,
    ],
    '/',
  ),
  new RubikCube(
    "Ab", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, b, r ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ gr, r, gr ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ o, gr, b ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ r, o, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `x R2 D2 R U R' D2 R U' R x'`,
      `l' R' D2 R U R' D2 R U' R x'`,
      `R' D' R U R' D R U R' D' R U2 R' D R`,
      `y2 R' D' R U2 R' D R U R' D' R U R' D R`,
    ],
    '/',
  ),
  new RubikCube(
    "E", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ r, b, o ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ b, r, gr ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ o, gr, r ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ gr, o, b ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `y x' R U' R' D R U R' D' R U R' D R U' R' D' x`,
      `y' x' R U' R' D R U R' D' R U R' D R U' R' D' x`,
      `y R' U' R' D' R U' R' D R U R' D' R U R' D R2`,
      `y' R' U' R' D' R U' R' D R U R' D' R U R' D R2`,
      `R2 U R2 U D R2 U' R2 U R2 U' D' R2 U R2 U2 R2`,
      `y2 R2 U R2 U D R2 U' R2 U R2 U' D' R2 U R2 U2 R2`,
    ],
    '/',
  ),
  new RubikCube(
    "F", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ o, o, o ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ b, gr, r ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ gr, r, b ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ r, b, gr ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `y R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R`,
      `y2 R' U2 R' d' R' F' R2 U' R' U R' F R U' F`,
      `y' L U F L' U' L U L F' L2 U L U L' U' L U' L'`,
      `R' U R U' R2 F' U' F U R F R' F' R2`,
    ],
    '/',
  ),
  new RubikCube(
    "Ga", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, r, r ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ gr, o, b ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ r, b, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, gr, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `R2 u R' U R' U' R u' R2 y' R' U R`,
      `R2 U R' U R' U' R U' R2 D U' R' U R D'`,
      `y R U R' F' R U R' U' R' F R U' R' F R2 U' R' U' R U R' F'`,
      `y2 R U' R U R2 D R' U' R D' R' U2 R U' R' U' R2`,
      `y' R U2 R' U' F' R U R2 U' R' F R U R2 U2 R'`
    ],
    '/',
  ),
  new RubikCube(
    "Gb", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, gr, r ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ gr, b, b ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ r, o, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, r, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `R' U' R U D' R2 U R' U R U' R U' R2 D`,
      `y R U R' F' r U R' U' r' F R F' R U R' U' R' F R2 U' R'`,
      `y2 R' U2 R U' F R U R' U' R' F' U' R U R U' R'`,
    ],
    '/',
  ),
  new RubikCube(
    "Gc", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, gr, r ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ gr, o, b ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ r, r, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, b, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `R2 U' R U' R U R' U R2 D' U R U' R' D`,
      `y2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2`,
      `y' u R2 U' R U' R U R' U R2 D' U R U' R' D`
    ],
    '/',
  ),
  new RubikCube(
    "Gd", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, o, r ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ gr, gr, b ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ r, b, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, r, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `R U R' U' D R2 U' R U' R' U R' U R2 D'`,
      `D' R U R' U' D R2 U' R U' R' U R' U R2`,
      `y R2 F' R U R U' R' F' R U2 R' U2 R' F2 R2`,
    ],
    '/',
  ),
  new RubikCube(
    "H", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, gr, b ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ r, o, r ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ gr, b, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, r, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
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
      ``
    ],
    '/',
  ),
  new RubikCube(
    "Ja", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ o, o, b ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ r, r, r ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ gr, gr, o ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ b, b, gr ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `L' U' L F L' U' L U L F' L2 U L`,
      `y R' U L' U2 R U' R' U2 R L`,
      `y2 F U' R' F R2 U' R' U' R U R' F' R U R' F'`,
    ],
    '/',
  ),
  new RubikCube(
    "Jb", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, r, r ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ gr, b, b ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ r, gr, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, o, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `R U R' F' R U R' U' R' F R2 U' R'`,
      `R U2 R' U' R U2 L' U R' U' L`,
      `R L U2 R' U' R U2 L' U R'`,
      `y' L U' R U2 L' U L U2 R' L'`,
      `y R U' L U2 R' U R U2 L' R'`,
    ],
    '/',
  ),
  new RubikCube(
    "Na", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ r, o, o ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ b, gr, gr ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ o, r, r ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ gr, b, b ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
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
      ``,
    ],
    '/',
  ),
  new RubikCube(
    "Nb", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ r, r, o ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ b, b, gr ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ o, o, r ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ gr, gr, b ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
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
    '/',
  ),
  new RubikCube(
    "Ra", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ r, b, r ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ gr, gr, o ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ b, o, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, r, b ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `y R U' R' U' R U R D R' U' R D' R' U2 R'`,
      `y R U R' F' R U2 R' U2 R' F R U R U2 R'`,
      `y2 R U2 R D R' U R D' R' U' R' U R U R'`,
    ],
    '/',
  ),
  new RubikCube(
    "Rb", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ o, b, o ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ b, o, r ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ gr, r, b ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ r, gr, gr ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `y R2 F R U R U' R' F' R U2 R' U2 R`,
      `R' U2 R U2 R' F R U R' U' R' F' R2`,
      `R' U2 R' D' R U' R' D R U R U' R' U' R`
    ],
    '/',
  ),
  new RubikCube(
    "T", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, b, r ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ gr, o, b ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ r, gr, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, r, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `R U R' U' R' F R2 U' R' U' R U R' F'`,
      `R2 U R2 U' R2 U' D R2 U' R2 U R2 D'`
    ],
    '/',
  ),
  new RubikCube(
    "Ua", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, b, b ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ r, gr, r ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ gr, o, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, r, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `M2 U M' U2 M U M2`,
      `R2 U' R' U' R U R U R U' R`,
      `y M2 u' M' u2 M' u' M2`,
      `y2 M2 U M U2 M' U M2`,
      `y2 R U' R U R U R U' R' U' R2`,
      `y' M2 u' M u2 M u' M2`,
    ],
    '/',
  ),
  new RubikCube(
    "Ub", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, b, b ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ r, o, r ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ gr, r, gr ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ o, gr, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
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
    '/',
  ),
  new RubikCube(
    "V", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ o, o, r ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ gr, r, b ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ r, b, o ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ b, gr, gr ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `R' U R' U' y R' F' R2 U' R' U R' F R F`,
      `R' U R' U' R D' R' D R' U D' R2 U' R2 D R2`,
      `R U2 R' D R U' R U' R U R2 D R' U' R D2`,
      `R2 D' R2 U R2 U' D R D' R D R' U R U' R`,
      `y2 R U' R U R' D R D' R U' D R2 U R2 D' R2`
    ],
    '/',
  ),
  new RubikCube(
    "Y", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ b, b, gr ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ o, r, r ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ gr, o, b ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ r, gr, o ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `F R U' R' U' R U R' F' R U R' U' R' F R F'`,
    ],
    '/',
  ),
  new RubikCube(
    "Z", 
    { 
      u: [ [ y, y, y ], [ y, y, y ], [ y, y, y ] ],
      f: [ [ gr, o, gr ], [ g, g, g ], [ g, g, g ] ], 
      r: [ [ o, gr, o ], [ g, g, g ], [ g, g, g ] ], 
      b: [ [ b, r, b ], [ g, g, g ], [ g, g, g ] ],
      l: [ [ r, b, r ], [ g, g, g ], [ g, g, g ] ],
      d: [ [ w, w, w ], [ w, w, w ], [ w, w, w ] ],
    },
    [ 
      `M' U' M2 U' M2 U' M' U2 M2`,
      `y2 M' U' M2 U' M2 U' M' U2 M2`,
      `M2 U M2 U M' U2 M2 U2 M'`,
      `y2 M2 U M2 U M' U2 M2 U2 M'`,
      `y M' U M2 U M2 U M' U2 M2`,
      `y' M' U M2 U M2 U M' U2 M2`,
      `y M2 U' M2 U' M' U2 M2 U2 M'`,
      `y' M2 U' M2 U' M' U2 M2 U2 M'`,
    ],
    '/',
  ),
)

for (let i = 0; i < pllList.length; i++) {
  document.querySelector("table > tbody").innerHTML += `
    <tr>
      <td>${pllList[i].id}</td>
      <td>${drawSquare(pllList[i])}</td>
      <td>${drawCube(pllList[i])}</td>
      <td>
        <button onclick="turnU(this)">Turn U</button>
        <br>
        <button onclick="rotateImage(this)">Rotate y</button>
        <br>
        <button onclick="rotateColorScheme(this)">Rotate Color Scheme</button>
        <br>
        <button onclick="turnColor(this)">Turn on/off 2 Layers Color</button>
      </td>
      <td>${createSelector(pllList[i], /[^y]/)}</td>
      <td>${pllList[i].probability}</td>
    </tr>
  `;
}