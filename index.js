// Add your code here
function submitData(name, email){
    let formData = {
        name: name,
        email: email
    }

    let configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }

    return fetch('http://localhost:3000/users', configObj)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        // let div = document.createElement('div')
        // let p = document.createElement('p')
        // // debugger
        // p.innerHTML = data.id
        // // div.append(p)
        document.body.innerHTML = data.id
    })
    .catch(function(error){
        alert('Unauthorized Access')
        // // let div = document.createElement('div')
        // let p = document.createElement('p')
        // p.innerHTML = error.message
        // // div.append(p)
        document.body.innerHTML = error.message
    })
}
    