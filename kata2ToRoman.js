const toRoman = number => {
  let romanNumber = "";
  let digit = 0;
  //With the array upside down we avoid doing more if to control the positioning:
  const arrayDigits = number.toString().split('').reverse();
  const keyPosition = [
      ['','I','II','III','IV','V','VI','VII','VIII','IX'], //Units
      ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'], //Tens
      ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'], //Hundreds
      ['','M','MM','MMM','','','','','',''] //Thousands
  ];
  
  for (let position = 0; position < arrayDigits.length; position++) {
    digit = parseInt(arrayDigits[position]);
    romanNumber = (keyPosition[position][digit]).concat(romanNumber);
  }

  return romanNumber;  
}

const number = process.argv.splice(2);

if ( (!isNaN(number)) && number > 0 && number < 4000 )
  console.log(`The Arabic number ${number} is ${toRoman(number)}.`);
else
  console.log(`The Arabic number ${number} isn't a valid number.`);