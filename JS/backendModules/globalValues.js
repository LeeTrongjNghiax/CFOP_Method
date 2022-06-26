let g = "#202020";
let y = "yellow";
let r = "red";
let o = "orange";
let gr = "green";
let b = "blue";
let w = "white";

// 0 = gray
// 1 = white
// 2 = yellow
// 3 = green
// 4 = blue
// 5 = red
// 6 = orange

class RubikCube{
  constructor(faces) {
    this.faces = faces;
    this.toggle2LayerColorsCount = 0;
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
            case 3 :
              this.faces[face][i][j] = 6;
              break;
            case 6 :
              this.faces[face][i][j] = 4;
              break;
            case 4 :
              this.faces[face][i][j] = 5;
              break;
            case 5 :
              this.faces[face][i][j] = 3;
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
              if (face == "f") this.faces[face][i][j] = 3;
              if (face == "r") this.faces[face][i][j] = 6;
              if (face == "b") this.faces[face][i][j] = 4;
              if (face == "l") this.faces[face][i][j] = 5;
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
                this.faces[face][i][j] = 0;
              }
            }
          }
        }
        this.toggle2LayerColorsCount++;
        break;
    }
  }
}

// class RubikCube{
//   constructor(id, faces, algorithms, corner, edge) {
//     this.id = id;
//     this.faces = faces;
//     this.algorithms = algorithms;
//     this.corner = corner;
//     this.edge = edge;
//     this.rotateCount = 0;
//     this.toggle2LayerColorsCount = 0;
//   }
//   x() {
//     let n = this.faces.r.length;
//     let x = Math.floor(n / 2);
//     let y = n - 1;
//     let t = [ [], [], [] ];

//     for (let i = 0; i<n/2; i++) {
//       for (let j = i; j<n-i-1; j++) {
//         var tmp = this.faces.r[i][j];
//         this.faces.r[i][j] = this.faces.r[n-j-1][i];
//         this.faces.r[n-j-1][i] = this.faces.r[n-i-1][n-j-1];
//         this.faces.r[n-i-1][n-j-1] = this.faces.r[j][n-i-1];
//         this.faces.r[j][n-i-1] = tmp;
//       }
//     }

//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         t[i][j] = this.faces.f[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.f[i][j] = this.faces.d[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.d[i][j] = this.faces.b[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.b[i][j] = this.faces.u[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.u[i][j] = t[i][j];
//       }
//     }
//   }
//   xPrime() {
//     let n = this.faces.u.length;
//     let x = Math.floor(n / 2);
//     let y = n - 1;
//     let t = [ [], [], [] ];

//     for (let i = 0; i < n/2; i++) {
//       for (let j = i; j < n-i-1; j++) {
//         var tmp = this.faces.r[i][j];
//         this.faces.r[i][j] = this.faces.r[j][n-i-1];
//         this.faces.r[j][n-i-1] = this.faces.r[n-i-1][n-j-1];
//         this.faces.r[n-i-1][n-j-1] = this.faces.r[n-j-1][i];
//         this.faces.r[n-j-1][i] = tmp;
//       }
//     }

//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         t[i][j] = this.faces.f[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.f[i][j] = this.faces.u[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.u[i][j] = this.faces.b[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.b[i][j] = this.faces.d[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.d[i][j] = t[i][j];
//       }
//     }
//   }
//   y() {
//     let n = this.faces.u.length;
//     let x = Math.floor(n / 2);
//     let y = n - 1;
//     let t = [ [], [], [] ];

//     for (let i = 0; i<n/2; i++) {
//       for (let j = i; j<n-i-1; j++) {
//         var tmp = this.faces.u[i][j];
//         this.faces.u[i][j] = this.faces.u[n-j-1][i];
//         this.faces.u[n-j-1][i] = this.faces.u[n-i-1][n-j-1];
//         this.faces.u[n-i-1][n-j-1] = this.faces.u[j][n-i-1];
//         this.faces.u[j][n-i-1] = tmp;
//       }
//     }

//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         t[i][j] = this.faces.f[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.f[i][j] = this.faces.r[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.r[i][j] = this.faces.b[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.b[i][j] = this.faces.l[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.l[i][j] = t[i][j];
//       }
//     }
//     this.rotateCount++;
//     if (this.rotateCount == 4) this.rotateCount = 0;
//   }
//   yPrime() {
//     let n = this.faces.u.length;
//     let x = Math.floor(n / 2);
//     let y = n - 1;
//     let t = [ [], [], [] ];

