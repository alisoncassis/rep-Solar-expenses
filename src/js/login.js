const form = document.querySelector('#login-form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const root = document.querySelector('#root')

window.onload = function() {
    form.onsubmit = loginCall
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
