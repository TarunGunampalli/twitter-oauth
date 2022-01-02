import NextAuth from 'next-auth';

export default NextAuth({
	secret: process.env.SECRET,
	providers: [
		// OAuth authentication providers
		{
			id: 'twitter',
			name: 'Twitter',
			type: 'oauth',
			authorization: 'https://twitter.com/i/oauth2/authorize',
			token: 'https://api.twitter.com/2/oauth2/token',
			// userinfo: 'https://kapi.kakao.com/v2/user/me',
			// profile(profile) {
			// 	return {
			// 		id: profile.id,
			// 		name: profile.kakao_account?.profile.nickname,
			// 		email: profile.kakao_account?.email,
			// 		image: profile.kakao_account?.profile.profile_image_url,
			// 	};
			// },
		},
	],
});
