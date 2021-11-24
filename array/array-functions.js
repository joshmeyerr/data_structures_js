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
    let arrItemLeft = arr1[0];
    let arrItemRight = arr2[0];
    let i = 1;


    while (arrItemLeft || arrItemRight) {
        if (arrItemLeft < arrItemRight) {
            mergedArr.push(arrItemLeft);
            arrItemLeft = arr1[i];
            i++;
        } else {
            mergedArr.push(arrItemRight);
            arrItemRight = arr2[i];
            i++;
        }
        console.log(mergedArr);
    } 
}

mergeSorted([0, 3, 4, 31], [4, 6, 30])