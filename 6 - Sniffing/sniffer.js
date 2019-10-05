const pcap = require('pcap');
const fs = require('fs');

module.exports = (interface, callback) => {
	var session = pcap.createSession(interface, "");
	session.on('packet', function (raw_packet) {
		try {
			var packet = pcap.decode.packet(raw_packet);
			var tcp = packet.payload.payload.payload;
			var data = tcp && tcp.data && tcp.data.toString('utf8');
			if(data) {
				callback(data);
			}
		} catch(error) {
			console.log(error);
		}
	});
}
