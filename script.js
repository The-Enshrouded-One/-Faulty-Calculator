let random=Math.random();
console.log(random);
let num1 = parseFloat(prompt("Enter first number")); 
let num2 = parseFloat(prompt("Enter second number")); 
let operator=prompt("Enter operator (+, -, *, /)");
let obj={
   "+" : "-",
   "*" : "+",
   "-" : "/",
    "/" : "**"

}
if(random<0.1){
    operator=obj[operator];
    alert("The result is " +calculate(num1, num2, operator));
}
else{
    alert("The result is " +calculate(num1, num2, operator));
}
function calculate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error (division by zero)';
        case '**': return (a**b);
        default: return 'Invalid operator';
    }
}