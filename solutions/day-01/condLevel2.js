// give grades to students:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
switch(grade){
    case grade >= 80:
        console.log("A");
        break;
    case grade >= 70:
        console.log("B");
        break;
    case grade >= 60:
        console.log("C");
        break;
    case grade >= 50:
        console.log("D");
        break;
    default:
        console.log("F");
}

// check season
// if sept, oct, nov -> autumn
// if dec, jan, feb -> winter
// if mar, apr, may -> spring
// if june, july, aug -> summer
const month = prompt("Enter month: ");
if(month == "september" || month == "october" || month == "november"){
    console.log("autumn");
} else if(month == "december" || month == "january" || month == "february"){
    console.log("winter");
} else if(month == "march" || month == "april" || month == "may"){
    console.log("spring");
} else {
    console.log("summer");
}

// check if day is weekend or working
const day = prompt("Enter day: ");
day = day.toLowerCase();
if(day == "saturday" || day == "sunday"){
    console.log("weekend");
} else {
    console.log("weekday");
}