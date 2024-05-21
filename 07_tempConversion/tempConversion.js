const convertToCelsius = function(tempInFarenheit) {
  let tempCelsius=((tempInFarenheit-32)*5/9);
  return Math.round(tempCelsius*10)/10;
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempFarenheit=(tempInCelsius*9/5+32);
  return Math.round(tempFarenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
