let imageOfPhones = document.getElementById("phoneS");
let displayValue = imageOfPhones.style.display;
function clicked(){
    let nextGeneration = document.querySelector("h1")
if(imageOfPhones.style.display === displayValue){
    imageOfPhones.style.display = "none"
   nextGeneration.style.marginTop = "20.7rem";
}else{
    imageOfPhones.style.display = displayValue;
    nextGeneration.style.marginTop = "0rem"
}
};
