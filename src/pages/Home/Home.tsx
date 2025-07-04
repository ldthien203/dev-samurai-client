import TitleSection from './components/TitleSection/TitleSection'
import SidebarSection from './components/SidebarSection/SidebarSection'
import DiagonalLineSection from './components/CollabSection/CollabSection'
import FeatureSection from './components/FeatureSection/FeatureSection'
import ChartSection from './components/ChartSection/ChartSection'
import Testimonials from './components/Testimonials/Testimonials'
import QuestionSection from './components/QuestionSection/QuestionSection'
import ApplySection from './components/ApplySection/ApplySection'

const Home = () => {
  return (
    <>
      <TitleSection />
      <SidebarSection />
      <DiagonalLineSection />
      <FeatureSection />
      <ChartSection />
      <Testimonials />
      <QuestionSection />
      <ApplySection />
    </>
  )
}

export default Home
