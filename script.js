//your JS code here. If required.
function daysOfAYear(year) {
    // Leap year rules:
    // A year is a leap year if:
    // 1. It is divisible by 4, and
    // 2. If it is divisible by 100, it must also be divisible by 400.
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366; // Leap year
    } else {
        return 365; // Non-leap year
    }
}

// Test cases
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365 (Century year, not a leap year)
console.log(daysOfAYear(2000)); // 366 (Century year, leap year)
