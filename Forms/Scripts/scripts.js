function SubmitForm(){
    let UserName = document.getElementById("name").value
    let UserDate = document.getElementById("date").value
    let UserEmail = document.getElementById("email").value
    let UserPassword = document.getElementById("password").value

    //const list = [UserName,UserDate,UserEmail,UserPassword]
    const UserObject = 
    {
        UserName,
        UserDate,
        UserEmail,
        UserPassword 
    }

    const jsonMod = JSON.stringify(UserObject)

}



