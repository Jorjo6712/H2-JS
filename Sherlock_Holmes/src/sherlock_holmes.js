var balance =10500;
var cameraOn = true;
function steal(balance, amount) {
  cameraOn = false;
  if(amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn= true;
  }
  var amount = steal(balance, 1250);
alert("Du er kriminel og du har lige stjålet " +amount +" og det må man ikke!!!!");

// Svar på Dansk:

/* Svar: steal funktionen returnerer ikke det nye balance men sit parameter i stedet. Det bruger også en global variabel
som en af sit parameter, nemlig balanace, det er der ikke behov for. 
Udover det, så sætter den en variabel(cameraOn) til boolean værdier som det meningen at men ville tænde og slukke cameraet med, 
hvilke ikke rigtigt gøre noget fordi cameraet er ikke defineret nogen steder i koden for at styre den via variablens værdi.
*/

// Answer in English:

/* Answer: the steal function does not return the new balance but it's parameter instead. It also uses a global variable
as one of its parameters, namely balanace and there is no need for that.
In addition to that, it sets a variable (cameraOn) to boolean values that are meant to turn the camera on and off with,
which don't really do anything because the camera is not defined anywhere in the code to control it via the variable's value.
*/
