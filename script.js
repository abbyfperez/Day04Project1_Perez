function tapos() {
	document.querySelector("li").classList.toggle("done");
}

var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var button = document.getElementById("clearList");

button.addEventListener("click", function() {
	if (input.value.length > 0) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value = "";
	}
})

input.addEventListener("keypress", function(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value = "";
	}
})

button.addEventListener("click", function() {
	if (input.value.length > 0) {
	var li = document.deleteElement("li");
	li.appendChild(document.deleteTextNode(input.value));
	ul.appendChild(li); 
	input.value = "";
	}
})