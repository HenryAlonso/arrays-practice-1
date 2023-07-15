// Given an array and an additional value, insert this value at the beginning of the array. 
// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(givenArray, newValue) {
    for (var i = givenArray.length; i >= 0; i--) {
        givenArray[i] = givenArray[i-1];
    }
    givenArray[0] = newValue;
    return givenArray;
}
test = pushFront([5, 7, 2, 3], 8);
test2 = pushFront([99], 7);
console.log(test);
console.log(test2);

console.log('\n');
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it.
// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(array) {
    removed = array[0];
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i + 1]
    }
    array.length = array.length - 1
    console.log(array);
    return removed
}
test3 = popFront([0, 5, 10, 15]);
console.log(test3);
test4 = popFront([4, 5, 7, 9])
console.log(test4);

console.log('\n');
// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(array, index, newValue) {
    for (var i = array.length - 1; i >= index; i--) {
        array[i + 1] = array[i];
    }
    array[index] = newValue;
    return array;
}

test5 = insertAt([100, 200, 5], 2, 311);
console.log(test5);
test6 = insertAt([9, 33, 7, 8], 3, 42);
console.log(test6);
test7 = insertAt([151, 85, 1, 281], 1, 5);
console.log(test7);
