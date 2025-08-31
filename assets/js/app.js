// Problem 4: Time Format Validator 
function timeFormat (hours , minutes) {

    if ( (hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59)) return true;

    else return false;
}

console.log(timeFormat(14,30)); 

console.log("===========================================");

// Problem 6: BMI Category Calculator 
function BMI_calc (weight ,height) {
    if (weight <=0 || height <= 0) {
        return "Invalid inputs";
    }
    let BMI = weight / (height * height) ; 
    if (BMI < 18.5) {
        return "UnderWeight";
    }
    else if (BMI >=18.5 && BMI <= 24.9) {
        return "Normal";
    }
    else if (BMI >=25 && BMI <= 29.9) {
        return "Overweight";
    }
    else if (BMI >= 30) {
        return "Obese";
    }
}
console.log(BMI_calc(70,1.75));

console.log("===========================================");

// Problem 11: Roman Numeral Digit Converter 
function Convert_number (num) {
    if (num < 1 || num > 9) return "invalid";
    if (num == 1) return "I"
    else if (num === 2) return "II"
    else if (num === 3) return "III"
    else if (num === 4) return "IV"
    else if (num === 5) return "V"
    else if (num === 6) return "VI"
    else if (num === 7) return "VII"
    else if (num === 8) return "VIII"
    else if (num === 9) return "IX"
}

console.log(Convert_number(7));

console.log("===========================================");

// Problem 13: Advanced Leap Year with Century Rules 




// Problem 14: Multi-Currency Price Calculator 

function PriceConverter (usdAmount,currency) {
    let convertedAmount;
    let tax; 
    if (currency === 'EUR') {
        convertedAmount = usdAmount * 0.85;
        tax = 0.2;   
    }
    else if (currency === 'GBP') {
        convertedAmount = usdAmount * 0.73;
        tax = 0.175; 
    }
    else if (currency === 'JPY') {
        convertedAmount = usdAmount * 110;
        tax = 0.08; 
    }
    // ConvertedAmount after tax 
    let result = (convertedAmount * ( 1 + tax )).toFixed(1);
    // convertedAmount + (convertedAmount * taxRate);
    return result ;
}

console.log(PriceConverter(100,'EUR'));
console.log(PriceConverter(100,'JPY'));
console.log(PriceConverter(100,'GBP'));