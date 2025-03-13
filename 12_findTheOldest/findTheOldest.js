function getAge(person) {
    if (!person.yearOfDeath) person.yearOfDeath = (new Date()).getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => {
        const ageCurr = getAge(curr);
        const ageOldest = getAge(oldest);
        console.log(ageOldest)
        return (ageCurr > ageOldest) ? curr : oldest;
    }
)};

// Do not edit below this line
module.exports = findTheOldest;
