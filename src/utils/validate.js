export const checkValidateData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const isNameValid = /^[a-zA-Z]{2,30}(?: [a-zA-Z]{2,30}){0,2}$/.test(name)

    const errors = {};

    if (!isEmailValid) { errors.email= "Invalid email" };
    if (!isPasswordValid) { errors.password= "Invalid password" };
    if (!isNameValid) { errors.name= "Invalid name" };

    return errors;
}