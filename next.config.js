/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
  // Add this to handle TinaCMS admin properly
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
}

// module.exports = nextConfig
module.exports = {
  // Other configurations...
  nextConfig,
  css: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
