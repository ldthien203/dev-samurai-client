import { FiBox, FiPlay, FiCalendar, FiFilm } from 'react-icons/fi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { Button } from '@/components/ui/button'

const TitleSection = () => {
  return (
    <section className="border-l border-r mt-20 pb-10 px-4 sm:px-6 lg:px:8">
      <h1 className="scroll-m-20 text-center text-6xl lg:text-4xl sm:text-3xl font-extrabold tracking-tight text-balance">
        Your revolutionary Next.js SaaS
      </h1>
      <p className="leading-7 text-center text-gray-500 mt-4 mb-6 max-w-2xl mx-auto">
        This is a demo application built with Achromatic. It will save you time
        and effort building your next SaaS.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
        <Button>Start for free</Button>
        <Button variant="outline">Talk to sales</Button>
      </div>
      <ul className="flex flex-row justify-center gap-5 pt-10 text-sm sm:text-base">
        <li className="flex flex-row gap-2 justify-between items-center">
          <span>
            <FiBox />
          </span>
          Feature 1
        </li>
        <li className="flex flex-row gap-2 justify-between items-center">
          <span>
            <FiPlay />
          </span>
          Feature 2
        </li>
        <li className="flex flex-row gap-2 justify-between items-center">
          <span>
            <FiCalendar />
          </span>
          Feature 3
        </li>
        <li className="flex flex-row gap-2 justify-between items-center">
          <span>
            <FiFilm />
          </span>
          Feature 4
        </li>
        <li className="flex flex-row gap-2 justify-between items-center">
          <span>
            <IoDocumentTextOutline />
          </span>
          Feature 5
        </li>
      </ul>
    </section>
  )
}

export default TitleSection
