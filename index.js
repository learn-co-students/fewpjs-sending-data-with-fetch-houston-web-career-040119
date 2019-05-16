// Add your code here
function submitData(userName,userEmail){
    
    let formData={
        name: userName,
        email: userEmail
    };
    
    let configObj={
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(formData)
    };
    
    
    return window.fetch("http://localhost:3000/users",configObj)
    .then(function(res){
        return res.json();
    })
    .then(function(obj){
        document.body.append(obj.id);
    })
    .catch(function(err){
        document.body.append(err.message)
    })
}   
