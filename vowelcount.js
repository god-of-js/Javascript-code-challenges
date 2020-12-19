function getCountMine(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // enter your majic here
    let counter = 0;
    str.split("").forEach(element => {
        if (vowels.lastIndexOf(element) >= 0) counter++;
    });
    return counter;
}
//   Better implementation
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

console.log(getCount("abracadabra"))
console.log(getCount("get out of here ass houle"))