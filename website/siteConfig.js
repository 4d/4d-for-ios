/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    //caption: 'dazancot',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'img/logo4DforiOS.png',
    infoLink: 'https://blog.4d.com/author/david/',
    pinned: true,
  },
];

const siteConfig = {
  title: '4D for iOS' /* title for your website */,
  tagline: 'Easily create and deploy custom native iOS apps',
  url: 'https://4D.github.io' /* your website url */,
  baseUrl: '/4d-for-ios/' /* base url for your project */,

  // Used for publishing and more
  projectName: '4d-for-ios',
  organizationName: '4D',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'overview', label: 'Docs'},
    {doc: 'contact-app', label: 'Tutorials'},
    {doc: 'faq', label: 'FAQ'},
    {href: "http://www.4d.com", label: '4D'},


   // {doc: 'docindex', label: 'API'},
   // {page: 'help', label: 'Help'},
    //{blog: 'true', label: 'Blog'},
    {search: true},
  ],

algolia: {
    apiKey: 'a00a6f38bb6849ff2b47dad3fcfceaa0',
    indexName: 'davaz4d',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: '',
  footerIcon: '',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#0f949b', 
    secondaryColor: '#0f949b',
  },

  editUrl: 'https://github.com/4D/4D-for-iOS/edit/17R2/docs/',


  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' 4D SAS',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'dark',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/logo4DforiOS.png',
  twitterImage: 'img/logo4DforiOS.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
