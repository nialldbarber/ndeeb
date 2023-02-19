import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type PostMetaData = {
  title: string
  date: string
  subtitle: string
  slug: string
}

const postsDir = join(process.cwd(), 'src', 'posts')

const getPostMetaData = (): PostMetaData[] => {
  const files = readdirSync(postsDir)
  const markdownPosts = files.filter((file) => file.endsWith('.mdx'))
  const posts = markdownPosts.map((fileName) => {
    const fileContents = readFileSync(`${postsDir}/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.mdx', ''),
    }
  })
  return posts
}

export const getPostContent = (slug: string) => {
  const content = readFileSync(`${postsDir}/${slug}.mdx`, 'utf8')
  return content
}

export const markdownToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export default getPostMetaData
