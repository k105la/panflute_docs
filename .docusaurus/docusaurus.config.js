export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "PanFLUte",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/installation",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://github.com/COVID-19-electronic-health-system/PanFLUte",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "light",
      "links": [
        {
          "title": "DOCS",
          "items": [
            {
              "label": "Installation",
              "to": "docs/installation"
            },
            {
              "label": "API Referance",
              "to": "docs/api"
            },
            {
              "label": "FAQ",
              "to": "docs/faq"
            }
          ]
        },
        {
          "title": "CHANNELS",
          "items": [
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          "title": "COMMUNITY",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/COVID-19-electronic-health-system"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 My Project, Inc. Built with Docusaurus."
    }
  },
  "title": "PanFLUte",
  "tagline": "An open source spirometer for everyone.",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "favicon": "img/logo.svg",
  "organizationName": "COVID-19-electronic-health-system",
  "projectName": "panflute_docs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/akilhyltonel/Desktop/panflute_docs/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "theme": {
          "customCss": "/Users/akilhyltonel/Desktop/panflute_docs/src/css/custom.css"
        }
      }
    ]
  ]
};