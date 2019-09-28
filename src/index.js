module.exports = function multiply(first, second) {
    let firstArr = first.split('').reverse();
    let secondArr = second.split('').reverse();
    let fullArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (fullArr[i + j]) {
                fullArr[i + j] += firstArr[i] * secondArr[j];
            } else {
                fullArr[i + j] = firstArr[i] * secondArr[j];
            }

        }
    }


    for (let i = 0; i < fullArr.length; i++) {
        let num = fullArr[i] % 10;
        let subnum = Math.floor(fullArr[i] / 10);
        fullArr[i] = num;
        if (fullArr[i + 1]) {
            fullArr[i + 1] += subnum;
        } else if (subnum !== 0) {
            fullArr[i + 1] = subnum;
        }
    }

    return fullArr.reverse().join('');
}