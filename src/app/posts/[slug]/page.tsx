import Link from 'next/link'
import Markdown from 'markdown-to-jsx'
import getPostMetaData, { getPostContent } from '@/libs/posts'
import type { PostMetaData } from '@/libs/posts'

export const generateStaticParams = async () => {
  const posts = getPostMetaData()
  return posts.map((post) => ({
    title: post.title,
    slug: post.slug,
  }))
}

type PostParams = Pick<PostMetaData, 'slug'>

const Posts = ({ params: { slug } }: { params: PostParams }) => {
  const post = getPostContent(slug)
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{post.data.title}</h1>
      <Link href="/">GOOOOO BAAAAAACK</Link>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default Posts
