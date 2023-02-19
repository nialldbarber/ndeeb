import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import '@/app/globals.css'
import 'highlight.js/styles/default.css'

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <head />
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
)

export const PageLayout = ({ children }: RootLayoutProps) => (
  <div className="mt-20 mb-10 px-10">{children}</div>
)

export default RootLayout
