import * as React from 'react'
import { Link } from 'react-router'
import { FiMenu, FiX } from 'react-icons/fi'
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
import { ModeToggle } from '@/components/ModeToggle/ModeToggle'
import { useAuth } from '@/hooks/useAuth'
import NavbarMobile from './components/NavbarMobile'
import { productLists, resourceLists } from './components/itemLists'
import UserDropdown from './components/UserDropdown'
import { ROOT_PATH } from '@/constants/path'
import Spinner from '../Spinner/Spinner'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { user, isLoading } = useAuth()

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
                  <ul className="w-[360px] bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-2 grid gap-1">
                    {productLists.map((li) => (
                      <li className="rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition flex items-center gap-3 p-3 cursor-pointer">
                        <span className="bg-white dark:bg-zinc-900 rounded-lg p-2 mr-3 border border-solid border-grey-100">
                          {li.icon}
                        </span>
                        <div className="text-left">
                          <div className="font-medium text-gray-900 dark:text-white">
                            {li.title}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {li.desc}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[360px] bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-2 grid gap-1">
                    {resourceLists.map((li) => (
                      <li className="rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition flex items-center gap-3 p-3 cursor-pointer">
                        <span className="bg-white dark:bg-zinc-900 rounded-lg p-2 mr-3 border border-solid border-grey-100">
                          {li.icon}
                        </span>
                        <div className="text-left">
                          <div className="font-medium text-gray-900 dark:text-white">
                            {li.title}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {li.desc}
                          </div>
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
                  <Link to="/">Pricing</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to="/">Story</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="items-center gap-2 hidden lg:flex">
          <ModeToggle />

          {isLoading ? (
            <Spinner />
          ) : user ? (
            <UserDropdown />
          ) : (
            <>
              <Link
                to={ROOT_PATH.SIGN_IN}
                className="px-4 py-1.5 rounded-md font-medium text-sm hover:bg-gray-100 transition border border-gray-200"
              >
                Sign in
              </Link>
              <Link
                to={ROOT_PATH.SIGN_UP}
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
      {mobileOpen && <NavbarMobile />}
    </section>
  )
}

export default Navbar
