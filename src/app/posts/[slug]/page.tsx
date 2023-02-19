import Link from 'next/link'
import getPostMetaData, { getPostContent, markdownToHtml } from '@/libs/posts'
import type { PostMetaData } from '@/libs/posts'
import { PostContent } from '@/app/components/post-content'
import { PageLayout } from '@/app/layout'

export const generateStaticParams = async () => {
  const posts = getPostMetaData()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

type PostParams = Pick<PostMetaData, 'slug'>

const Posts = async ({ params: { slug } }: { params: PostParams }) => {
  const post = getPostContent(slug)
  const content = await markdownToHtml(post || '')
  return (
    <PageLayout>
      <h1 className="text-3xl font-bold underline">hello</h1>
      <Link href="/">GOOOOO BAAAAAACK</Link>
      <article>
        <PostContent content={content} />
      </article>
    </PageLayout>
  )
}

export default Posts
