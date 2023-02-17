function Clear(){
   calculator.screen.value = null; 
}
function Mybutton(e){
calculator.screen.value += e.value;
}
function Equal(){
    calculator.screen.value = eval( calculator.screen.value)
}
