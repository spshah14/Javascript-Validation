
let uname = document.getElementById('uname');
let email = document.getElementById('email');
let mobile = document.getElementById('mobile');
let name = document.getElementById('name');
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');

let unameHelp = document.getElementById('unameHelp');
let emailHelp = document.getElementById('emailHelp');
let mobileHelp = document.getElementById('mobileHelp');
let nameHelp = document.getElementById('nameHelp');
let passwordHelp = document.getElementById('passwordHelp');
let cpasswordHelp = document.getElementById('cpasswordHelp');

let success = document.getElementById('success');
let failure = document.getElementById('failure');

let submit = document.getElementById('submit');

let validUname = false;
let validEmail = false;
let validMobile = false;
let validName = false;
let validPassword = false;
let validCpassword = false;

unameHelp.style.display = 'none';
emailHelp.style.display = 'none';
mobileHelp.style.display = 'none';
nameHelp.style.display = 'none';
passwordHelp.style.display = 'none';
cpasswordHelp.style.display = 'none';

success.style.display = 'none';
failure.style.display = 'none';


uname.addEventListener('blur', () => {

    let str = uname.value;

    let reg = /^([a-zA-Z0-9]){2,10}$/

    if (!reg.test(str)) {
        unameHelp.style.display = 'block';
        str = " ";
        validUname = false;
    }
    else {
        unameHelp.style.display = 'none';
        validUname = true;
    }
})

email.addEventListener('blur', () => {

    let str = email.value;

    let reg = /^[a-zA-Z]([a-zA-Z0-9\.]+)@([a-zA-Z]+)\.([a-zA-z]+)$/

    if (!reg.test(str)) {
        emailHelp.style.display = 'block';
        str = " ";
        validEmail = false;
    }
    else {
        emailHelp.style.display = 'none';
        validEmail = true;
    }
})

mobile.addEventListener('blur', () => {
    let str = mobile.value;
    let reg = /^([0-9]){10}$/

    if (!reg.test(str)) {
        mobileHelp.style.display = 'block';
        str = " ";
        validMobile = false;
    }
    else {
        mobileHelp.style.display = 'none';
        validMobile = true;
    }
})

name.addEventListener('blur', () => {

    let str = name.value;

    let reg = /^([a-zA-Z\s]){0,30}$/

    if (!reg.test(str)) {
        nameHelp.style.display = 'block';
        str = " ";
        validName = false;
    }
    else {
        nameHelp.style.display = 'none';
        validName = true;
    }

})

password.addEventListener('blur', () => {
    let str = password.value;
    let reg = /^([0-9a-zA-Z\@\_]+)([0-9]+)([0-9a-zA-Z\@\_]*){8,20}$/
    if (!reg.test(str)) {
        passwordHelp.style.display = 'block';
        str = "";
        validPassword = false;
    }
    else {
        passwordHelp.style.display = 'none';
        validPassword = true;
    }

})

cpassword.addEventListener('blur', () => {
    let str = cpassword.value;
    if (str != password.value) {
        cpasswordHelp.style.display = 'block';
        str = "";
        validCpassword = false;
    }
    else {
        cpasswordHelp.style.display = 'none';
        validCpassword = true;
    }

})

submit.addEventListener('click', (e) => {

    e.preventDefault();
    if (validUname && validEmail && validMobile && validName && validPassword && validCpassword) {
        success.classList.add('show');
        success.style.display = 'block';
        failure.style.display = 'none';
    } else {
        failure.classList.add('show');
        failure.style.display = 'block';
        success.style.display = 'none';
    }

});

