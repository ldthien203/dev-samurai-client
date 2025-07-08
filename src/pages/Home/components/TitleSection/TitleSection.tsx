import { FiBox, FiPlay, FiCalendar, FiFilm } from 'react-icons/fi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import { ReactNode, useState } from 'react'
import { NavLink } from 'react-router'
import { FaChevronRight } from 'react-icons/fa6'
import { ROOT_PATH } from '@/constants/path'
import feature1 from '@/assets/images/features/feature1.webp'
import feature2 from '@/assets/images/features/feature2.webp'
import feature3 from '@/assets/images/features/feature3.webp'
import feature4 from '@/assets/images/features/feature4.webp'
import feature5 from '@/assets/images/features/feature5.webp'

const features: { label: string; icon: ReactNode; image: string }[] = [
  {
    label: 'Feature 1',
    icon: <FiBox />,
    image: feature1,
  },
  {
    label: 'Feature 2',
    icon: <FiPlay />,
    image: feature2,
  },
  {
    label: 'Feature 3',
    icon: <FiCalendar />,
    image: feature3,
  },
  {
    label: 'Feature 4',
    icon: <FiFilm />,
    image: feature4,
  },
  {
    label: 'Feature 5',
    icon: <IoDocumentTextOutline />,
    image: feature5,
  },
]

const TitleSection = () => {
  const [activeImg, setActiveImg] = useState(features[0].image)

  return (
    <section className="border-l border-r pt-20">
      <div className="flex items-center justify-center py-4">
        <NavLink
          to="#"
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
        >
          <div className="flex border items-center border-gray-300 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 bg-white shadow-sm hover:shadow-md hover:bg-gray-100 transition-shadow duration-200">
            <div className="text-blue-600 font-semibold mr-2">New!</div>
            <div
              data-orientation="vertical"
              role="none"
              className="shrink-0 bg-gray-300 h-4 w-px mx-2"
            ></div>
            <span className="flex items-center gap-1">
              Put an announcement here 🎉
              <FaChevronRight className="ml-1 text-gray-500" />
            </span>
          </div>
        </NavLink>
      </div>
      <h1 className="mt-6 text-center text-[48px] font-bold leading-[54px] tracking-[-1.2px] [font-kerning:none] sm:text-[56px] md:text-[64px] lg:text-[76px] lg:leading-[74px] lg:tracking-[-2px]">
        Your revolutionary
        <br />
        Next.js SaaS
      </h1>
      <p className="mx-auto mt-3 max-w-[560px] text-balance text-center text-lg leading-[26px] text-muted-foreground sm:text-xl lg:mt-6">
        This is a demo application built with Achromatic. It will save you time
        and effort building your next SaaS.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center my-6">
        <Button className="cursor-pointer">
          <NavLink to={ROOT_PATH.SIGN_UP}>Start for free</NavLink>
        </Button>
        <Button variant="outline" className="cursor-pointer">
          Talk to sales
        </Button>
      </div>
      <ul className="flex flex-row justify-center gap-5 pt-10 text-sm sm:text-base">
        {features.map((feature) => (
          <li
            key={feature.label}
            onClick={() => setActiveImg(feature.image)}
            className={`flex flex-row gap-2 justify-between items-center select-none cursor-pointer py-2 ${
              activeImg === feature.image
                ? 'text-black border-b border-black dark:text-white dark:border-white'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <span>{feature.icon}</span>
            {feature.label}
          </li>
        ))}
      </ul>
      <div className="relative z-20 bg-background p-1">
        <img
          src={activeImg}
          alt="Feature screenshot"
          className="border rounded-sm select-none mt-10"
        />
      </div>
    </section>
  )
}

export default TitleSection
