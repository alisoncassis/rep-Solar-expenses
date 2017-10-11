'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var form = document.querySelector('#login-form');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var loginBlock = document.querySelector('#login_block');
var registerBlock = document.querySelector('#register_block');
var indexSection = document.querySelector('.section.index');
var loginSection = document.querySelector('.section.login');
var registerSection = document.querySelector('.section.register');

window.onload = function () {
    form.onsubmit = loginCall;
    loginBlock.onclick = showLoginFom;
    registerBlock.onclick = showRegisterFom;
};

function showLoginFom() {
    indexSection.classList.add('hide');
    loginSection.classList.add('show');
    return false;
}

function showRegisterFom() {
    indexSection.classList.add('hide');
    registerSection.classList.add('show');
    return false;
}

function loginCall() {
    document.querySelectorAll('.error').forEach(function (ele) {
        return ele.classList.remove('error');
    });
    postRequest('/login', { email: email.value, password: password.value }, toHomePage);
    return false;
}

function toHomePage(data) {
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object' && data.error === 1) {
        document.querySelector('#' + data.field).classList.add('error');
        document.querySelector('#lbl_' + data.field).classList.add('error');
        return false;
    }
    window.location.href = '/';
}