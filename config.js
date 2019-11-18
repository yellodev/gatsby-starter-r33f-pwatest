module.exports = {
  siteTitle: 'PWA Test', // <title>
  manifestName: 'r33f',
  manifestShortName: 'Kiiwi', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#DDDDDD',
  manifestThemeColor: '#DDDDDD',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/kiiwi_icon.png',
  pathPrefix: `/gatsby-starter-r33f-pwatest/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'Vince Reef',
  subHeading: 'Full time Web Developer.',
  // social
  socialLinks: [
    {
      style: 'brands',
      icon: 'fa-github',
      name: 'Github',
      url: 'https://github.com/',
    },
    {
      style: 'brands',
      icon: 'fa-twitter',
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
    {
      style: 'solid',
      icon: 'fa-envelope',
      name: 'Email',
      url: 'mailto:test@example.com',
    },
  ],
};
