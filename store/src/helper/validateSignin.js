const validation = (data) => {
    const { username, email, phone, password, accepted } = data
    const errors = {}

    //validate UserName
    if (!username.trim()) {
        errors.username = "نام کاربری نمیتواند خالی باشد"
    } else {
        delete errors.username
    }

    //Validate Email
    if (!email.trim()) {
        errors.email = "ایمیل نمیتواند خالی باشد"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "ایمیل وارد شده نامعتبر است"
    } else {
        delete errors.email
    }
    
    //Validate Phone Number
    var regex = new RegExp('^(\\+98|0)?9\\d{9}$');
    
    if (!phone.trim()) {
        errors.phone = "شماره تلفن نمیتواند خالی باشد"
    } else if (!regex.test(phone)) {
        errors.phone = "شماره وارد شده نامعتبر می باشد"
    } else {
        delete errors.phone
    }

    //Validate Password
    if (!password.trim()) {
        errors.password = "رمز عبور نمیتواند خالی باشد"
    } else if (password.length > 6) {
        errors.password = "رمز عبور نباید بیشتر از 6 کاراکتر باشد"
    } else {
        delete errors.password
    }

    //Validate Accepted Rule
    if (!accepted) {
        errors.accepted = "قوانین ما را قبول کنید "
    } else {
        delete errors.accepted
    }

    return errors
}

export default validation