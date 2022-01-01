import { Buffer } from 'buffer';

async function getTweets(userID, accessCode) {
	const response = await fetch(`https://api.twitter.com/2/users/${userID}/tweets`, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		mode: 'no-cors', // no-cors, *cors, same-origin
		// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		// credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			// Authorization: `Bearer ${accessCode}`,
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		// redirect: 'follow', // manual, *follow, error
		// referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		// body: JSON.stringify(data), // body data type must match "Content-Type" header
	});
	console.log(response);
	return response;
}

async function getAccessToken(authorizationCode) {
	const basicAuth = Buffer.from(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`).toString(
		'base64'
	);
	// const basicAuth = btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`);
	console.log(basicAuth);
	const body = new URLSearchParams({
		code: authorizationCode,
		grant_type: 'authorization_code',
		client_id: process.env.REACT_APP_CLIENT_ID,
		client_secret: process.env.REACT_APP_CLIENT_SECRET,
		redirect_uri: 'http://localhost:3000/success',
		code_verifier: 'challenge',
	});
	let response = await fetch('https://api.twitter.com/2/oauth2/token', {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			Authorization: `Basic ${basicAuth}`,
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: body.toString(),
	});
	response = response.json();
	console.log(response);
	return response;
}

const Success = () => {
	const params = new URLSearchParams(window.location.search);
	const authorizationCode = params.get('code');
	getAccessToken(authorizationCode);
	return (
		<div>
			<hi>Success</hi>
			<div>Authorization Code: {authorizationCode}</div>
			<button onClick={() => getTweets('14337705', authorizationCode)}>Get Tweets</button>
			<button onClick={() => getAccessToken(authorizationCode)}>Get Access Token</button>
		</div>
	);
};

export default Success;
