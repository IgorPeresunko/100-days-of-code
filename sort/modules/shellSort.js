//shell sort;

const sort = arr => {
    
    let increment = Math.round(arr.length / 2);  
    while (increment > 0) {  
        for (i = increment; i < arr.length - 1; i++) {  
            let j = i;  
            let temp = arr[i];  
      
            while (j >= increment && arr[j-increment].length > temp.length) {  
                arr[j] = arr[j-increment];  
                j = j - increment;  
            }  
      
            arr[j] = temp;  
        }  
      
        if (increment == 2) {  
            increment = 1;  
        } else {  
            increment = Math.round(increment*5 / 11);  
        }  
    }  
    
    return arr;
}

module.exports = sort;