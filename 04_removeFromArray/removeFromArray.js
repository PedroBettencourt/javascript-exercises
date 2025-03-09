const removeFromArray = function(array, ...args) {
    newArray = []

    element: for (i of array) {
        for (j of args) {
            if (j === i) {
                continue element;
            }  
        }
        newArray.push(i);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
