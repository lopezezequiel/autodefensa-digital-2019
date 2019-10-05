chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(request.data),
        headers:{
            'Content-Type': 'application/json'
        }
    }

    fetch(request.url, options)
        .then(data => sendResponse({
            data: request.data
        }))
        .catch(error => sendResponse({
            error
        }));
});