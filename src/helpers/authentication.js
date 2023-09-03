/* Validate if a password meets certain standards
* Params: 
    - password (string)
* Returns: 
    - true if password meets all standards, false otherwise
*/
export function passwordValidator(password) {
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    // Password must have a lowercase letter
    if (!password.match(lowerCase)) {
        return "Password should contain at least a lowercase letter!";
    // Password must have an uppercase letter
    } else if (!password.match(upperCase)) {
        return "Password should contain at least an uppercase letter!";
    // Password must have a number
    } else if (!password.match(numbers)) {
        return "Password should contain at least a number!";
    // Password must have at least 8 characters
    } else if (password.length < 8) {
        return "Password must have at least 8 characters!";
    } else {
        return "";
    }
}