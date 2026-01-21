const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

function validatePassword(password){
    if(password.length < 8){
        return false;
    }
    else if(!regex.test(password)){
        return false;
    }
    return true
}
export default validatePassword;