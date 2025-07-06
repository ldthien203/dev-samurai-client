import * as React from 'react'
import {
  FiBox,
  FiPlay,
  FiCalendar,
  FiFilm,
  FiGrid,
  FiCode,
} from 'react-icons/fi'
import { LuBookOpen, LuSendHorizontal } from 'react-icons/lu'
import { IoDocumentTextOutline } from 'react-icons/io5'

const productLists: {
  title: string
  desc: string
  icon: React.ReactNode
  to: string
}[] = [
  {
    title: 'Feature 1',
    desc: 'Short description here',
    icon: <FiBox className="w-6 h-6 text-gray-500" />,
    to: '#',
  },
  {
    title: 'Feature 2',
    desc: 'Short description here',
    icon: <FiPlay className="w-6 h-6 text-gray-500" />,
    to: '#',
  },
  {
    title: 'Feature 3',
    desc: 'Short description here',
    icon: <FiCalendar className="w-6 h-6 text-gray-500" />,
    to: '#',
  },
  {
    title: 'Feature 4',
    desc: 'Short description here',
    icon: <FiFilm className="w-6 h-6 text-gray-500" />,
    to: '#',
  },
  {
    title: 'Feature 5',
    desc: 'Short description here',
    icon: <IoDocumentTextOutline className="w-6 h-6 text-gray-500" />,
    to: '#',
  },
]

const resourceLists: {
  title: string
  desc: string
  icon: React.ReactNode
}[] = [
  {
    title: 'Contact',
    desc: 'Reach out for assistance',
    icon: <LuSendHorizontal className="w-6 h-6 text-gray-500" />,
  },
  {
    title: 'Roadmap',
    desc: 'See what is coming next',
    icon: <FiGrid className="w-6 h-6 text-gray-500" />,
  },
  {
    title: 'Docx',
    desc: 'Learn how to use our platform',
    icon: <LuBookOpen className="w-6 h-6 text-gray-500" />,
  },
  {
    title: 'API Reference',
    desc: 'Build integrations with our API',
    icon: <FiCode className="w-6 h-6 text-gray-500" />,
  },
]

export { productLists, resourceLists }
