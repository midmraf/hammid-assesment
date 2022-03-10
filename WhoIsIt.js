function whoIsIt(arr1, arr2) {
    const result = []

    arr1.forEach(data => {
        if (arr2.indexOf(data) > 0) {
            result.push(data)
        }
    })

    return result
}

array1 = ["Anton", "Budi", "Kumala", "Joko", "Dodo"]
array2 = ["Kenzo", "Syakila", "Joko", "Anton"]

console.log(whoIsIt(array1, array2))