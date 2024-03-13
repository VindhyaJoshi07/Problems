const trap = (height) => {
    let left = 0;
    let right = height.length - 1;
    let maxHeightLeft = height[left];
    let maxHeightRight = height[right];
    let result = 0;

    while(left < right) {
        if(maxHeightLeft < maxHeightRight) {
            left++;
            if(height[left] < maxHeightLeft) {
                result += maxHeightLeft - height[left];
            } else {
                maxHeightLeft = height[left];
            }
        } else {
            right--;
            if(height[right] < maxHeightRight) {
                result += maxHeightRight - height[right];
            } else {
                maxHeightRight = height[right];
            }
        }
    }
    return result;
}