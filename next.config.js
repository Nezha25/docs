const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
});

/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
basePath: "/docs",
output: 'export',
reactStrictMode: true,
};

module.exports = {
...withNextra(),
basePath: '/docs',
output: 'export',
images: { unoptimized: true },
}