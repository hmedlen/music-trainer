// On Card Load
function onCardLoad() {
	console.log("card loaded");
}

var targetObj = {};
// var handler1 = 
var targetProxy = new Proxy(targetObj, {
	set: function (target, key, value) {
		console.log(`${key} set to ${value}`);
		target[key] = value;
		return true;
	}
});


const handler = {
	get: function(obj, prop) {
	  return prop in obj ?
		obj[prop] :
		37;
	}
};

// const p = new Proxy({}, handler);
// p.a = 1;
// p.b = undefined;

// console.log(p.a, p.b); 
// //  1, undefined

// console.log('c' in p, p.c); 
// //  false, 37

targetProxy.hello_world = "test";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function changeTheVariable() {
//     p['a'] ==
// }