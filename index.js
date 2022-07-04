// Add your code here
const userUrl = "http://localhost:3000/users"

let bodyData = {
    name: "Steve",
    email: "steve@steve.com"
}

let objStuff = {
    method: "POST",
    headers: {
        "content-type": "application/json",
        "accept": "application/json"
    },
    body: JSON.stringify(bodyData)
}

function submitData () {
    return fetch(userUrl, objStuff)
    .then (Response => Response.json())
    .then(getID)
    .catch(errorFunc)
}
const bodyTag = docment.queryselector('body')

function getID(object) {
    document.body.innerHTML =object.id
   /* const li = document.createElement('li')
    newLi.innertext = error.message
    bodyTag.appendChild(newLi)*/ 
}

function errorFunc(error) {
    document.body.innerHTML = error.message
   /* const newLi = document.createElement('Li')
    NewLi.innerText = error.message
    bodyTag.appendChild(newLi)*/
}