function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            
            if (arr[j] < arr[i]) {
                const temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        
    }
    console.log(arr);
}

// bubbleSort([50, 31, 98, 52, 65, 62, 90, 8, 7, 92, 82, 95, 6, 71, 82, 41, 99, 25, 17, 7])


let bubbleSortRecursive = (arr, n = arr.length) => {

    if (n === 1) {
        return arr
    }

    for (let i = 0; i < n - 1; i++) {
        if (arr[i+1] < arr[i]) {
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    bubbleSortRecursive(arr, n-1)
    console.log(arr)
}

bubbleSortRecursive([50, 31, 98, 52, 65, 62, 90, 8, 7, 92, 82, 95, 6, 71, 82, 41, 99, 25, 17, 7])