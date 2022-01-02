import NextAuth from 'next-auth';

export default NextAuth({
	providers: [
		// OAuth authentication providers
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
			token: 'https://api.twitter.com/2/oauth2/token',
			clientId: process.env.TWITTER_ID,
			clientSecret: process.env.TWITTER_SECRET,
			userinfo: 'https://api.twitter.com/2/users/me',
			profile(profile) {
				return {
					id: profile.id,
					profile: profile,
					// name: profile.kakao_account?.profile.nickname,
					// email: profile.kakao_account?.email,
					// image: profile.kakao_account?.profile.profile_image_url,
				};
			},
		},
	],
});
