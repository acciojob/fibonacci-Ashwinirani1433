function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	let c = a + b;
	for(let i = 0; i <= num; i++){
		c = a + b;
		a = b;
		b = c;
	}
	console.log(c);
}

module.exports = fibonacci;
