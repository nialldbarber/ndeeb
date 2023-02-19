export const PostContent = ({ content }: { content: string }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  )
}
