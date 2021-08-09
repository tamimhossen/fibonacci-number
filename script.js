
// var inputField = document.getElementById('input');
var btn = document.getElementById('calculate-btn');
var output = document.querySelector('h2')

btn.addEventListener('click', passInputValue);

function passInputValue() {
    const input = document.getElementById('input').value;
    const inputValue = parseInt(input);
    fiboNacci(inputValue);
}



function fiboNacci(n) {
    var fibo = [0, 1];
    for ( var i = 2; i <= n; i++) {
        fibo[i] = fibo[ i - 1] + fibo[ i - 2];
    }
    output.innerHTML = fibo;
}




