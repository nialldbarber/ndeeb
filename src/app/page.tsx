import styles from '@/app/page.module.css'
import getPostMetaData from '@/libs/posts'
import PostPreview from '@/app/components/post-preview'

const Home = () => {
  const posts = getPostMetaData()
  return (
    <main className={styles.main}>
      {posts.map(({ title, subtitle, date, slug }) => (
        <div key={date + slug}>
          <PostPreview title={title} subtitle={subtitle} slug={slug} />
        </div>
      ))}
    </main>
  )
}

export default Home
