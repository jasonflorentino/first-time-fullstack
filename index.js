const express = require('express');
const app = express();
app.listen(3000, () => console.log('Listening at 3000...'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.post('/api', (request, response) => {
	console.log("I got a request!");
	console.log(request.body);
	response.json({
		reply: 'Got your message!',
		message: request.body
	});
	console.log("Sent a response!");
});
