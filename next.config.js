/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["instagram.fssa2-1.fna.fbcdn.net"],
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./src/i18n.ts"
);

module.exports = withNextIntl({
  // Other Next.js configuration ...
});

module.exports = withNextIntl(nextConfig);
