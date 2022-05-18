const UniqueSortedArray = (arr = []) => {
    const map = {};
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = true;
            res.push(arr[i]);
        };
    };
    return res.sort((a, b) => a - b);
};
const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];

const result = UniqueSortedArray(arr);

console.log(result);