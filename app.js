var password = document.getElementById('password');
var pass = '';

function genPassword() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz!"#$%&/()=?ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var passwordLength = document.getElementById('number').value;
    pass='';
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        pass += chars.substring(randomNumber, randomNumber + 1);
    }
    password.value = pass;
}

function copyPassword() {
    var copyText = document.getElementById('password');

        if (pass != '') {
            copyText.select();
            copyText.setSelectionRange(0, 999);
            document.execCommand('copy');
            alert("Contraseña copiada al portapapeles");
        } else {
            alert("Primero genere una contraseña");
        }
        
       
}