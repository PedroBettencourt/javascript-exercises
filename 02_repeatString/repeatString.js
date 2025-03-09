const repeatString = function(name, times) {
    let repeatedName = "";

    if (times < 0) {
        return "ERROR"
    }

    for (let i = 0; i < times; i++) {
        repeatedName += name;
    }
    return repeatedName;
};

// Do not edit below this line
module.exports = repeatString;
