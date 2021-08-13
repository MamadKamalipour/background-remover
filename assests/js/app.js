const signUpButton = document.getElementById("signUp")
const logInButton = document.getElementById("logIn")
const containerDiv = document.getElementById("container")
signUpButton.addEventListener("click", (e) => {
    e.preventDefault()
    containerDiv.classList.add("right-panel-active")

})
logInButton.addEventListener("click", (e) => {
    e.preventDefault()
    containerDiv.classList.remove("right-panel-active")

})

// remove bg api
const apiKey = "822c506f149aaaf1b2a4947b8aca85b18bc4619a"
const fileField = document.querySelector("#image-input")
const removeBgBtn = document.getElementById("removeBg")
const imageLoader = document.getElementById("image-loader")
    //event listeners
removeBgBtn.addEventListener("click", RemoveBgFunction)
    // functions
async function RemoveBgFunction() {
    const image = fileField.files
    const formData = new FormData();
    formData.append("image_file", image[0]);
    const response = await fetch("https://sdk.photoroom.com/v1/segment", {

        method: "POST",
        headers: {
            "x-api-key": `${apiKey}`
        },
        body: formData
    });
    const photo = await response.blob();
    if (response.status == 200) {
        imageLoader.src = URL.createObjectURL(photo);
        imageLoader.hidden = false
    } else {
        alert("somthing wrong")
    }
}


//logout
const logOutBtn = document.getElementById("logOut")
    //event listener
logOutBtn.addEventListener("click", () => {
        localStorage.removeItem("status")
        loginSection.hidden = false
        mainApp.hidden = true

    })
    //Forgot Pass security +100000000000000
const forgotPass = document.querySelector("#forgotPas")
forgotPass.addEventListener("click", recoverPass)

function recoverPass() {
    if (localStorage.getItem("userAccount")) {

        const userInfo = JSON.parse(localStorage.getItem("userAccount"))
        const errorEL = `
    <h1 class="text-center">Your Password is: ${userInfo.pass} <br> Enjoy xD</h1>
    `
        const errorDiv = document.getElementById("error")
        errorDiv.innerHTML = errorEL
        setTimeout(() => {
            errorDiv.innerHTML = ""
        }, 5000);
    } else {
        alert("you dont have account here dude!")

    }
}