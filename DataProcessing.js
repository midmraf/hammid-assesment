function dataProcessing(datas) {
    let graduated = 0
    let ungraduated = 0
    let average_score = 0
    let status = ''

    datas.forEach(data => {
        average_score += data
        if (data >= 60) {
            graduated++
        } else {
            ungraduated++
        }
    })

    if (graduated / datas.length * 100 >= 70) {
        status = 'Good Performance'
    } else {
        status = 'Under Performance'
    }

    average_score = average_score / datas.length

    return result = {
        status,
        reports: {
            average_score,
            graduated,
            ungraduated
        }
    }
}

data = [60, 60, 60, 50]

console.log(dataProcessing(data))