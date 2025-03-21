const sumAll = function(num1, num2) {
    let finalSum = 0;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num1 !== parseInt(num1) || num2 !== parseInt(num2)) {
        return "ERROR";
    }

    if (num1 > num2) {
        for (i = num2; i <= num1; i++) {
            finalSum += i;
        } 
        return finalSum;
    }

    for (i = num1; i <= num2; i++) {
        finalSum += i;
    } 

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
