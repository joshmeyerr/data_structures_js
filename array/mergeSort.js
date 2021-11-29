
function mergeSort(arr) {

    const subLength = arr.length / 2

    if (arr.length < 2) {
       return arr;
    }

   const left = arr.splice(0, subLength)
   return merge(mergeSort(left), mergeSort(arr))
}

console.log(mergeSort([50, 31, 98, 52, 65, 62, 90, 8, 7, 92, 82, 95, 6, 71, 82, 41, 99, 25, 17, 7]));
// mergeSorted([50, 31, 98, 52, 65, 62, 90, 8, 7, 92, 82, 95, 6, 71, 82, 41, 99, 25, 17, 7])


function merge(arr1, arr2) {

    const newArr = [];
    let count = 0;
    let left = 0;
    let right = 0;
    const length = arr1.length + arr2.length;


    while (count < length){

        if (!arr1[left]) {
            newArr.push(arr2[right])
            right++;
        } else if (!arr2[right]) {
            newArr.push(arr1[left])
            left++
        } else if (arr1[left] <= arr2[right]) {
            newArr.push(arr1[left])
            left++
        } else {
            newArr.push(arr2[right]);
            right++
        }
        count++
    }
    // console.log(newArr);
    return newArr;

};

// merge([1,3,5,7], [2,4,6,8])