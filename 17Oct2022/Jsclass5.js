function press(){
    const uname=document.getElementById('uname');
    const pass=document.getElementById('pass');
if(uname.value==''||pass.value=="" ){
    alert('fill the red area')
    document.getElementById('uname').style.border='3px solid red'
    document.getElementById('pass').style.border='3px solid red'
}
else{
    document.getElementById('uname').style.border='3px solid green'
    document.getElementById('pass').style.border='3px solid green'
}

}