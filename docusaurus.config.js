// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Turkey DAO Investigations',
  tagline: 'Foul Play Demands Fowl Action ',
  favicon: 'img/favicon.ico',
  customFields: {
    description: 'Free Range Interchain Detective Agency (FRIDA)',
  },

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/investigations/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Turkey-DAO', // Usually your GitHub org/user name.
  projectName: 'investigations', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Turkey-DAO/investigations/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Turkey-DAO/investigations/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'Turkey DAO Investigates',
        logo: {
          alt: 'Turkey DAO Logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/blog', label: 'Incidents', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'recordsSidebar',
            position: 'left',
            label: 'Records',
          },
          {
            href: 'https://twitter.com/theTurkeyDAO',
            label: 'Report Something',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Categories',
            items: [
              {
                label: 'Incidents',
                to: '/blog',
              },              
              {
                label: 'Records',
                to: '/docs',
              },
              {
                label: 'Contribute',
                href: 'https://github.com/Turkey-DAO/investigations/',
              }
            ],
          },
          {
            title: 'Socials',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/theturkeydao',
              },
            ],
          }
        ],
        copyright: `Turkey DAO is a Totally Legimitate Organization. All Bird Law Rights Reserved. `,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
