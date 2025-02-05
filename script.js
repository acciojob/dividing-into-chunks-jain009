const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let chunks = [];
	let sum = 0;
	for ( let i = 0; i < arr.length; i++ )
	sum += arr[i]; 
		if( sum < n){
			chunks.push(sum);
			return chunks;
		}
};

// const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
