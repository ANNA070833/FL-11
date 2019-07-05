let a = prompt('enter length of side А');
let b = prompt('enter length of side B');
let c = prompt('enter length of side C');
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

if (isNaN(a) || 
    isNaN(b) || 
    isNaN(c)){
        alert('enter the correct numbers');
} else {
    if (a+b <= c || a+c <= b || c+b <= a) {
        alert('Triangle doesnt exist');
    } else {
    if (a === b && b === c) {
        alert('Eequivalent triangle');
    } else {
        if (a === b || c === b || a === c) {
                alert('Isosceles triangle');
            } else {
                alert('Normal triangle');
            }
        }
    }
}