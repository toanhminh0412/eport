export function passwordValidator(password) {
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (!password.match(lowerCase)) {
        return "Password should contains lowercase letters!";
    } else if (!password.match(upperCase)) {
        return "Password should contains uppercase letter!";
    } else if (!password.match(numbers)) {
        return "Password should contains numbers!";
    } else if (password.length < 8) {
        return "Password length should be more than 8!";
    } else {
        return "";
    }
}