
exports.min = function min (array) {

    let minItem = undefined
    if (Array.isArray(array) && array) {
        for (let item of array) {
            if (minItem === undefined) {
                minItem = item
            } else if (item < minItem) {
                minItem = item
            }
        }
    }
    if (minItem === undefined) {
        return 0;
    }

    return minItem;
}

exports.max = function max (array) {

    let maxItem = undefined
    if (Array.isArray(array) && array) {
        for (let item of array) {
            if (maxItem === undefined) {
                maxItem = item
            } else if (item > maxItem) {
                maxItem = item
            }
        }
    }
    if (maxItem === undefined) {
        return 0;
    }

    return maxItem;
}

exports.avg = function avg (array) {

    let sum = 0;
    if (Array.isArray(array) && array) {
        for (let item of array) {
            sum += item
        }
        if (array.length) {
            return sum / array.length
        }
    }
    return 0;

}
