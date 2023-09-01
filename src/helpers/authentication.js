'use client';
import React, { useState } from "react";

export default function Authentication({password}) {
    const [errorMessage, setErrorMessage] = useState("");

    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (!password.match(lowerCase)) {
        setErrorMessage("Password should contains lowercase letters!");
    } else if (!password.match(upperCase)) {
        setErrorMessage("Password should contains uppercase letter!");
    } else if (!password.match(numbers)) {
        setErrorMessage("Password should contains numbers!");
    } else if (password.length < 8) {
        setErrorMessage("Password length should be more than 8!");
    } else {
        setErrorMessage("Strong password!");
    }

    return
}