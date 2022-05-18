function duplicateCount(array) {
    array.sort();

    var present = null;
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] != present) {
            if (count > 0) {
                console.log(present + ' comes ....... ' + count + ' times<br>');
            }
            present = array[i];
            count = 1;
        } else {
            count++;
        }
    }
    if (count > 0) {
        console.log(present + ' comes ------- ' + count + ' times');
    }

}
const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"];

duplicateCount(arr);