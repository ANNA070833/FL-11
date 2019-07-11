function formatTime(userNum) {
    let magicNumOne = 1440;
    let magicNumTwo = 60;
    let numDays = Math.trunc(userNum/magicNumOne);
    let numHours = Math.trunc(userNum % magicNumOne / magicNumTwo);
    let numMinutes = (userNum % magicNumOne) % magicNumTwo;
    return (`${numDays} day(s) ${numHours} hour(s) ${numMinutes} minute(s).`);
}
formatTime();