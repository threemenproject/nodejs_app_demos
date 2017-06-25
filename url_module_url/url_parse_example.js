//url parse
const url = require("url");

var urlObj = url.parse("http://examples.burningbird.net:8124/?file=main");

console.log(urlObj);

var qs = urlObj.query;
console.log(qs);

//reverse
console.log(url.format(urlObj));

//query string usually being used with url
console.log("\n\n");
const querystring = require("querystring");
var vals = querystring.parse("file=main&file=secondary&type=html");
console.log(vals);
console.log("arg1 : " + vals.file[0] + " , arg2 : " + vals.file[1]);