function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitInput = document.getElementById("fromUnit");
    const toUnitInput = document.getElementById("toUnit");
    const resultElement = document.getElementById("result");
  
    if (temperatureInput.value !== "") {
      const temperature = parseFloat(temperatureInput.value);
      const fromUnit = fromUnitInput.value;
      const toUnit = toUnitInput.value;
      let convertedTemperature;
  
      if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
          convertedTemperature = (temperature * 9) / 5 + 32;
        } else if (toUnit === "kelvin") {
          convertedTemperature = temperature + 273.15;
        } else {
          convertedTemperature = temperature;
        }
      } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
          convertedTemperature = ((temperature - 32) * 5) / 9;
        } else if (toUnit === "kelvin") {
          convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
        } else {
          convertedTemperature = temperature;
        }
      } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
          convertedTemperature = temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
          convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
        } else {
          convertedTemperature = temperature;
        }
      }
  
      resultElement.innerHTML = `${temperature.toFixed(2)} ${fromUnit} is equal to ${convertedTemperature.toFixed(
        2
      )} ${toUnit}`;
    } else {
      alert("Please enter a temperature value.");
    }
  }
  