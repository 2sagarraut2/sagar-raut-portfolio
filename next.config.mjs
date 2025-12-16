const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static exports
  basePath: "/sagar-raut-portfolio", // Replace with your repository name
  assetPrefix: "/sagar-raut-portfolio/", // Replace with your repository name
  images: {
    unoptimized: true, // Required as GitHub Pages does not support Next.js image optimization
  },
};

export default nextConfig;
