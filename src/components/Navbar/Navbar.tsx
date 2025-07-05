import * as React from 'react'
import { Link } from 'react-router'
import {
  FiBox,
  FiPlay,
  FiCalendar,
  FiFilm,
  FiGrid,
  FiCode,
  FiMenu,
  FiX,
} from 'react-icons/fi'
import { LuBookOpen, LuSendHorizontal } from 'react-icons/lu'
import { IoDocumentTextOutline } from 'react-icons/io5'
import Logo from '../Logo'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ModeToggle } from '@/components/ModeToggle/ModeToggle'
import { useAuth } from '@/contexts/AuthContext'

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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { user } = useAuth()

  return (
    <section className="sticky inset-x-0 top-0 z-40 border-b bg-background py-3">
      <div className="container flex items-center justify-between mx-auto gap-5">
        <div className="flex items-center gap-10">
          <Logo />
          <NavigationMenu
            viewport={false}
            className="flex-1 justify-center hidden lg:flex"
          >
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[360px] bg-white rounded-xl shadow-lg p-2 grid gap-1">
                    {productLists.map((li) => (
                      <li className="rounded-lg hover:bg-gray-100 transition flex items-center gap-3 p-3 cursor-pointer">
                        <span className="bg-white rounded-lg p-2 mr-3 border border-solid border-grey-100">
                          {li.icon}
                        </span>
                        <div className="text-left">
                          <div className="font-medium">{li.title}</div>
                          <div className="text-xs text-gray-500">{li.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[360px] bg-white rounded-xl shadow-lg p-2 grid gap-1">
                    {resourceLists.map((li) => (
                      <li className="rounded-lg hover:bg-gray-100 transition flex items-center gap-3 p-3 cursor-pointer">
                        <span className="bg-white rounded-lg p-2 mr-3 border border-solid border-grey-100">
                          {li.icon}
                        </span>
                        <div className="text-left">
                          <div className="font-medium">{li.title}</div>
                          <div className="text-xs text-gray-500">{li.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/pricing">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/blog">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/story">Story</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="items-center gap-2 hidden lg:flex">
          {/* <Button className="bg-white hover:bg-gray-100">
            <WiDaySunny className="text-black" />
          </Button> */}
          {}
          <ModeToggle />
          {user ? (
            <span>User</span>
          ) : (
            <>
              <Link
                to="/auth/sign-in"
                className="px-4 py-1.5 rounded-md font-medium text-sm hover:bg-gray-100 transition border border-gray-200"
              >
                Sign in
              </Link>
              <Link
                to="/auth/sign-up"
                className="px-4 py-1.5 rounded-md font-medium text-sm bg-black text-white hover:bg-gray-900 transition"
              >
                Start for free
              </Link>
            </>
          )}
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md border lg:hidden"
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="lg:hidden w-full px-4 pb-4 pt-2 space-y-4">
          <div className="flex flex-col gap-2">
            <Link
              to="/auth/sign-up"
              className="w-full text-center px-4 py-2 rounded-md font-medium text-sm bg-black text-white hover:bg-gray-900 transition"
            >
              Start for free
            </Link>
            <Link
              to="/auth/sign-in"
              className="w-full text-center px-4 py-2 rounded-md font-medium text-sm border border-gray-200 hover:bg-gray-100 transition"
            >
              Sign in
            </Link>
          </div>

          <ul className="flex flex-col gap-2 w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="product" key="product">
                <AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition">
                  Product
                </AccordionTrigger>
                <AccordionContent className="text-left">
                  <ul className="w-full px-2 py-1">
                    {productLists.map((li) => (
                      <li
                        key={li.title}
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                      >
                        <span className="text-lg border rounded-md p-1">
                          {li.icon}
                        </span>
                        <div className="text-left">
                          <div className="font-medium text-sm">{li.title}</div>
                          <div className="text-xs text-gray-500">{li.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="resources" key="resources">
                <AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition">
                  Resources
                </AccordionTrigger>
                <AccordionContent className="text-left ">
                  <ul className="w-full px-2 py-1">
                    {resourceLists.map((li) => (
                      <li
                        key={li.title}
                        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
                      >
                        <span className="text-lg">{li.icon}</span>
                        <div className="text-left">
                          <div className="font-medium text-sm">{li.title}</div>
                          <div className="text-xs text-gray-500">{li.desc}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pricing" key="pricing">
                <AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition [&>svg]:hidden">
                  Pricing
                </AccordionTrigger>
              </AccordionItem>
              <AccordionItem value="blog" key="blog">
                <AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition [&>svg]:hidden">
                  Blog
                </AccordionTrigger>
              </AccordionItem>
              <AccordionItem value="story" key="story">
                <AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition [&>svg]:hidden">
                  Story
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </ul>

          <div className="flex flex-row border-t border-b justify-between items-center text-sm font-medium py-3 pl-4">
            <p className="">Theme</p>
            <div>Theme Change</div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Navbar
