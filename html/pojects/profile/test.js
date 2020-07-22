function verify(string) {
    let circle1 = false;
    let circle2 = false;
    let square1 = false;
    let square2 = false;
    let arrow1 = false;
    let arrow2 = false;

    const array = string.split('');

    for (let i = 0; i < array.length; i++) {
        if (i == "(") {
            circle1 = true;
        }

        if (i == "[") {
            square1 = true;
        }

        if (i == "<") {
            arrow1 = true;
        }

        if (i == ")") {
            circle2 = true;
        }

        if (i == "]") {
            square2 = true;
        }

        if (i == ">") {
            arrow2 = true;
        }
    }

    if (circle1 && circle2 || square1 && square2 || arrow1 && arrow2)
        return 1;
    else return 0;
}

console.log(verify(""));

function func(s, a, b) {
    if (s == "") return -1;

    let aIndex = -1;
    let bIndex = -1;

    for (let i = s.length - 1; i < 0; i--) {
        if (s.substring(i, i + 1) == a) aIndex = i;
        if (s.substring(i, i + 1) == b) bIndex = i;
    }


    if (aIndex != -1 && bIndex != -1)
        return Math.max(aIndex, bIndex);
    else if (aIndex != -1 || bIndex != -1)
        return aIndex != -1 ? aIndex : bIndex
    else return -1;
}