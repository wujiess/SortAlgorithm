let quickSort = (array) => {
    if (array.length === 1) {
        array[0].pivot = true;
    }
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    var pivot = array.splice(pivotIndex, 1)[0];
    pivot.pivot = true;

    const left = [];
    const right = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].value < pivot.value) {
            left.push(array[i])
        } else {
            right.push(array[i]);
        }
    }
    displaySortArray(left.concat([pivot], right));
    return quickSort(left).concat([pivot], quickSort(right));
}

function QuickSortItem(value) {
    this.value = value;
    this.pivot = false;
}

function displaySortArray(array) {
    const ul = document.createElement('ul');
    ul.className = 'itemsUl';
    for (let i = 0; i < array.length; i++) {
        const li = document.createElement('li');
        li.style.color = array[i].pivot ? '#4e6ef2' : '#000';
        li.innerHTML = array[i].value;
        ul.append(li);
    }
    arrayDiv.append(ul);
}

let swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

let generateArray = (count, maxValue) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(parseInt(Math.random() * (maxValue + 1)));
    }
    return arr;
}

let generateQuickSortArray = () => {
    let arr = generateArray(10, 1000);
    let array = [];
    arr.forEach(p => {
        array.push(new QuickSortItem(p));
    });
    return array;
}

let quickSortArray = generateQuickSortArray();

displaySortArray(quickSortArray);

btnQuickSort.onclick = () => {
    let result = quickSort(quickSortArray);
    displaySortArray(result);
}