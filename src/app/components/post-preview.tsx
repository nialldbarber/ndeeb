import Link from 'next/link'
import type { PostMetaData } from '@/libs/posts'

type PostPreviewProps = Pick<PostMetaData, 'title' | 'subtitle' | 'slug'>

const PostPreview = ({ title, subtitle, slug }: PostPreviewProps) => {
  return (
    <Link href={`/posts/${slug}`}>
      <div className="border-solid border-2 border-sky-500">
        <h2 className="text-2xl">{title}</h2>
        <p>{subtitle}</p>
      </div>
    </Link>
  )
}

export default PostPreview
