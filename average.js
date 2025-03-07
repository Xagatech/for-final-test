var average = function (value, min, max) {
    let total = new Object(), average = 0;
    total.valid = 0;
    total.input = 0;
    //check whether value is an array
    if (Array.isArray(value)) {
        let i = 0, sum = 0;
        while (value[i] !== -999 && total.input < 100) {
            (total.input)++;
            if (value[i] >= min && value[i] <= max) {
                (total.valid)++;
                sum = sum + value[i];
            }
            i++;
        }
        if (total.valid > 0) {
            average = sum / total.valid;
        } else {
            average = -999;
        }
    }
    return {total:total,average:average };
};
var arr1 = [1,2,3,4,5,-999]; 

console.log(average(arr1, 0, 10));

module.exports = average;
