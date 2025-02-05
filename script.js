function divide(arr, n) {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let num of arr) {
        if (currentSum + num > n) {
            result.push(currentSubarray);
            currentSubarray = [];
            currentSum = 0;
        }
        
        currentSubarray.push(num);
        currentSum += num;
    }
    
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
}

// Example test cases
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4)); // [[4], [3], [2, 1]]

const n = prompt("Enter n: ");
a
clert(JSON.stringify(divide(arr, n)));
