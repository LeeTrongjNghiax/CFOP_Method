let g = "#202020";
let y = "yellow";
let r = "red";
let o = "orange";
let gr = "green";
let b = "blue";
let w = "white";

class RubikCube{
  constructor(id, faces, algorithms, probability, type) {
    this.id = id;
    this.faces = faces;
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