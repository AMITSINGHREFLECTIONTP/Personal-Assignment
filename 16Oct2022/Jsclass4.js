//map

const cars=  new Map();
cars.set('B', 1 );
cars.set('R',2);
cars.set('A',3);
cars.set('H',4);
cars.set('M',5);
document.getElementById('mfilt').innerHTML=cars.get('A');


//filter

const ages =[ 10,20,15,25,95,24,];
document.getElementById('filt').innerHTML=ages.filter(checkMinors)
function checkMinors(ages){
    return ages<=18
}