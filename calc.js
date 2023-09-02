const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	let result = 0;
	
    
    
	if (mathSymbol === "+"){
		result = num1 + num2;
	}
	else if (mathSymbol === "-"){
		result = num1 - num2;
	}
	else if (mathSymbol === "*"){
		result = num1 * num2;
	}
	else if (mathSymbol === "/"){
		result = num1 / num2;
	}
	else if (mathSymbol === "sqrt" ){
		result = Math.sqrt(num1);
	}
	// console.log('result = ', result);

	if (mathSymbol === "+" || mathSymbol === "-" || mathSymbol === "*" || mathSymbol === "/"){
        console.log('mathSymbol: ', mathSymbol);
	    console.log('num1: ', num1);
	    console.log('num2: ', num2);
		console.log(num1,' ',mathSymbol,' ',num2,' = ', result);

	} 
	else if (mathSymbol === "sqrt"){
		console.log('mathSymbol: ', mathSymbol);
	    console.log('num1: ', num1);	
		console.log(mathSymbol, ' ', num1, ' = ', result);
	}
	

	// This line closes the connection to the command line interface.
	reader.close()

});