//     for (let i = 0; i < n/2; i++) {
//       for (let j = i; j < n-i-1; j++) {
//         var tmp = this.faces.u[i][j];
//         this.faces.u[i][j] = this.faces.u[j][n-i-1];
//         this.faces.u[j][n-i-1] = this.faces.u[n-i-1][n-j-1];
//         this.faces.u[n-i-1][n-j-1] = this.faces.u[n-j-1][i];
//         this.faces.u[n-j-1][i] = tmp;
//       }
//     }

//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         t[i][j] = this.faces.f[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.f[i][j] = this.faces.l[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.l[i][j] = this.faces.b[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.b[i][j] = this.faces.r[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         this.faces.r[i][j] = t[i][j];
//       }
//     }
//     this.rotateCount--;
//     if (this.rotateCount == 4) this.rotateCount = 0;
//   }
//   U() {
//     let n = this.faces.u.length;
//     let x = Math.floor(n / 2);
//     let y = n - 1;
//     let t = [ [], [], [] ];

//     for (let i = 0; i<n/2; i++) {
//       for (let j = i; j<n-i-1; j++) {
//         var tmp = this.faces.u[i][j];
//         this.faces.u[i][j] = this.faces.u[n-j-1][i];
//         this.faces.u[n-j-1][i] = this.faces.u[n-i-1][n-j-1];
//         this.faces.u[n-i-1][n-j-1] = this.faces.u[j][n-i-1];
//         this.faces.u[j][n-i-1] = tmp;
//       }
//     }

//     for (let i = 0; i < n; i++) {
//       t[0][i] = this.faces.f[0][i];
//     }

//     for (let i = 0; i < n; i++) {
//       this.faces.f[0][i] = this.faces.r[0][i];
//     }

//     for (let i = 0; i < n; i++) {
//       this.faces.r[0][i] = this.faces.b[0][i];
//     }

//     for (let i = 0; i < n; i++) {
//       this.faces.b[0][i] = this.faces.l[0][i];
//     }

//     for (let i = 0; i < n; i++) {
//       this.faces.l[0][i] = t[0][i];
//     }

//     this.rotateCount++;
//   }
//   rotateColorScheme() {
//     for (const face in this.faces) {
//       for (let i = 0; i < this.faces[face].length; i++) {
//         for (let j = 0; j < this.faces[face][i].length; j++) {
//           switch (this.faces[face][i][j]) {
//             case 3 :
//               this.faces[face][i][j] = 6;
//               break;
//             case 6 :
//               this.faces[face][i][j] = 4;
//               break;
//             case 4 :
//               this.faces[face][i][j] = 5;
//               break;
//             case 5 :
//               this.faces[face][i][j] = 3;
//               break;
//           }
//         }
//       }
//     }
//   }
//   toggle2LayerColors(mode) {
//     switch (mode) {
//       case "on":
//         for (const face in this.faces) {
//           for (let i = 1; i < this.faces[face].length; i++) {
//             for (let j = 0; j < this.faces[face][i].length; j++) {
//               if (face == "f") this.faces[face][i][j] = 3;
//               if (face == "r") this.faces[face][i][j] = 6;
//               if (face == "b") this.faces[face][i][j] = 4;
//               if (face == "l") this.faces[face][i][j] = 5;
//             }
//           }
//         }
//         this.toggle2LayerColorsCount++;
//         break;
//       case "off":
//         for (const face in this.faces) {
//           for (let i = 1; i < this.faces[face].length; i++) {
//             for (let j = 0; j < this.faces[face][i].length; j++) {
//               if (face != "u" && face != "d") {
//                 this.faces[face][i][j] = 0;
//               }
//             }
//           }
//         }
//         this.toggle2LayerColorsCount++;
//         break;
//     }
//   }
// }

class Algorithm{
  constructor(algorithm) {
    this.algorithm = algorithm;
  }

