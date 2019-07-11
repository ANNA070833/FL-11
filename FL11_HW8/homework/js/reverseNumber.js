function reverseNumber(num) {
    let reverseNum = Math.abs(num)
        .toString()
        .split('')
        .reverse()
        .join('');
    return num > 0 ? +reverseNum : -reverseNum;
}
reverseNumber();