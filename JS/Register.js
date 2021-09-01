// Initialisasi Form
const form = document.getElementById("myForm")
const errorMessage = document.getElementById("errorMessage")

function handleSubmit(e){
    const formData = new FormData(form)
    const name = formData.get("nameText")
    const gender = formData.get("genderTxt")
    const email = formData.get("emailTxt")
    const password = formData.get("passTxt")
    const confPass = formData.get("confPassText")
    const agree = formData.get("agreeTxt")
    let error = []
    
    // VALIDATION 
    if(!name){
        error.push("Name must be filled!")
    }

    if(name.length < 5 || name.length > 50){
        error.push("Name must be between 5 & 50!")
    }

    if(!gender){
        error.push("Gender must be filled!")
    }

    if(!email){
        error.push("Email must be filled!")
    }

    if(!password){
        error.push("Password must be filled!")
    }

    if(!password.startsWith("GA")){
        error.push("Password must start with 'GA' !")
    }

    if(password.length < 5 || password.length > 15){
        error.push("Password must be between 5 & 15!")
    }

    if(confPass != password){
        error.push("Confirmation password must be the same as password!")
    }

    if(!agree){
        error.push("Must be printed terms must be filled!")
    }
    
    if(error.length > 0){
        document.getElementById("errorMessage").innerHTML = "Sorry, still not correct"
        alert(error.join("\n"))
        errorMessage.innerHTML = error.join("<br>")
        e.preventDefault()
    }else{
        if(!confirm("Are you sure?")){
            e.preventDefault()
        }
    }
}

// CALLBACK FUNCTION
form.addEventListener('submit', handleSubmit)

