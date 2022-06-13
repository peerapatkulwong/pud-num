var button = document.getElementById('pud');
var clear = document.getElementById('clear');

button.addEventListener('click',function(event){
    var num = parseInt(document.getElementById('num').value);
    var long = document.getElementById('long').value;
    if (long > 0 && long > 0) {
        num = num.toFixed(long);
        document.querySelector('.output').textContent = num;
    }
    else{
        alert("error");
    }
});

clear.addEventListener('click',function(event){
    document.getElementById('num').value = '';
    document.querySelector('.output').textContent = '';
    document.getElementById('long').value = '';
});