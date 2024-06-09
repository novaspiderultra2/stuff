(function (Scratch) {
  'use strict';
  
    const makeLabel = (text) => ({
    blockType: 'label',
    text: text
  });

  class MathUtils {
    getInfo() {
      return {
        id: 'mathutils',
        name: 'Math Utilities',
        color1: '#e4db8c',
        blocks: [
          {
            opcode: 'mathxy',
            blockType: Scratch.BlockType.REPORTER,
            text: 'evaluate [expr] with x [x] and y [y]',
            isEdgeActivated: false,
            arguments: {
              expr: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'x + (y - 10)'
              },
              x: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 77
              },
			  y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 33
              }
            }
          },
          {
            opcode: 'power',
            blockType: Scratch.BlockType.REPORTER,
            text: '[a] ^ [b]',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              },
			  b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 5
              }
            }
          },
          {
            opcode: 'interpolate',
            blockType: Scratch.BlockType.REPORTER,
            text: 'interpolate [a] to [b] by [c]',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
			  b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              },
			  c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0.5
              }
            }
          },
          {
            opcode: 'precent',
            blockType: Scratch.BlockType.REPORTER,
            text: '[a]% of [b]',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
              },
			  b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'precentchance',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[a]% chance',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
              }
            }
          },
          {
            opcode: 'clamp',
            blockType: Scratch.BlockType.REPORTER,
            text: 'clamp [a] with [b] low [c] high',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 50
              },
			  b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
			  c: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            }
          },
          {
            opcode: 'truncate',
            blockType: Scratch.BlockType.REPORTER,
            text: 'truncate [a] to [b] numbers',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3.141592653589793
              },
			  b: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              }
            }
          },
          makeLabel('JSON Arrays'),
          {
            opcode: 'sortarray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'sort array [a]',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[9,5,2,7,14,27,-4]'
              }
            }
          },
          {
            opcode: 'sortarrayabc',
            blockType: Scratch.BlockType.REPORTER,
            text: 'sort array [a] alphabetically',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["ba","bg","c","aa","az"]'
              }
            }
          },
          {
            opcode: 'sumarray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'sum of array [a]',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[5,4,1]'
              }
            }
          },
          {
            opcode: 'averagearray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'average of array [a]',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[8,4,9,2]'
              }
            }
          },
          {
            opcode: 'medianarray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'median of array [a]',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[9,4,2,6,5,9,2,1]'
              }
            }
          },
          {
            opcode: 'modearray',
            blockType: Scratch.BlockType.REPORTER,
            text: 'mode of array [a]',
            isEdgeActivated: false,
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[10,5,7,8,5,10,9,7,4,7]'
              }
            }
          },
          {
            opcode: 'mmarray',
            blockType: Scratch.BlockType.REPORTER,
            text: '[m] of array [a]',
            isEdgeActivated: false,
            arguments: {
              m: {
                type: Scratch.ArgumentType.STRING,
                menu: 'minmax_menu'
              },
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[9,3,6,1]'
              }
            }
          },
          makeLabel('Booleans'),
          {
            opcode: 'cast',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'number to boolean [n]',
            isEdgeActivated: false,
            arguments: {
              n: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              }
            }
          },
          {
            opcode: 'castbool',
            blockType: Scratch.BlockType.REPORTER,
            text: 'boolean to number [n]',
            isEdgeActivated: false,
            arguments: {
              n: {
                type: Scratch.ArgumentType.BOOLEAN,
              }
            }
          },
          {
            opcode: 'notnot',
            blockType: Scratch.BlockType.REPORTER,
            text: 'not [n]',
            isEdgeActivated: false,
            arguments: {
              n: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              }
            }
          },
          makeLabel('Fractions'),
          {
            opcode: 'simplify',
            blockType: Scratch.BlockType.REPORTER,
            text: 'simplify ratio [aa]:[bb]',
            isEdgeActivated: false,
            arguments: {
              aa: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              },
              bb: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '6'
              }
            }
          },
          makeLabel('Graphing and Positions'),
          {
            opcode: 'distancepoints',
            blockType: Scratch.BlockType.REPORTER,
            text: 'distance from ([x1],[y1]),([x2],[y2])',
            isEdgeActivated: false,
            arguments: {
              x1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              y1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
			  },
              x2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              },
              y2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 10
              }
            }
          }
        ],
        menus: {
          minmax_menu: {
            acceptReporters: true,
            items: ["minimum","maximum","range"]
          }
        }
      };
    }


  mathxy ({expr, x, y}) {
	  return eval(expr)
    }

  power ({a, b}) {
	  return a ** b
    }
	
  interpolate ({a, b, c}) {
	function getTween(bb, e, i) {
		return bb + ((i/1) * (e-bb));
	}
	  return getTween(a,b,c)
    }

  precent ({a, b}) {
	  return a * (b / 100)
    }

  precentchance ({a}) {
	  if ((Math.random() * 100) < a) {
		  return true
	  } else {
		  return false
	  }
    }

  clamp ({a,b,c}) {
	  return Math.min(Math.max(a, b), c);
    }

  truncate ({a,b}) {
	  return a.toFixed(b);
    }

  sortarray ({a}) {
	  let array = JSON.parse(a);
	  let out = array.sort((a, b) => a - b)
	  return JSON.stringify(String(out).split(","));
    }

  sortarrayabc ({a}) {
	  let array = JSON.parse(a);
	  let out = array.sort()
	  return JSON.stringify(String(out).split(","));
    }
	
  sumarray ({a}) {
	  var sum, array, i;
	  sum = 0;
	  array = JSON.parse(a);
	  var i_end = array.length;
	  var i_inc = 1;
	  if (1 > i_end) {
	    i_inc = -i_inc;
	  }
	  for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
	    sum = (typeof sum === 'number' ? sum : 0) + array[(i - 1)];
	  }
	 return sum
    }

  averagearray ({a}) {
	  var sum, array, i;
	  sum = 0;
	  array = JSON.parse(a);
	  var i_end = array.length;
	  var i_inc = 1;
	  if (1 > i_end) {
	    i_inc = -i_inc;
	  }
	  for (i = 1; i_inc >= 0 ? i <= i_end : i >= i_end; i += i_inc) {
	    sum = (typeof sum === 'number' ? sum : 0) + array[(i - 1)];
	  }
	 sum = sum / array.length;
	 return sum
    }
	
  medianarray ({a}) {
	  let array = JSON.parse(a);
      const sorted = array.sort((a, b) => a - b);
      const middle = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
      } else {
        return sorted[middle];
      }
    }
	
  modearray ({a}) {
     let array = JSON.parse(a);
	 const numbers = array
      const counts = new Map();
      let maxCount = 0;
      let mode = null;
      for (const number of numbers) {
        let count = counts.get(number) || 0;
        count++;
        counts.set(number, count);
        if (count > maxCount) {
          maxCount = count;
          mode = number;
        }
      }
      return mode;
    }
	
  mmarray ({m, a}) {
	  let array = JSON.parse(a);
	  if (m == "maximum") {
		  return Math.max(...array)
	  } else if (m == "minimum") {
		  return Math.min(...array)
	  } else if (m == "range") {
		  return Math.max(...array) - Math.min(...array)
	  }
    }

  cast ({n}) {
	  if (n == 1) {
		  return true
	  } else {
		  return false
	  }
    }

  castbool ({n}) {
	  if (n) {
		  return 1
	  } else {
		  return 0
	  }
    }
	
  notnot ({n}) {
	  if (n) {
		  return 0
	  } else {
		  return 1
	  }
    }

  simplify ({aa,bb}) {
	function reduce(numerator,denominator){
	var gcd = function gcd(a,b){
		return b ? gcd(b, a%b) : a;
	};
	gcd = gcd(numerator,denominator);
	return [numerator/gcd, denominator/gcd];
	}
	return JSON.stringify(String(reduce(aa,bb)).split(","));
  }

  distancepoints ({x1,y1,x2,y2}) {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
}

  Scratch.extensions.register(new MathUtils());
})(Scratch);