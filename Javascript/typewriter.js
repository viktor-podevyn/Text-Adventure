
let number = 0;

function typeWriter(message) {
    for (let i = 0; i < message.length; i++) {
        let random = Math.floor(Math.random() * 100);
        number += random;
        setTimeout(function () {
            document.getElementById('message').innerHTML += message[i];
        }, number);
    }
}

typeWriter(message);