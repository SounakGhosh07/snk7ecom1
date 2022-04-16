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

function validation(){
    var username = document.getElementById('exampleInputName').value;
    var email= document.getElementById('exampleInputEmail1').value;
    var contact=document.getElementById('contact').value;
    var password=document.getElementById('exampleInputPassword1').value;
    var confirmpassword=document.getElementById('exampleInputPassword2').value;
    
    var username_check= /^[A-Za-z ]{3,100}$/;
    var email_check=/^[A-Za-z0-9.-_]{3,}@[A-Za-z0-9]{3,}[.]{1}[a-zA-Z]{1,6}$/;
    var number_check= /^[6789][0-9]{9}$/;
    var password_check= /^[A-Za-z0-9!@#$%^&*]{8,20}$/;

    if(username_check.test(username)){
        document.getElementById('errorname').innerHTML=" ";
    }
    else{
        document.getElementById('errorname').innerHTML="Invalid Usename!!";
        return false;
    }

    if(email_check.test(email)){
        document.getElementById('errormail').innerHTML=" ";
    }
    else{
        document.getElementById('errormail').innerHTML="Invalid Email!!";
        return false;
    }

    if(number_check.test(contact)){
        document.getElementById('errornumber').innerHTML=" ";
    }
    else{
        document.getElementById('errornumber').innerHTML="Invalid number!!";
        return false;
    }

    if(password_check.test(password)){
        document.getElementById('errorpassword').innerHTML=" ";
    }
    else{
        document.getElementById('errorpassword').innerHTML="Invalid password format!!";
        return false;
    }

    if(confirmpassword.match(password)){
        document.getElementById('errorcpassword').innerHTML=" ";
    }
    else{
        document.getElementById('errorcpassword').innerHTML="Password does not match";
        return false;
    }
}

function comingsoon(){
    alert("Coming Soon!!");
}

