// Add your code here


function submitData(name,email) {
  let headers = {"Content-Type":"application/json",
    "Accept":"application/json"
  };

  let formData = { "name": name, "email": email };

  return fetch("http://localhost:3000/users",
  {
    method:"POST",
    headers:headers,
    body:JSON.stringify(formData)
  }).then(function(res) {
    return res.json();
  }).then(function(data) {
    let pElem = document.createElement("p");
    document.body.appendChild(pElem);
    pElem.innerHTML = data.id;
  }).catch(function(error) {
    let pElem = document.createElement("p");
    document.body.appendChild(pElem);
    pElem.innerHTML = error.message;
  });
}
