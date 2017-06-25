const dns = require("dns");


dns.lookup("burningbird.net", function (err, ip) {
	if(err) throw err;
	console.log(ip);
});

dns.reverse("173.255.206.103", function (err, domains) {
	domains.forEach(function(domain) {
		console.log("domain name was : " + domain);
	});
});

dns.resolve("burningbird.net", "NS", function (err, domains) {
	if(err) throw err;
	domains.forEach(function (domain) {
		console.log(domain);
	});
});