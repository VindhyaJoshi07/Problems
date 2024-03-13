function removeDuplicates(nums) {
    let index = 1;
    for(let i = 0; i< nums.length - 1; i++) {
        if(nums[i] !== nums[i+1]) {
            nums[index] = nums[i+1];
            index++;
        }
    }
    console.log("Index:" +index);
    return index;
}

removeDuplicates([0,0,1,2,2,3,3,3,4,4,4,4]);