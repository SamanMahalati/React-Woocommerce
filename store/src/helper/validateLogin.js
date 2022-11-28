const validation = (data) => {

    const { username , password} = data
    const errors = {}

    //validate UserName
    if (!username.trim()) {
        errors.username = "نام کاربری نمیتواند خالی باشد"
    } else {
        delete errors.username
    }

    //Validate Password
    if (!password.trim()) {
        errors.password = "رمز عبور نمیتواند خالی باشد"
    } else if (password.length > 6) {
        errors.password = "رمز عبور نباید بیشتر از 6 کاراکتر باشد"
    } else {
        delete errors.password
    }

    return errors
}

export default validation