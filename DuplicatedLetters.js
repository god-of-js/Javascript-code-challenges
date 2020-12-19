
function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
  let x = "";
  x +=  S.split("").map((s, i, arr ) => {
        if(arr.indexOf(s) === arr.lastIndexOf(s)) return `${arr.indexOf(s)}${s}`
    })
    return x;
}