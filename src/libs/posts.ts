import { readdirSync, readFileSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type PostMetaData = {
  title: string
  date: string
  subtitle: string
  slug: string
}

const postsDir = path.join(process.cwd(), 'src', 'posts')

const getPostMetaData = (): PostMetaData[] => {
  const files = readdirSync(postsDir)
  const markdownPosts = files.filter((file) => file.endsWith('.md'))
  const posts = markdownPosts.map((fileName) => {
    const fileContents = readFileSync(`${postsDir}/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    }
  })
  return posts
}

export const getPostContent = (slug: string) => {
  const content = readFileSync(`${postsDir}/${slug}.md`, 'utf8')
  return matter(content)
}

export default getPostMetaData
