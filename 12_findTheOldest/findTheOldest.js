const findTheOldest = function(arr) {
    let oldestAge = 0;
    let oldest;
    arr.forEach((person, index) => {
        // for each person...calculate their age
        let age;
        // if a person doesn't have a death date, use todays year
        if (!person.yearOfDeath) {
            age = 2025 - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > oldestAge) {
            oldestAge = age;
            oldest = person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
