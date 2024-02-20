const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true
});

module.exports = withNextra({
  async redirects() {
    return [
      {
        source: "/cross-chain-communication/integrations",
        destination: "/cross-chain-communication/active-development",
        permanent: true // or false if the redirect is temporary
      }
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }
    return config;
  }
});
