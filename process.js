var button = document.getElementById('pud');
var clear = document.getElementById('clear');

button.addEventListener('click',function(event){
    var num = parseInt(document.getElementById('number').value);
    var dec = document.getElementById('dec').value;
    if (num >= 0 && dec >= 0) {
        process = num.toFixed(dec);
        document.querySelector('.output').textContent = process;
    }
    else{
        alert("error");
    }
});

clear.addEventListener('click',function(event){
    document.getElementById('number').value = '';
    document.querySelector('.output').textContent = '';
    document.getElementById('dec').value = '';
});