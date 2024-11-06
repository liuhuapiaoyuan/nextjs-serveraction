import createMDX from '@next/mdx';
import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";

import rehypeHighlight from "rehype-highlight";


const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

};

const withMDX = createMDX({

  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
})

export default withMDX(nextConfig)

