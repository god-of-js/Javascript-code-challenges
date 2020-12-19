function solution(A) {
    for(let i = 1; i < A.length + 2; i++) {
        if(A.indexOf(i) < 0) return i;
    }
}
console.log(solution([1,3,4,5]))
console.log(solution([1, 2, 3,4,5]))
console.log(solution([1, 2, 3,4,5, 23,12,34,12,24,1,3,1,14,24,]))
console.log(solution([1,5]))