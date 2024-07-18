
function convert(){
var inputtemperature=parseFloat(document.getElementById('tempinputvalue').value);
var inputunit=document.querySelector('input[name="intemptype"]:checked').value;
var outputunit=document.querySelector('input[name="outtemptype"]:checked').value;
var answer=0;
var Celsius;
     console.log(inputtemperature);
     console.log(inputunit);
     console.log(outputunit);
     if(inputunit !== "Celsius")
     {
          if(inputunit === "Kelvin")
          {
               Celsius=inputtemperature-273;
          }
          if(inputunit === "Fahrenheit")
          {
               Celsius=0.5555*(inputtemperature-32);
          }
          if(inputunit === "Raumer")
          {
               Celsius=1.25*inputtemperature;
          }
          if(inputunit ==="Rankine")
          {
               Celsius=0.5555*(inputtemperature-492);
          }
     }
     else{
          Celsius=inputtemperature;
     }
console.log(Celsius);

     if(inputunit === outputunit)
          {
               answer=inputtemperature ;
          }
     else if(outputunit === "Kelvin")
     {
          answer=Celsius+273;
     }
     else if(outputunit === "Fahrenheit")
     {
          answer=1.8*Celsius+32;
     }
     else if(outputunit === "Rankine")
     {
          answer=1.8*Celsius+492;
     }
     else if(outputunit === "Raumer")
     {
          answer=0.8*Celsius;
     }
     else if(outputunit === "Celsius"){
          answer=Celsius;
     }
    
     document.getElementById('res').innerHTML=`${answer.toFixed(2)}`
}














