import OAuth2Login from 'react-simple-oauth2-login';

const onSuccess = (response) => console.log(response);
const onFailure = (response) => console.error(response);

const Login = () => {
	return (
		<OAuth2Login
			authorizationUrl='https://twitter.com/i/oauth2/authorize'
			responseType='code'
			clientId={process.env.REACT_APP_CLIENT_ID}
			redirectUri='http://localhost:3000/success'
			scope='tweet.read'
			extraParams={{ state: 'state', code_challenge: 'challenge', code_challenge_method: 'plain' }}
			onSuccess={onSuccess}
			onFailure={onFailure}
		/>
	);
};

export default Login;
