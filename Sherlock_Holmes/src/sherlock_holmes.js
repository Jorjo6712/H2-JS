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
alert("Du er kriminel og du har lige stjålet " +amount +" og det må man ikke!!");

/* Svar: steal funktionen returnerer ikke det nye balance men sit parameter i stedet. udover det, så sætter den en variabel til boolean værdier som tænder og slukker ca meraet, hvilke ikke rigtigt gøre noget fordi cameraet er ikke defineret nogen steder for a styre den via variablens værdi */
