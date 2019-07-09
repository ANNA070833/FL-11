const NUMBER_OF_EMAIL = 6;
const USER_EMAIL_ONE = 'user@gmail.com';
const USER_EMAIL_TWO = 'admin@gmail.com';
const USER_PASSWORD_ONE = 'UserPass';
const USER_PASSWORD_TWO = 'AdminPass';
const NUMBER_OF_PASSWORD = 5;

let userEmail = prompt('Enter your email', '');
let userPassword = '';
let changePassword = '';
let oldPassword = '';
let newPassword = '';
let newPasswordSecondTime = '';

if (userEmail === '' || userEmail === null) {
    alert('Canceled.');
} else if (userEmail.length < NUMBER_OF_EMAIL) {
        alert('I don’t know any emails having name length less than 6 symbols');
    } else if (userEmail === USER_EMAIL_ONE || userEmail === USER_EMAIL_TWO) {
        userPassword = prompt('Enter your password', '');
        if (userPassword === '' || userPassword === null) {
            alert('Canceled.');
            } else if (userEmail === USER_EMAIL_ONE && userPassword === USER_PASSWORD_ONE || 
                userEmail === USER_EMAIL_TWO && userPassword === USER_PASSWORD_TWO) {
                changePassword = confirm('Do you want to change your password?');
                if (changePassword === false) {
                    alert('You have failed the change.');
                } else {
                    oldPassword = prompt('Enter the old password');
                    if (oldPassword === USER_PASSWORD_ONE || oldPassword === USER_PASSWORD_TWO){
                        newPassword = prompt('Enter new password');
                        if (newPassword < NUMBER_OF_PASSWORD) {
                            alert('It’s too short password. Sorry.')
                        } else {
                            newPasswordSecondTime = prompt('Enter new password again');
                            if (newPasswordSecondTime === newPassword){
                                alert('You have successfully changed your password.');
                            } else {
                                alert('You wrote the wrong password.');
                            }
                        }
                    } else {
                        alert('Wrong password');
                    }
                }
            } else {
                alert('Wrong password');
            }
    } else {
            alert('I don’t know you');
    }