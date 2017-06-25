const net = require("net");

var client = new net.Socket();
client.setEncoding("utf8"):

const port = 8080;
const server_addr = "127.0.0.1";

//connect to server
client.connect()