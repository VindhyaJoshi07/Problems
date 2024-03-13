function majorityElement(array) {
    let count = 0;
    let answer = array[0];
  
    for(let i = 0; i< array.length-1; i++) {
      if(array[i] == answer) {
        count++;
      }
      else {
        count--;
      }
      if(count == 0) {
        answer = array[++i];
        count = 1;
      }
    }
    return answer;
  }