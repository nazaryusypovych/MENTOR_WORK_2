fetch('http://localhost:3000/city', {
    method: 'POST',
    body: JSON.stringify({
        name: `fffffff`
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((city) => console.log(city))