//Select Sort

const sort = (arr) => {

    for (let i = 0; i < arr.length - 1; ++i) {
        let min = i;

        for (let j = i + 1; j < arr.length - 1; ++j) {
            if (arr[j].length < arr[min].length) {
                min  = j;
            }
        }
        if (min !== i) {
            let m = arr[min];
            arr[min] = arr[i];
            arr[i] = m;
        }
    }
    
    return arr;
}

module.exports = sort;