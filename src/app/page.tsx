import getPostMetaData from '@/libs/posts'
import PostPreview from '@/app/components/post-preview'

const Home = () => {
  const posts = getPostMetaData()
  return (
    <main className="flex flex-col justify-between items-center p-24 min-h-screen">
      {posts.map(({ title, subtitle, date, slug }) => (
        <div key={date + slug}>
          <PostPreview title={title} subtitle={subtitle} slug={slug} />
        </div>
      ))}
    </main>
  )
}

export default Home
