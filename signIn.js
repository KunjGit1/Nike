let name = localStorage.getItem("first_name") ? localStorage.getItem("first_name") : ""
let user_phoneno = localStorage.getItem("phone_number") ? localStorage.getItem("phone_number") : ""
let user_address = localStorage.getItem("address") ? localStorage.getItem("address") : ""

function validateForm(){

    var email = document.myform.email.value;
    var password = document.myform.password.value;

   
        if (email == null || email == "") {
            document.getElementById("e1").innerHTML = "Email is Required";
        } 
        if (password == null || password == "") {
            document.getElementById("e2").innerHTML = "Password is Required";
        }
        else {
            saveData()
        }
}

function saveData(){

    let email,password;

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    let user_records = [];
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => {return v.email == email && v.password == password})) {

        let current_user = user_records.find((v) =>  v.email === email)

        let loggedInUser = {
            name: current_user?.first_name,
            email : current_user?.email,
            user_phoneno : current_user?.phone_number,
            user_address : current_user?.address
        }
        
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

        window.location.href = "/WebSite/profile.html";
       
        alert("Welcome");

    } else{
        alert("Password for" + email + "is wrong, Please try Again");
    }
}


