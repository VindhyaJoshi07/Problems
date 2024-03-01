// function rotataArray(arr, numberOfShifts) {
//     for(let i = 0; i< numberOfShifts; i++) {
//         arr.unshift(arr.pop());
//         console.log(`step ${i+1}:`, arr);
//     }
// }


function rotataArray(arr, numberOfShifts) {
    let deletedArray = arr.splice(arr.length - numberOfShifts); // [5,6,7]
    for(let i = 0; i< deletedArray; i++) {
        arr.splice(i, 0, deletedArray[i]);
        console.log(`step ${i+1}:`, arr);
    }
}