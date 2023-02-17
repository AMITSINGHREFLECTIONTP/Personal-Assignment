

function Mybutton() {
    var Username = document.getElementById('email').value;
    var Password = document.getElementById('password').value;
    if(Username=='' && Password==""){
        alert(" filled the required section")
    }
    else{
        alert('Login Successfully')
    }
}