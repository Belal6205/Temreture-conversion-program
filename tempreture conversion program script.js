const number = document.getElementById("number");
const fahrenheit = document.getElementById("fahrenheite");
const celsius = document.getElementById("Celsius");
const result = document.getElementById("result");

function convert() {
    let temperature = Number(number.value);
    let convertedTemp;
    
    if (fahrenheit.checked) {
        // Celsius to Fahrenheit conversion
        convertedTemp = (temperature * 9/5) + 32;
        result.textContent = convertedTemp.toFixed(1) + " °F";
    }
    else if (celsius.checked) {
        // Fahrenheit to Celsius conversion
        convertedTemp = (temperature - 32) * (5/9);
        result.textContent = convertedTemp.toFixed(1) + " °C";
    }
    else {
        result.textContent = "Select a unit";
    }
}