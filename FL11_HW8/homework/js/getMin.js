function getMin() {
    let minArgument = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < minArgument) {
        minArgument = arguments[i];
        }
    }
    return minArgument;
}
getMin();