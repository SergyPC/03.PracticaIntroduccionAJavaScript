const toArabic = number => {
  const roman = number.toString().toUpperCase().split('');
  const search = {I:1,IV:4,V:5,IX:9,X:10,XL:40,L:50,XC:90,C:100,CD:400,D:500,CM:900,M:1000};
  let arabicNumber = 0;
  for (let i = ((roman.length)-1); i >= 0; i--) {
    if ( search[roman[i]] < search[roman[i+1]] )
      arabicNumber -= search[roman[i]];
    else
      arabicNumber += search[roman[i]];
  }
  return arabicNumber;
}

const number = process.argv.splice(2).toString().toUpperCase();

if (!(/^M*(?:V?I{0,3}|I[XV])(?:L?X{0,3}|X[CL])(?:D?C{0,3}|C[MD])$/.test(number)))
  console.log(`The Roman number ${number} isn't a valid number.`);
else
  console.log(`The Roman number ${number} is ${toArabic(number)}.`);