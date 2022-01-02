import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';

export default NextAuth({
	secret: process.env.SECRET,
	providers: [
		{
			id: 'twitter',
			name: 'Twitter',
			type: 'oauth',
			version: '2.0',
			authorization: {
				url: 'https://twitter.com/i/oauth2/authorize',
				params: {
					scope: ['users.read', 'tweet.read', 'offline.access'].join(' '),
					code_challenge: 'challenge',
					code_challenge_method: 'plain',
				},
			},
			token: {
				url: 'https://api.twitter.com/2/oauth2/token',
				params: {
					grant_type: 'authorization_code',
					redirect_uri: 'http://localhost:3000/api/auth/callback/twitter',
					code_verifier: 'challenge',
					client_id: process.env.TWITTER_CLIENT_ID,
					client_secret: process.env.TWITTER_CLIENT_SECRET,
				},
			},
			clientId: process.env.TWITTER_CLIENT_ID,
			clientSecret: process.env.TWITTER_CLIENT_SECRET,
			// userinfo: 'https://api.twitter.com/2/users/me',
			profile(profile) {
				// console.log(profile);
				return {
					// id: profile.id,
					profile: profile,
					// name: profile.kakao_account?.profile.nickname,
					// email: profile.kakao_account?.email,
					// image: profile.kakao_account?.profile.profile_image_url,
				};
			},
		},
		// TwitterProvider({
		// 	clientId: process.env.TWITTER_CLIENT_ID,
		// 	clientSecret: process.env.TWITTER_CLIENT_SECRET,
		// }),
	],
});
