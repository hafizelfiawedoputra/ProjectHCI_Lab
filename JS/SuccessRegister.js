// Success Input data
const dataBlock = document.getElementById("data")

const queryParam = window.location.search.slice(1)
const datas= queryParam.split("&")

for(var i = 0; i < 1; i++){
    const data = datas[0].split("=")
    const name = data[0]
    const valueName = data[1].replace("+", " ")
    dataBlock.innerHTML += `<p> <center>Successful Registration</center><br>Name : ${valueName} </p>`
}

for(var i = 0; i < 1; i++){
    const data = datas[1].split("=")
    const gender = data[0]
    const valueGender = data[1].replace("", "")
    dataBlock.innerHTML += `<p> Gender : ${valueGender} </p>`
}

for(var i = 0; i < 1; i++){
    const data = datas[2].split("=")
    const email = data[0]
    const valueEmail = data[1].replace("%40", "@")
    dataBlock.innerHTML += `<p> Email : ${valueEmail} </p>`
}

for(var i = 0; i < 1; i++){
    dataBlock.innerHTML += `<p> <center><br>The data has been successful and has been stored in our database.</center> </p>`
}
