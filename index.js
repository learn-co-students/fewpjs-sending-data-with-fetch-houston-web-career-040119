// Add your code here
function submitData(username, email) {
    let url = "http://localhost:3000/users"
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: email
        })
    }
    return fetch(url, configObj)
        .then(resp => resp.json())
        .then(obj => {
            document.write(obj.id)
        })
        .catch((error) => {
            document.write(error.message)
        })
}