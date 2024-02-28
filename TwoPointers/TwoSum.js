// ----------------------- approach - 1 ---------------------------
// Time - O(n) Space - O(n)

function twoSum(array, targetSum) {
    const numbers = {};

    for(let item of array) {
        let potentialNum = targetSum - item;

        if(potentialNum in numbers) {
            console.log("Numbers:", [potentialNum, item]);
            return;
        }
        else {
            numbers[item] = true;
        }
    }
    return [];
}
twoSum([2,3,45,65,67], 47);

// ---------------------- approach - 2 ----------------------------
// Time - O(nlogn) Space - O(1)

// function twoSum(array, targetSum) {
//     let left = 0;
//     let right = array.length - 1;

//     while(left < right) {
//         const currentSum = array[left] + array[right];

//         if(currentSum == targetSum) {
//             console.log ([array[left], array[right]]);
//             return;
//         }
//         else if(currentSum < targetSum) {
//             left++;
//         }
//         else if(currentSum > targetSum) {
//             right--;
//         }
//     }
// }

// twoSum([2,3,45,65,67], 47);
