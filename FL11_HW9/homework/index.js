// 0
function getNumbers(x){
    let getNum = x.split('').filter(x => +x).map(Number);
    return getNum;
}

// 1
function findTypes(){
    let newFindTypes = Object();
    for(let i = 0; i < arguments.length; i++){
        let types = typeof arguments[i];
        if(newFindTypes.hasOwnProperty(types[i])){
            newFindTypes[types] += 1;
        }else{
            newFindTypes[types] = 1;
        }
    }return newFindTypes;
}

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

// 5
function showFormattedDate(date) {
    let magicNumberFour = 4;
	return 'Date: ' + date.toDateString().split('').splice(magicNumberFour).join(''); 
}

//6
function canConvertToDate(date) {
	return date.toDateString() !== 'Invalid Date'; 
}

// 7
function daysBetween(dateOne, dateTwo){
    let seconds = 1000;
    let minutes = 60;
    let hours = 1440;
    let difference = Math.abs(dateOne - dateTwo);
    return Math.round(difference/(seconds*minutes*hours));
}

// 8
let data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getAmountOfAdultPeople(input) {
    let old = 18;
    let daysOfYear = 365;
    let amountOfPeople = 0;
	input.filterArray(function(element) {
		let personAge = daysBetween(new Date(element[' birthday ']), Date.now()); 
		if (personAge >= old * daysOfYear) {
			amountOfPeople++;			
		}
	});
	return amountOfPeople;
}
console.log(getAmountOfAdultPeople(data));

// 9
function keys(obj){
    return Object.getOwnPropertyNames(obj);
}

// 10
function values(obj){
    let onlyValue = [];
    for (let value in obj) {
        if (obj.hasOwnProperty(value)) {
            onlyValue.push(obj[value]);
            
        }
    }
    return onlyValue;
}
