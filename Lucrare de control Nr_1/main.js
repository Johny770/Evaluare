// exercitiu 1, 2
function addition() {
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	if (isNaN(a)==true) a=0;
	if (isNaN(b)==true) b=0;
	var c = a + b;
	document.getElementById('result').innerHTML = a + " + " + b + " = " + c;
}


// exercitiu 5
var items = ['unu', 'doi', 'trei', 'patru', 'cinci'];
var ol = document.querySelector('ol');
items.forEach(function(item) {
	var li = document.createElement('li');
	li.innerHTML = item;
	ol.appendChild(li);
});


// exercitiu 12
var count = 0;
	function func() {
	var plusButton = document.getElementsByClassName("button_plus");
	if (document.onclick = plusButton) {
		count++;
		console.log(count);
		}
    };


// // // exercitiu 10 (trebuie de scos comentariu)
function loaded() {
	changeColor(); 
	var now = new Date().getTime(); 
	var remain = 5000 - (now % 5000); 
	setTimeout(function () {
		setInterval(changeColor, 5 * 500);
	}, remain);
}
function changeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
	document.body.style.backgroundColor = rgb;
}

// exercitiu 9 si 7
let arr = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
elem.innerHTML += `Crescator: ${arr.sort()}. <br>`;
const secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
secondArray.splice(4, 1);
elem.innerHTML += `Stergerea: ${secondArray}. <br>`;