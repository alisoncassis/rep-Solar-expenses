const form = document.querySelector('#login-form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const loginBlock = document.querySelector('#login_block')
const registerBlock = document.querySelector('#register_block')
const indexSection = document.querySelector('.section.index')
const loginSection = document.querySelector('.section.login')
const registerSection = document.querySelector('.section.register')

window.onload = function() {
    form.onsubmit = loginCall
    loginBlock.onclick = showLoginFom
    registerBlock.onclick = showRegisterFom
}

function showLoginFom() {
    indexSection.classList.add('hide')
    loginSection.classList.add('show')
    return false
}

function showRegisterFom() {
    indexSection.classList.add('hide')
    registerSection.classList.add('show')
    return false
}

function loginCall(){
    document.querySelectorAll('.error').forEach(ele => ele.classList.remove('error'))
    postRequest('/login', {email: email.value, password: password.value}, toHomePage)
    return false
}

function toHomePage(data){
    if(typeof(data) == 'object' && data.error === 1) {
        document.querySelector(`#${data.field}`).classList.add('error')
        document.querySelector(`#lbl_${data.field}`).classList.add('error')
        return false
    }
    window.location.href = '/'
}
