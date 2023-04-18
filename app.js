const password = document.getElementById('password');
let pass = '';
const form = document.querySelector('#form');
form.addEventListener('submit', genPassword);
const divAlert = document.querySelector('#divAlert');


function genPassword(event) {
    event.preventDefault();
    divAlert.innerHTML = '';
    let chars = '';
    if (document.getElementById('minusculas').checked) {
        chars += 'abcdefghijklmnopqrstuvwxyz';
    };
    if (document.getElementById('mayusculas').checked) {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    };
    if (document.getElementById('numeros').checked) {
        chars += '0123456789';
    };
    if (document.getElementById('simbolos').checked) {
        chars += '!"#$%&/()=?*+-.;';
    };
    if (chars != '') {
        let passwordLength = document.getElementById('number').value;
        pass = '';
        for (let i = 0; i < passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            pass += chars.substring(randomNumber, randomNumber + 1);
        }
        password.value = pass;
    } else {
        pass = '';
        password.value = pass;
        appendAlert('Debe seleccionar al menos un grupo de caracteres', 'danger')
    }

}

function copyPassword() {
    if (pass != '') {
        navigator.clipboard.writeText(pass)
            .then(() => {
                appendAlert('Contraseña copiada al portapapeles', 'success')
            })
            .catch(err => {
                appendAlert('Error al copiar al portapapeles', 'danger')
            })

    } else {
        appendAlert('Primero genere una contraseña', 'danger')
    }

}

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible m-2" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')
    divAlert.innerHTML = '';
    divAlert.append(wrapper)
}