import Header from './Header'
import Footer from './Footer'

type TMainLayoutProps = {
  path: string
  children: React.ReactNode
}

const MainLayout = ({ path, children }: TMainLayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
