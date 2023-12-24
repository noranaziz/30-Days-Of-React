// declare function fullName that takes firstName, lastName
// as params and returns full name
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

// declare function addNumbers that takes two params and returns sum
function addNumbers(num1, num2){
    return num1 + num2;
}

// declare function areaOfCircle
function areaOfCircle(r){
    return Math.PI * r * r;
}

// declare function convertCToF
function convertCToF(celcius){
    return (celcius * 9/5) + 32;
}

// declare function calcBMI
function calcBMI(weight, height){
    const bmi = weight / (height * height);
    if(bmi < 18.5){
        return "underweight";
    } else if(bmi < 25){
        return "normal weight";
    } else if(bmi < 30){
        return "overweight";
    } else {
        return "obese";
    }
}

// declare function checkSeason
function checkSeason(month){
    if(month == "september" || month == "october" || month == "november"){
        console.log("autumn");
    } else if(month == "december" || month == "january" || month == "february"){
        console.log("winter");
    } else if(month == "march" || month == "april" || month == "may"){
        console.log("spring");
    } else {
        console.log("summer");
    }
}