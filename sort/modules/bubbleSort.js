//bubbleSort

const sort = arr => {

    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1; ++j) {
            if (arr[j].length > arr[j + 1].length) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

module.exports = sort;