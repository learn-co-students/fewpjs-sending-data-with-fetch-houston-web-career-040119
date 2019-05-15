// Add your code here
function submitData(name,email){

  let formData = {
    name:name,
    email:email
  }

  let configObject = {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users",configObject)
    .then(function(res){
      return res.json()
    })
    .then(function(object){
      let p = document.createElement('p')
      document.body.appendChild(p)
      p.innerHTML = object.id
    })
    .catch(function(error){
      let p = document.createElement('p')
      document.body.appendChild(p)
      p.innerHTML = error.message
    })

}
