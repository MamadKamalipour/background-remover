//variables
// sections
const signInSection = document.getElementById("loginSection")
const mainApp = document.getElementById("mainApp")
    // elements
const createUserBtn = document.getElementById("createUser")
const createForm = document.getElementById("signInForm")
const nameInput = document.getElementById("signInName")
const emailInput = document.getElementById("email")
const passInput = document.getElementById("password")
const cPassInput = document.getElementById("cpassword")
    //event listeners
createUserBtn.addEventListener("click", Validator)


//functions
//Create account
//check passwords for confirmation
function Validator(e) {
    e.preventDefault()
    pass = passInput.value
    cpass = cPassInput.value
    if (pass == cpass && (pass !== "")) {
        strengthValditor()
        createForm.reset()
    } else {
        const errorEL = `
        <ul class="password-error">
        <h1>oh try again, somthing wrong</h1>
        <li><span>all fields are required</span></li>
        <li><span>Or</span></li>
        <li><span>Passwords are not match</span></li>
        </ul>
        `
        const errorDiv = document.getElementById("error")
        errorDiv.innerHTML = errorEL
        setTimeout(() => {
            errorDiv.innerHTML = ""
        }, 5000);

    }
    // set password rules
    function strengthValditor() {
        pass = passInput.value
        cpass = cPassInput.value
            //atleast should be 8 char
            //it should be less then 12 char
            //atleast it should have one uppercase 
            //shoud have one symbol
        if ((pass.length >= 8) && (pass.length <= 16) && pass.match(/[A-Z]+/) && pass.match(/[$@#&!]+/)) {
            saveToLocal()
        } else {
            const errorEL = `
            <ul class="password-error">
            <h1>Password should follow this rules:</h1>
            <li><span>atleast should be 8 char</span></li>
            <li><span>it should be less then 16 char</span></li>
            <li><span>atleast it should have one uppercase </span></li>
            <li><span>atleast it shoud have one symbol</span></li>
        </ul>
            `
            const errorDiv = document.getElementById("error")
            errorDiv.innerHTML = errorEL
            setTimeout(() => {
                errorDiv.innerHTML = ""
            }, 5000);
        }
    }
}



function saveToLocal() {

    //put information in to an object to save in local
    let userInfo = {
        name: nameInput.value,
        // LowerCase Email to save in local
        email: emailInput.value.toLowerCase(),
        pass: passInput.value,
    }

    localStorage.setItem("userAccount", JSON.stringify(userInfo))
    const errorEL = `
    <h1 class= "text-center">awsome!<br> account created.</h1>
    `
    const errorDiv = document.getElementById("error")
    errorDiv.innerHTML = errorEL
    setTimeout(() => {

        errorDiv.innerHTML = ""

    }, 5000);
}

// Login Into account
// varibales
const loginBtn = document.getElementById("loginUser")
const loginEmail = document.getElementById("loginEmail")
const loginPass = document.getElementById("loginPass")
    // event listeners
loginBtn.addEventListener("click", validatLogin)
    //functions
function validatLogin(e) {
    e.preventDefault()
        // pars local to get informations
    let userAcc = JSON.parse(localStorage.getItem("userAccount"))
        // check lowercase email and normal password and compare with data in local
    if (loginEmail.value.toLowerCase() == userAcc.email && loginPass.value === userAcc.pass) {
        // to change the status of user stay it loged in
        let userStatus = ["Loged In"]
            // save on local
        localStorage.setItem("status", userStatus)
        signInSection.hidden = true
        mainApp.hidden = false
    } else {
        const errorEL = `
        <h1>incurrect email or password</h1>
        `
        const errorDiv = document.getElementById("error")
        errorDiv.innerHTML = errorEL
        setTimeout(() => {
            errorDiv.innerHTML = ""
        }, 5000);
    }
}

// check user information if => exist (login) !=>(show login page)
function session() {
    if (localStorage.getItem("userAccount") && localStorage.getItem("status")) {
        // show app section
        signInSection.hidden = true
        mainApp.hidden = false
    }


}
//onload
session()