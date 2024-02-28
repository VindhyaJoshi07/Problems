function checkValidPalindrome(string) {
    let leftIdx = 0;
    let rightIdx = string.length - 1;
    
    if(string.length === 0) {
        console.log("string is empty");
        return;
    }
    while(leftIdx < rightIdx) {
        if(string[leftIdx] !== string[rightIdx]) {
            console.log("Not a Palindrome");
            return false;
        }
        leftIdx++;
        rightIdx--;
    }
    console.log("Palindrome");
    return true;
}

checkValidPalindrome("abba");