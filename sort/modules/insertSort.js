//Insert sort;

const sort = (arr) => {

    for (let i = 1; i < arr.length - 1; ++i) {
        let element =  arr[i];
        let j = i;
        while (j > 0 && arr[j - 1].length > element.length) {
            arr[j] = arr[j - 1];
            --j;
        }
        arr[j] = element;
    }

    return arr;
}

module.exports = sort;