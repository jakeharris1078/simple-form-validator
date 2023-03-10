'use strict';

const username = document.getElementById('usernameInput');
const email = document.getElementById('emailInput');
const password = document.getElementById('passwordInput');
const passwordCheck = document.getElementById('passwordCheckInput');
const form = document.getElementById('.theForm');

const usernameError = document.getElementById('error1');
const emailError = document.getElementById('error2');
const passwordError = document.getElementById('error3');
const passwordCheckError = document.getElementById('error4');

const failCondition = function (location) {
  location.style.border = 'solid 2px red';
};

const successCondition = function (location) {
  location.style.border = 'solid 2px green';
};

//check if username is at least 3 characters
const checkUsername = function () {
  if (username.value.length >= 3) {
    successCondition(username);
  } else {
    failCondition(username);
    usernameError.innerHTML = 'Usernames must be 3+ characters.';
  }
};

//check if email is valid
const checkEmail = function () {
  const emailCheck = String(email.value);
  let exp = /^\S+@\S+\.\S+$/;
  if (emailCheck.match(exp)) {
    successCondition(email);
  } else {
    failCondition(email);
    emailError.innerHTML = 'Please enter a valid email.';
  }
};

//check if password is valid
const checkPassword = function () {
  if (password.value.length >= 5) {
    successCondition(password);
  } else {
    failCondition(password);
    passwordError.innerHTML = 'Passwords must be 5+ characters.';
  }
};

//check if confirm password is valid
const checkConfirm = function () {
  if (
    passwordCheck.value !== password.value ||
    passwordCheck.value.length < 5
  ) {
    failCondition(passwordCheck);
    failCondition(password);
    passwordCheckError.innerHTML = 'Passwords must match.';
  } else {
    successCondition(passwordCheck);
  }
};

const validate = function () {
  checkUsername();
  checkEmail();
  checkPassword();
  checkConfirm();
};
