function add() {
	var comments = document.getElementById("comment").value;
	document.getElementById("comment").value ="";
	var newcomments = document.createElement("div");
	var cont = document.getElementById("cont");

	var check = document.createElement("input");
	check.type = "checkbox";

	var paragraph = document.createElement("p");
	paragraph.classList.add("color");
	var nodoText=document.createTextNode(comments);
	paragraph.appendChild(nodoText);

	var heart = document.createElement("i");
	heart.classList.add("fa", "fa-heart", "heart");

	var trash = document.createElement("i");
	trash.classList.add("fa", "fa-trash", "trash");

	newcomments.appendChild(check);
	newcomments.appendChild(trash);
	newcomments.appendChild(heart);
	newcomments.appendChild(paragraph);
	cont.appendChild(newcomments);

	check.addEventListener("click", function(){
		paragraph.classList.toggle("strike-out");
	})
	trash.addEventListener("click", function(){
		cont.removeChild(newcomments);
	})
	heart.addEventListener("click", function(){
		heart.classList.toggle("red");
	})
}	