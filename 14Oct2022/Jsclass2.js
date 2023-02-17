

function myfunction() {
    var a = document.getElementById("index1").value
    var b = document.getElementById("index2").value

    if (a < b) {
        document.getElementById('demo').innerHTML = 'b is greater than a'
        document.getElementById('demo').style.color = 'red'
    }
    else {
        document.getElementById('demo').innerHTML = 'b is less than a'
        document.getElementById('demo').style.color = 'green'
    }


    if (a == "" && b == "") {
        document.getElementById('demo').innerHTML = 'please fill out the input section'
        document.getElementById('index1').style.border = '2px solid red'
        document.getElementById('index2').style.border = '2px solid red'

    }
    else if (a == "") {
        document.getElementById('demo').innerHTML = 'please enter first input section'
        document.getElementById('index1').style.border = '2px solid red'
        document.getElementById('index2').style.border = '2px solid black'

    }
    else if (b == "") {
        document.getElementById('demo').innerHTML = 'please enter second input section'
        document.getElementById('index2').style.border = '2px solid red'
        document.getElementById('index1').style.border = '2px solid black'

    }
    


}


function doublefunction(){
    const one ='5'
    const two ='8'
if(one> two){
document.getElementById('double').innerHTML='right'
}
else{
    document.getElementById('double').innerHTML='wrong'

}
}


function thirdfunction(){
const trip = 'crazy castle'
const picnic = 'crazy castle'

if(trip!==picnic){
    document.getElementById('third').innerHTML='yes we are going'
}
else{
    document.getElementById("third").innerHTML='no we are not going'
}

}
