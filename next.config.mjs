import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'

import rehypeStringify from 'rehype-stringify'
import rehypeHighlight from 'rehype-highlight'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkHtml, remarkParse, remarkRehype],
    rehypePlugins: [rehypeHighlight, rehypeStringify],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
}

export default withMDX(nextConfig)
