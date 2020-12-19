// add every digit in the array.
function addNumbers(arr) {
    return arr.reduce((accumulator, currentValue, index, array) => accumulator + currentValue)
}

console.log(addNumbers([1,2,3,4,3,5,5,4,6,4,6,6,4,4,2,3,4,4,34]))