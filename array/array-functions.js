function reverse(str) {
    strLen = str.length;
    strSplit = [];
    strRev = '';

    for (let i = 0; i < strLen; i++) {
        strSplit.push(str[i]);
    }
    for (let i = strLen - 1; i >= 0; i--) {
        strRev += strSplit[i];
    }
    return strRev;
}
reverse('joshua')

function mergeSorted(arr1, arr2) {
    const mergedArr = [];
    let item1 = arr1[0];
    let item2 = arr2[0];
    let i = 1;


    while (item1 || item2) {
        if (item1 < item2) {
            mergedArr.push(item1);
            item1 = arr1[i];
            i++;
        } else {
            mergedArr.push(item2);
            item2 = arr2[i];
            i++;
        }
        console.log(mergedArr);
    } 
}

mergeSorted([0, 3, 4, 31], [4, 6, 30])