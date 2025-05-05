function SubmitForms(){
    let UserName = document.getElementById("name").value
    let UserDate = document.getElementById("date").value
    let UserEmail = document.getElementById("email").value
    let UserPassword = document.getElementById("password").value

    const UserData = {
        name: UserName,
        date: UserDate,
        email: UserEmail,
        password: UserPassword
    };
}
