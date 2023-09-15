import jwt from "jsonwebtoken";

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

// Return a JWT token from a user object
export function getTokenFromUser(user) {
    if (!user) {
        return null;
    }

    try {
        let token;
        if (user.exp) {
            token = jwt.sign(user, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
        } else {
            token = jwt.sign(user, process.env.NEXT_PUBLIC_JWT_SECRET_KEY, { expiresIn: '1d' });
        }
        return token;
    } catch(error) {
        console.log('JSON web token encoding error:');
        console.log(error);
        return null
    }
}

// Return a decoded user object from a JWT token
export function getUserFromToken(token) {
    if (!token) {
        return null;
    }

    try {
        const user = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
        return user;
    } catch(error) {
        console.log('JSON web token decoding error:');
        console.log(error);
        return null
    }
}