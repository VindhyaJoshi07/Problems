const numbers = [3,4,5,6,7,8,9];
const key = 3;

function rotateArray(arr, numberOfShifts) {
    for(let i = 0; i< numberOfShifts; i++) {
        arr.unshift(arr.pop());
        console.log(`step ${i+1}:`, arr);
    }
}
console.log("Final Output: ", rotateArray(numbers, key));

// ------------------------------------------------------------------------
// const numbers = [3,4,5,6,7,8,9];
// const key = 3;

function rotateArray(arr, numberOfShifts) {
    let deletedArray = arr.splice(arr.length - numberOfShifts); // [5,6,7]
    for(let i = 0; i< deletedArray; i++) {
        arr.splice(i, 0, deletedArray[i]);
        console.log(`step ${i+1}:`, arr);
    }
}

console.log("Final Output: ", rotateArray(numbers, key));

// --------------------------------------------------------------------------
let rotate = function(nums, k) {
    nums.reverse();
    k = k % nums.length;
    let last = k - 1;
    let i = 0;
    while(i < last) {
        [nums[i], nums[last]] = [nums[last], nums[i]];
        last--;
        i++;
    }
    last = nums.length - 1;
    i = k;
    while(i < last) {
        [nums[i], nums[last]] = [nums[last], nums[i]];
        last--;
        i++;
    }
};