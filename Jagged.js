var arr = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
var max = 0
function findMax(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            if (array[i] > max) {
                max = array[i];
            }
        }
        else {
            findMax(array[i])
        }
    }
    return max;
}
const result = findMax(arr);
console.log(result);