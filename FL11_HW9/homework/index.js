// 0
function getNumbers(x){
    let getNum = x.split('').filter(x => +x).map(Number);
    return getNum;
}
getNumbers();

// 2
function executeforEach(array, fn) {
	for(let index of array) {
		fn(index);
	}
}

// 3 
function mapArray(array, fn) {
	let newMapArray = [];
    array.forEach(function(el) {
	newMapArray.push(fn(el))
	});
	return newMapArray;
}

// 4
function filterArray(array, fn) {
	let newfilterArray = [];
    array.forEach(function(el) {
        if (fn(el)) {
            newfilterArray.push(el);
        }
	});
	return newfilterArray;
}