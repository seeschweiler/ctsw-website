export const SITE = {
	name: 'CodingTheSmartWay',

	origin: 'https://codingthesmartway.com',
	basePathname: '/',

	title: 'CodingTheSmartWay.com',
	description: 'Development tutorials and step-by-step guides.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const SWITCHES = {
	youtubeLinks: true,
	affiliateLinks: true,
}

export const BLOG = {
	disabled: false,
	postsPerPage: 5,

	blog: {
		disabled: false,
		pathname: '', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
