import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <h1 className="fixed top-0 left-0 text-6xl">
        <Link href="/">ndeeb</Link>
      </h1>
    </header>
  )
}
