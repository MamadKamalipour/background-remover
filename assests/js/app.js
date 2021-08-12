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
const apiKey = "eaaKY4LLpanYF5dcpQETocnf"

const fileField = document.querySelector("#image-input")
const removeBgBtn = document.getElementById("removeBg")
const imageLoader = document.getElementById("image-loader")
    //event listeners
removeBgBtn.addEventListener("click", RemoveBgFunction)

async function RemoveBgFunction() {
    const image = fileField.files
    console.log(image)
    const formData = new FormData();

    formData.append("size", "auto");
    formData.append("image_file", image[0]);

    const url = "https://api.remove.bg/v1.0/removebg";
    fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": `${apiKey}`,
            },
            body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });


}