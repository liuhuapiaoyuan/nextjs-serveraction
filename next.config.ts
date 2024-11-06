import createMDX from '@next/mdx';
import type { NextConfig } from "next";



const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

};

const withMDX = createMDX({

  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)

