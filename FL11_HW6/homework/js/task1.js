let Ax = prompt('enter Х of the point А');
let Ay = prompt('enter Y of the point А');
let Bx = prompt('enter Х of the point B');
let By = prompt('enter Y of the point B');
let Cx = prompt('enter Х of the point C');
let Cy = prompt('enter Y of the point А');
let answer = true;
Ax = parseFloat(Ax);
Ay = parseFloat(Ay);
Bx = parseFloat(Bx);
By = parseFloat(By);
Cx = parseFloat(Cx);
Cy = parseFloat(Cy);

if (isNaN(Ax) || isNaN(Ay) || isNaN(Bx) || isNaN(By) || isNaN(Cx) || isNaN(Cy)) {
    alert('enter the correct numbers');
}
if ((Ax+Bx)/2 === Cx && (Ay+By)/2 === Cy) {
    console.log(answer);
} else {
    answer = false;
    console.log(answer);
}