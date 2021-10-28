let quickSort = (array) => {
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    var pivot = array.splice(pivotIndex, 1)[0];

    const left = [];
    const right = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

let mergeSort = (array) => {
    if (array.length === 1) {
        return array;
    }
    let arr1 = array.slice(0, Math.floor(array.length / 2));
    let arr2 = array.slice(Math.floor(array.length / 2));
    return merge(mergeSort(arr1), mergeSort(arr2));
}

let merge = (arr1, arr2) => {
    if (!arr1.length) {
        return arr2;
    }
    if (!arr2.length) {
        return arr1;
    }
    if (arr1[0] < arr2[0]) {
        return [arr1[0]].concat(merge(arr1.slice(1), arr2));
    } else {
        return [arr2[0]].concat(merge(arr1, arr2.slice(1)))
    }
}

let displaySortArray = (array, div, message) => {
    div.innerHTML = '';
    const ul = document.createElement('ul');
    ul.className = 'itemsUl';
    const messageLi = document.createElement('li');
    messageLi.innerHTML = message;
    ul.append(messageLi);
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = array[i];
        ul.append(li);
    }
    div.append(ul);
}

let generateArray = (count, maxValue) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(parseInt(Math.random() * (maxValue + 1)));
    }
    return arr;
}

let arr;

let initArray = () => {
    arr = generateArray(10, 1000);
    displaySortArray(arr, arrayDiv, '初始数组');
    sortResult.innerHTML = '';
}

initArray();

btnInitArray.onclick = () => {
    initArray();
}

btnQuickSort.onclick = () => {
    const array = arr.slice();
    let result = quickSort(array);
    displaySortArray(result, sortResult, '快速排序');
}

btnMergeSort.onclick = () => {
    const array = arr.slice();
    let result = mergeSort(array);
    displaySortArray(result, sortResult, '归并排序');
}