// quadratic equation
function solveQuadratic(a, b, c){
    let root1, root2;
    let discriminant = b * b - 4 * a * c;
    if(discriminant > 0){
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `${root1}, ${root2}`;
    } else if(discriminant == 0){
        root1 = root2 = -b / (2 * a);
        return `${root1}, ${root2}`;
    } else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        return `${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
    }
}

// declare function printArray that takes array as param
// and prints each val of array
function printArray(array){
    for(const val in array){
        console.log(val);
    }
}

// declare function showDateTime which shows time in this
// format: MM/DD/YYYY HH:MM using date object
function showDateTime(){
    const month = Date.getMonth();
    const date = Date.getDate();
    const year = Date.getFullYear();
    const hour = Date.getHours();
    const minutes = Date.getMinutes();
    return `${month}/${date}/${year} ${hour}:${minutes}`;
}

// declare function swapValues which swaps value of x to y
function swapValues(x, y){
    let temp = x;
    x = y;
    y = temp;
}

// declare function reverseArray which takes array as param
// and returns reverse of array
function reverseArray(array){
    const newArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

// declare function addItem which takes an item param and
// returns array after adding item
function addItem(array, item){
    array.push(item);
    return array;
}

// declare function removeItem which takes index param and
// returns array after removing item
function removeItem(array, index){
    array.splice(index, 1);
    return array;
}