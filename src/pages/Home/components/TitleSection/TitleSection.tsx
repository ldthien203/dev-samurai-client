import { FiBox, FiPlay, FiCalendar, FiFilm } from 'react-icons/fi'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import { ReactNode, useState } from 'react'
import { NavLink } from 'react-router'

const features: { label: string; icon: ReactNode; image: string }[] = [
  {
    label: 'Feature 1',
    icon: <FiBox />,
    image: '/images/features/feature1.webp',
  },
  {
    label: 'Feature 2',
    icon: <FiPlay />,
    image: '/images/features/feature2.webp',
  },
  {
    label: 'Feature 3',
    icon: <FiCalendar />,
    image: '/images/features/feature3.webp',
  },
  {
    label: 'Feature 4',
    icon: <FiFilm />,
    image: '/images/features/feature4.webp',
  },
  {
    label: 'Feature 5',
    icon: <IoDocumentTextOutline />,
    image: '/images/features/feature5.webp',
  },
]

const TitleSection = () => {
  const [activeImg, setActiveImg] = useState(features[0].image)

  return (
    <section className="border-l border-r pt-20">
      <h1 className="scroll-m-20 text-center text-6xl lg:text-4xl sm:text-3xl font-extrabold tracking-tight text-balance">
        Your revolutionary Next.js SaaS
      </h1>
      <p className="leading-7 text-center text-gray-500 mt-4 mb-6 max-w-2xl mx-auto">
        This is a demo application built with Achromatic. It will save you time
        and effort building your next SaaS.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
        <Button className="cursor-pointer">
          <NavLink to="auth/sign-up">Start for free</NavLink>
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
                ? 'text-black border-b border-black'
                : 'text-gray-500'
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
