var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var list = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}//returns lenght of text input in text box

function addlistClick() {
	if (inputLength() > 0) {
		newli();
	}
}//to add new list item on click

function addlistKeypress(event) {
	if(event.keyCode === 13 && inputLength() > 0) {
		newli();
	}
}//to add new list item on "enter"

function newli() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		list.appendChild(li);
		input.value = "";
		li.classList.add("change");
		li.addEventListener("click",function() {
			var finished = this.classList.toggle("done");
			var btn = document.createElement("button");
			if (finished) {
				btn.appendChild(document.createTextNode("Remove!"));
				li.appendChild(btn);
				btn.classList.add("btn");
				btn.onclick = removeParent;
			}
		})
}//to create new list element with a delete button
 //to check an item in the list

function removeParent(del) {
	del.target.removeEventListener("click", removeParent, false);
	del.target.parentNode.remove();
}//to delete a list item

input.addEventListener("keypress", addlistKeypress);

button.addEventListener("click", addlistClick);