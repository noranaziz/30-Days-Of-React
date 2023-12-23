const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// sort array
ages.sort();

// find min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// find median age (one middle item or two middle items divided by 2)
const midAge = 0;
const midIndex = 0;
if(ages.length % 2 != 0){ // odd
    midIndex = Math.ceil(ages.length / 2);
    midAge = ages[midIndex];
} else { // even
    midIndex = ages.length / 2;
    midAge = (ages[midIndex] + ages[midIndex + 1]) / 2;
}

// find average age (all items divided by # of items)
const avgAge = (ages.reduce((x, y) => x + y, 0)) / ages.length;

// find range of ages (max minus min)
const range = maxAge - minAge;