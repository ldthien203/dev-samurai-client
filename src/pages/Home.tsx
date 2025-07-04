import TitleSection from './Home/components/TitleSection/TitleSection'
import SidebarSection from './Home/components/SidebarSection/SidebarSection'
import DiagonalLineSection from './Home/components/DiagonalLineSection/DiagonalLineSection'
import FeatureSection from './Home/components/FeatureSection/FeatureSection'
import Testimonials from './Home/components/Testimonials/Testimonials'
import QuestionSection from './Home/components/QuestionSection/QuestionSection'
import ApplySection from './Home/components/ApplySection/ApplySection'

const Home = () => {
  return (
    <>
      <TitleSection />
      <SidebarSection />
      <DiagonalLineSection />
      <FeatureSection />
      <Testimonials />
      <QuestionSection />
      <ApplySection />
    </>
  )
}

export default Home
