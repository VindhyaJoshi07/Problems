function threeSum(array, targetSum) {
    array.sort((a,b) => a - b);
    const triplets = [];
  
    for(let i=0; i < array.length - 2; i++){
          if(array[i] != array[i-1]){ // making sure our solution set does not contain duplicate triplets
              let left = i + 1;
            let right = array.length - 1;
  
              while (left < right){
                  const currentSum = array[i] + array[left] + array[right];
                  if (currentSum === targetSum){
                      triplets.push([array[i], array[left], array[right]]);
                      console.log(triplets);
                      while(array[left] == array[left + 1]) left ++
                      while(array[right] == array[right - 1]) right -- // making sure our solution set does not contain duplicate triplets
                      left ++;
                      right --;
                  } else if(currentSum < targetSum) {
                      left ++
                  } else if(currentSum > targetSum){
                      right --
                  }
              }
          }
      }
      return triplets;
  
}


threeSum([1,2,4,-2,4,-2], 0);