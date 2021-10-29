// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"epB2":[function(require,module,exports) {
//选择排序
var selectionSort = function selectionSort(array) {
  for (var i = 0; i < arr.length; i++) {
    var minIndex = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(array, i, minIndex);
    }
  }

  return array;
};

var swap = function swap(array, indexA, indexB) {
  var temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
}; //快速排序


var quickSort = function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivotIndex = Math.floor(array.length / 2);
  var pivot = array.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}; //归并排序


var mergeSort = function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  var arr1 = array.slice(0, Math.floor(array.length / 2));
  var arr2 = array.slice(Math.floor(array.length / 2));
  return merge(mergeSort(arr1), mergeSort(arr2));
};

var merge = function merge(arr1, arr2) {
  if (!arr1.length) {
    return arr2;
  }

  if (!arr2.length) {
    return arr1;
  }

  if (arr1[0] < arr2[0]) {
    return [arr1[0]].concat(merge(arr1.slice(1), arr2));
  } else {
    return [arr2[0]].concat(merge(arr1, arr2.slice(1)));
  }
};

var displaySortArray = function displaySortArray(array, div, message) {
  div.innerHTML = '';
  var ul = document.createElement('ul');
  ul.className = 'itemsUl';
  var messageLi = document.createElement('li');
  messageLi.innerHTML = message;
  ul.append(messageLi);

  for (var i = 0; i < array.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = array[i];
    ul.append(li);
  }

  div.append(ul);
};

var generateArray = function generateArray(count, maxValue) {
  var arr = [];

  for (var i = 0; i < count; i++) {
    arr.push(parseInt(Math.random() * (maxValue + 1)));
  }

  return arr;
};

var arr;

var initArray = function initArray() {
  arr = generateArray(10, 1000);
  displaySortArray(arr, arrayDiv, '初始数组');
  sortResult.innerHTML = '';
};

initArray();

btnInitArray.onclick = function () {
  initArray();
};

btnSelectionSort.onclick = function () {
  var array = arr.slice();
  var result = quickSort(array);
  displaySortArray(result, sortResult, '选择排序');
  code.innerHTML = "\n    let selectionSort = (array) => {\n        for (let i = 0; i < arr.length; i++) {\n            let minIndex = i;\n            for (let j = i + 1; j < arr.length; j++) {\n                if (array[j] < array[minIndex]) {\n                    minIndex = j;\n                }\n            }\n            if (minIndex !== i) {\n                swap(array, i, minIndex);\n            }\n        }\n        return array;\n    }\n    \n\n    let swap = (array, indexA, indexB) => {\n        let temp = array[indexA];\n        array[indexA] = array[indexB];\n        array[indexB] = temp;\n    }";
  hljs.highlightAll({
    languages: 'javascript'
  });
};

btnQuickSort.onclick = function () {
  var array = arr.slice();
  var result = quickSort(array);
  displaySortArray(result, sortResult, '快速排序');
  code.innerHTML = "\n    let quickSort = (array) => {\n        if (array.length <= 1) {\n            return array;\n        }\n        const pivotIndex = Math.floor(array.length / 2);\n        var pivot = array.splice(pivotIndex, 1)[0];\n    \n        const left = [];\n        const right = [];\n        for (let i = 0; i < array.length; i++) {\n            if (array[i] < pivot) {\n                left.push(array[i])\n            } else {\n                right.push(array[i]);\n            }\n        }\n        return quickSort(left).concat([pivot], quickSort(right));\n    }";
  hljs.highlightAll({
    languages: 'javascript'
  });
};

btnMergeSort.onclick = function () {
  var array = arr.slice();
  var result = mergeSort(array);
  displaySortArray(result, sortResult, '归并排序');
  code.innerHTML = "\n    let mergeSort = (array) => {\n        if (array.length === 1) {\n            return array;\n        }\n        let arr1 = array.slice(0, Math.floor(array.length / 2));\n        let arr2 = array.slice(Math.floor(array.length / 2));\n        return merge(mergeSort(arr1), mergeSort(arr2));\n    }\n    \n    let merge = (arr1, arr2) => {\n        if (!arr1.length) {\n            return arr2;\n        }\n        if (!arr2.length) {\n            return arr1;\n        }\n        if (arr1[0] < arr2[0]) {\n            return [arr1[0]].concat(merge(arr1.slice(1), arr2));\n        } else {\n            return [arr2[0]].concat(merge(arr1, arr2.slice(1)))\n        }\n    }";
  hljs.highlightAll({
    languages: 'javascript'
  });
};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.7f81ccc7.js.map