function likes(names) {
    let text = "no one likes this";
    if (names.length === 1) text = " likes this";
    else if (names.length > 1) text = " like this";
    let index = 0;
    let multiName = "";
    names.length <= 3?
    names.reverse().forEach(name => {
        index++;
        let trailingText = "";
            if (index === 2) trailingText = " and ";
            else if (index === 3) trailingText = ", ";
            text = name + trailingText + text;
    }) :
    names.forEach(name => {
        index++;
        let trailingText = "";
            multiName += index <= 2 ? name + (index <= 1 ? ", " : " and") : "";
            text = `${ multiName } ${ index - 2 } others like this`;
    })
    return text;
}
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));