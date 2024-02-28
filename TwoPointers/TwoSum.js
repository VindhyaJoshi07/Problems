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