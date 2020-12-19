var countBits = function(n) {
    // Program Me
    // when .toString is attached to a number it accepts a parameter which signifies the base the number should be turned into.
    // .split turns into an array.
    // base.reduce is used to add everything.
    const base = n.toString(2).split("");
    console.log(base)
    const result = base.reduce((sum, num) => console.log(sum), 4);
    return result;
  };
  countBits(4);