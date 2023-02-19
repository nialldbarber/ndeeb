import Link from 'next/link'

const socials = [
  { id: 'socials1', name: 'Github', link: 'https://github.com/nialldbarber/' },
  {
    id: 'socials2',
    name: 'Instagram',
    link: 'https://www.instagram.com/nialldbarber/',
  },
  {
    id: 'socials3',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/niall-barber/',
  },
]

export const Footer = () => {
  return (
    <footer className="fixed flex bottom-2 right-0">
      {socials.map(({ id, name, link }) => (
        <div key={id} className="px-2">
          <Link href={link} target="_blank">
            <p>{name}</p>
          </Link>
        </div>
      ))}
    </footer>
  )
}
