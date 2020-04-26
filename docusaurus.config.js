module.exports = {
  title: 'PanFLUte',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'panflute_docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PanFLUte',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/COVID-19-electronic-health-system/PanFLUte',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'DOCS',
          items: [
            {
              label: 'Installation',
              to: 'docs/installation',
            },
            {
              label: 'API Referance',
              to: 'docs/api',
            },
            {
              label: 'FAQ',
              to: 'docs/faq',
            }
          ],
        },
        {
          title: 'CHANNELS',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'COMMUNITY',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/COVID-19-electronic-health-system',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
