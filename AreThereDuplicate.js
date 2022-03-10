function areThereDuplicate() {
    const toCompare = []
    let duplicate = false

    for (let index = 0; index < arguments.length; index++) {
        toCompare.push(arguments[index])
    }

    return toCompare.filter((data, index) => toCompare.indexOf(data) != index).length > 0

}

console.log(areThereDuplicate(1, 2, 3, 4, 5))