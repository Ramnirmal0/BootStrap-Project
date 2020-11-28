var creditials=[
  {
    username:"admin",
    email:"admin@gmail.com",
    password:"admin123",
  },
]

function newAccount(){
  console.log(creditials)
  var username=document.getElementById("getusername").value
  var email=document.getElementById("getemail").value
  var password=document.getElementById("getpassword").value
  var confirm_password=document.getElementById("getconfirm_password").value
  if(username!=="" && email!=="" && password!=="" && confirm_password!==""  )
  {
    for(i in creditials){
      if(username==creditials[i].username){
        alert("Sorry ! Username already Exsist. Please try another name");
        return
      }
    }

    for(j in creditials){
      if(email==creditials[j].email){
        alert("Sorry ! Email already Exsist. Please try another Email ID");
        return
      }
    }

    if(password == confirm_password)
    {
      creditials.push({username,email,password})
      return
    }
    else{
      alert("Please check your password is correct. confirm password again")
      return
    }
  }
  else {
       alert("please fill the form completely. Null characters is not acceptable")
  }
}

function validateAccount(){
  console.log(creditials)
  var username=document.getElementById("valid_username").value
  var password=document.getElementById("valid_password").value
  for(k in creditials)
  {
    if(username==creditials[k].username || username==creditials[k].email)
    {
      if(password!==creditials[k].password)
      {
        alert("Invalid Password ! Try Again")
        return
      }
      return
    }
  }
      alert("Invalid Username !  please sign-up")
      return
}
