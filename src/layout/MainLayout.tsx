import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

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