  getHTM() {
    let count = 0;
    let moveArray = this.algorithm.split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      if ( /^(U|D|F|B|R|L|U'|D'|F'|B'|R'|L')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(U2|D2|F2|B2|R2|L2|U2'|D2'|F2'|B2'|R2'|L2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u|d|f|b|r|l|u'|d'|f'|b'|r'|l')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u2|d2|f2|b2|r2|l2|u2'|d2'|f2'|b2'|r2'|l2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M|E|S|M'|E'|S')$/i.test(moveArray[i]) ) 
        count += 2;
      if ( /^(M2|E2|S2|M2'|E2'|S2')$/i.test(moveArray[i]) ) 
        count += 2;
      if ( /^(x|y|z|x'|y'|z')$/i.test(moveArray[i]) ) 
        count += 0;
      if ( /^(x2|y2|z2|x2'|y2'|z2')$/i.test(moveArray[i]) ) 
        count += 0;
    }

    return count;
  }

  getQTM() {
    let count = 0;
    let moveArray = this.algorithm.split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      if ( /^(U|D|F|B|R|L|U'|D'|F'|B'|R'|L')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(U2|D2|F2|B2|R2|L2|U2'|D2'|F2'|B2'|R2'|L2')$/.test(moveArray[i]) ) 
        count += 2;
      if ( /^(u|d|f|b|r|l|u'|d'|f'|b'|r'|l')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u2|d2|f2|b2|r2|l2|u2'|d2'|f2'|b2'|r2'|l2')$/.test(moveArray[i]) ) 
        count += 2;
      if ( /^(M|E|S|M'|E'|S')$/i.test(moveArray[i]) ) 
        count += 2;
      if ( /^(M2|E2|S2|M2'|E2'|S2')$/i.test(moveArray[i]) ) 
        count += 4;
      if ( /^(x|y|z|x'|y'|z')$/i.test(moveArray[i]) ) 
        count += 0;
      if ( /^(x2|y2|z2|x2'|y2'|z2')$/i.test(moveArray[i]) ) 
        count += 0;
    }

    return count;
  }

  getSTM() {
    let count = 0;
    let moveArray = this.algorithm.split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      if ( /^(U|D|F|B|R|L|U'|D'|F'|B'|R'|L')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(U2|D2|F2|B2|R2|L2|U2'|D2'|F2'|B2'|R2'|L2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u|d|f|b|r|l|u'|d'|f'|b'|r'|l')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u2|d2|f2|b2|r2|l2|u2'|d2'|f2'|b2'|r2'|l2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M|E|S|M'|E'|S')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M2|E2|S2|M2'|E2'|S2')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(x|y|z|x'|y'|z')$/i.test(moveArray[i]) ) 
        count += 0;
      if ( /^(x2|y2|z2|x2'|y2'|z2')$/i.test(moveArray[i]) ) 
        count += 0;
    }

    return count;
  }

  getQSTM() {
    let count = 0;
    let moveArray = this.algorithm.split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      if ( /^(U|D|F|B|R|L|U'|D'|F'|B'|R'|L')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(U2|D2|F2|B2|R2|L2|U2'|D2'|F2'|B2'|R2'|L2')$/.test(moveArray[i]) ) 
        count += 2;
      if ( /^(u|d|f|b|r|l|u'|d'|f'|b'|r'|l')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u2|d2|f2|b2|r2|l2|u2'|d2'|f2'|b2'|r2'|l2')$/.test(moveArray[i]) ) 
        count += 2;
      if ( /^(M|E|S|M'|E'|S')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M2|E2|S2|M2'|E2'|S2')$/i.test(moveArray[i]) ) 
        count += 2;
      if ( /^(x|y|z|x'|y'|z')$/i.test(moveArray[i]) ) 
        count += 0;
      if ( /^(x2|y2|z2|x2'|y2'|z2')$/i.test(moveArray[i]) ) 
        count += 0;
    }

    return count;
  }

  getETM() {
    let count = 0;
    let moveArray = this.algorithm.split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      if ( /^(U|D|F|B|R|L|U'|D'|F'|B'|R'|L')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(U2|D2|F2|B2|R2|L2|U2'|D2'|F2'|B2'|R2'|L2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u|d|f|b|r|l|u'|d'|f'|b'|r'|l')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u2|d2|f2|b2|r2|l2|u2'|d2'|f2'|b2'|r2'|l2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M|E|S|M'|E'|S')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M2|E2|S2|M2'|E2'|S2')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(x|y|z|x'|y'|z')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(x2|y2|z2|x2'|y2'|z2')$/i.test(moveArray[i]) ) 
        count += 1;
    }
    
    return count;
  }

  getATM() {
    let count = 0;
    let moveArray = this.algorithm.split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      if ( /^(U|D|F|B|R|L|U'|D'|F'|B'|R'|L')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(U2|D2|F2|B2|R2|L2|U2'|D2'|F2'|B2'|R2'|L2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u|d|f|b|r|l|u'|d'|f'|b'|r'|l')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u2|d2|f2|b2|r2|l2|u2'|d2'|f2'|b2'|r2'|l2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M|E|S|M'|E'|S')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M2|E2|S2|M2'|E2'|S2')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(x|y|z|x'|y'|z')$/i.test(moveArray[i]) ) 
        count += 0;
      if ( /^(x2|y2|z2|x2'|y2'|z2')$/i.test(moveArray[i]) ) 
        count += 0;
    }

    return count;
  }

  getPTM() {
    let count = 0;
    let moveArray = this.algorithm.split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      if ( /^(U|D|F|B|R|L|U'|D'|F'|B'|R'|L')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(U2|D2|F2|B2|R2|L2|U2'|D2'|F2'|B2'|R2'|L2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u|d|f|b|r|l|u'|d'|f'|b'|r'|l')$/.test(moveArray[i]) ) 
        count += 0;
      if ( /^(u2|d2|f2|b2|r2|l2|u2'|d2'|f2'|b2'|r2'|l2')$/.test(moveArray[i]) ) 
        count += 0;
      if ( /^(M|E|S|M'|E'|S')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M2|E2|S2|M2'|E2'|S2')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(x|y|z|x'|y'|z')$/i.test(moveArray[i]) ) 
        count += 0;
      if ( /^(x2|y2|z2|x2'|y2'|z2')$/i.test(moveArray[i]) ) 
        count += 0;
    }

    return count;
  }

  getOBTM() {
    let count = 0;
    let moveArray = this.algorithm.split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      if ( /^(U|D|F|B|R|L|U'|D'|F'|B'|R'|L')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(U2|D2|F2|B2|R2|L2|U2'|D2'|F2'|B2'|R2'|L2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u|d|f|b|r|l|u'|d'|f'|b'|r'|l')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u2|d2|f2|b2|r2|l2|u2'|d2'|f2'|b2'|r2'|l2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M|E|S|M'|E'|S')$/i.test(moveArray[i]) ) 
        count += 2;
      if ( /^(M2|E2|S2|M2'|E2'|S2')$/i.test(moveArray[i]) ) 
        count += 2;
      if ( /^(x|y|z|x'|y'|z')$/i.test(moveArray[i]) ) 
        count += 0;
      if ( /^(x2|y2|z2|x2'|y2'|z2')$/i.test(moveArray[i]) ) 
        count += 0;
    }

    return count;
  }

  getBTM() {
    let count = 0;
    let moveArray = this.algorithm.split(" ");

    for (let i = 0; i < moveArray.length; i++) {
      if ( /^(U|D|F|B|R|L|U'|D'|F'|B'|R'|L')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(U2|D2|F2|B2|R2|L2|U2'|D2'|F2'|B2'|R2'|L2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u|d|f|b|r|l|u'|d'|f'|b'|r'|l')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(u2|d2|f2|b2|r2|l2|u2'|d2'|f2'|b2'|r2'|l2')$/.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M|E|S|M'|E'|S')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(M2|E2|S2|M2'|E2'|S2')$/i.test(moveArray[i]) ) 
        count += 1;
      if ( /^(x|y|z|x'|y'|z')$/i.test(moveArray[i]) ) 
        count += 0;
      if ( /^(x2|y2|z2|x2'|y2'|z2')$/i.test(moveArray[i]) ) 
        count += 0;
    }

    return count;
  }
}

class F2L{
  constructor(id, rubikCube, algorithms, type, probability) {
    this.id = id;
    this.rubikCube = rubikCube;
    this.algorithms = algorithms;
  }
}

class Oll{
  constructor(id, rubikCube, algorithms, type, probability) {
    this.id = id;
    this.rubikCube = rubikCube;
    this.algorithms = algorithms;
    this.type = type;
    this.probability = probability;
  }
}

class PLL{
  constructor(id, rubikCube, algorithms, type, probability) {
    this.id = id;
    this.rubikCube = rubikCube;
    this.algorithms = algorithms;
    this.type = type;
    this.probability = probability;
  }
}