function Mybuton(){
 var Fname =document.getElementById('fname').value;
 var Lname =document.getElementById('lname').value;
 var Ename =document.getElementById('email').value;
 var Jname =document.getElementById('jobrole').value;
 var Aname =document.getElementById('address').value;
 var Cname =document.getElementById('city').value;
 var Pname =document.getElementById('pincode').value;


 if(Fname=='' || Lname=='' || Ename=='' || Jname=='' || Aname=='' || Cname=='' || Pname=='' ){
    alert('fill the empty section')
 }
 else{
    alert('succesfully logedin')
 }
}