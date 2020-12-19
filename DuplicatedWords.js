
function duplicateEncode(word) {
    return word.toLowerCase().split('').map((a, i, w) => {
        return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")"
    }).join('');
}

console.log(duplicateEncode("escapede"))