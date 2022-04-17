/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "150px" ;
  document.getElementById("main").style.marginLeft = "150px" ;
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)" ;
}
  
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0" ;
  document.getElementById("main").style.marginLeft = "0" ;
  document.body.style.backgroundColor = "white" ;
}

/* Validation function for sign up*/

const name= document.getElementById('exampleInputName')
const email = document.getElementById('exampleInputEmail1')
const password = document.getElementById('exampleInputPassword1')
const cpwd= document.getElementById('exampleInputPassword2')
const sgnform= document.getElementById('formsgn')

const errorName = document.getElementById('errorname')

sgnform.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
    document.getElementById('errorname').textContent("Name is required!!")
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if(password.value !== cpwd.value){
      messages.push('Password not matching !!')
      document.getElementById('errorcpassword').textContent("Password not matching !!")
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

function comingsoon(){
    alert("Coming Soon!!");
}

function comingsoon(){
  alert("Coming Soon!!");
}

