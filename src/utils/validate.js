export function checkValidata(email, name, password) {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = password.length >= 8 ? true : false
    const isNameValid = name ? /^[a-z ,.'-]+$/i.test(name) : true

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isNameValid) return "Name is not valid";



    return null;

}