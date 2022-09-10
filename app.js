const email = document.getElementById('emailveri');
const password = document.getElementById('passveri');
const submit = document.getElementById('submit');

const numbers = /[0-9]/g;
const uppercase = /[A-Z]/g;
const lowercase = /[a-z]/g;
const specialsymbols = /[@#&]/g;

submit.addEventListener('click', () => {
    const emailV = email.value;
    const passV = password.value;

    if(emailV.length === 0 || passV.length === 0 ){
        window.alert('enter valid credentials.');
        return;
    }

    if(emailV.match(/@gmail.com/g) === null){
        window.alert('enter a valid email which include @gmail.com');
        return;
    }
    if(emailV.length < 11){
        window.alert('kindly enter a valid email');
        return;
    }
    if(passV.length < 8){
        window.alert('your password must cotain 8 letter.');
        return;
    }
    if((passV.match(uppercase) === null)){
        window.alert('password field must contain uppercase letter.');
        return;
    }
    if((passV.match(lowercase) === null)){
        window.alert('password field must contain lowercase letter.');
        return;
    }
    if((passV.match(numbers) === null)){
        window.alert('password field must contain some numerical digits.');
        return;
    }
    if((passV.match(specialsymbols) === null)){
        window.alert('password field must contain some special characters');
        return;
    }
    window.alert('validation successfully');
    // console.log(emailV, passV);
})