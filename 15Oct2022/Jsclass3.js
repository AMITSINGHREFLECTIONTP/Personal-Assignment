
function Myfun(e){
   calculatorform.screen.value += e.value;
}
function Clc(){
   calculatorform.screen.value = null;
}
function Calculate(){
   calculatorform.screen.value = eval(calculatorform.screen.value)
}