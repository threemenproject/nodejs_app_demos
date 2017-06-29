/*
var io = require("socket.io-client");
var socket = io.connect("http://127.0.0.1:8124");

socket.on("news", function (data) {
	console.log("Get data from server : " + data.news);
	socket.emit("echo", {back : data.news});
});

process.stdin.resume();

process.stdin.on("data", function(chunk) {
	socket.send
})
*/
var io = require("socket.io-client");

var socket = io.connect("http://localhost:8124");

socket.on("connect", function (){
	socket.emit("addme", prompt("Who are you?"));
});

socket.on("chat", function(username, data) {
	var p = document.createElement("p");
	p.innerHTML = username + " :  " + data;
	document.getElementById("output").appendChild(p);
});

window.addEventListener("load", function() {
	document.getElementById("sendtext").addEventListener("click", function() {
		var text = document.getElementById("data").value;
		socket.emit("sendchat", text);
	}, false);
}, false);
