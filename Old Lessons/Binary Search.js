// Binary Search

var data = [1, 2, 3, 4, 5, 6, 7, 8]
var target = 4
var left = 0
var right = data.length - 1
var middle;

// While Loops

while (left <= right) {
    middle = Math.floor((left+right)/2);

    if(data[middle] === target){
        console.log("element found at" ,middle);
        break
    }else if(data[middle] > target){
        right = middle - 1
    }else if(data[middle] < target){
        left = middle + 1
    }
}