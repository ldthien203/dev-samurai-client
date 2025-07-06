import * as React from 'react'
import { Link } from 'react-router'
import { useAuth } from '@/hooks/useAuth'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { productLists, resourceLists } from './itemLists'
import { ModeToggle } from '@/components/ModeToggle/ModeToggle'

const NavbarMobile = () => {
  const { user } = useAuth()

  return (
    <div className="lg:hidden w-full px-4 pb-4 pt-2 space-y-4">
      <div className="flex flex-col gap-2">
        {user ? (
          <div className="flex flex-row justify-center items-center gap-3">
            <Avatar className="min-w-20 max-w-20">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="rounded-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-center text-gray-900 dark:text-white">
              Welcome, {user.name}
            </span>
          </div>
        ) : (
          <>
            <Link
              to="/auth/sign-up"
              className="w-full text-center px-4 py-2 rounded-md font-medium text-sm
               bg-black text-white hover:bg-gray-900 dark:hover:bg-gray-800 transition"
            >
              Start for free
            </Link>
            <Link
              to="/auth/sign-in"
              className="w-full text-center px-4 py-2 rounded-md font-medium text-sm
               border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
            >
              Sign in
            </Link>
          </>
        )}
      </div>

      <ul className="flex flex-col gap-2 w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="product" key="product">
            <AccordionTrigger
              className="cursor-pointer text-left px-4 py-2 font-medium
             hover:bg-gray-100 dark:hover:bg-zinc-800 hover:no-underline rounded-md transition"
            >
              Product
            </AccordionTrigger>
            <AccordionContent className="text-left">
              <ul className="w-full px-2 py-1">
                {productLists.map((li) => (
                  <li
                    key={li.title}
                    className="flex items-center gap-2 px-3 py-2 rounded-md 
                    hover:bg-gray-100 dark:hover:bg-zinc-800 transition cursor-pointer"
                  >
                    <span className="text-lg border rounded-md p-1 border-gray-200 dark:border-gray-700">
                      {li.icon}
                    </span>
                    <div className="text-left">
                      <div className="font-medium text-sm text-gray-900 dark:text-white">
                        {li.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {li.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="resources" key="resources">
            <AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 hover:no-underline rounded-md transition">
              Resources
            </AccordionTrigger>
            <AccordionContent className="text-left ">
              <ul className="w-full px-2 py-1">
                {resourceLists.map((li) => (
                  <li
                    key={li.title}
                    className="flex items-center gap-2 px-3 py-2 rounded-md 
                    hover:bg-gray-100 dark:hover:bg-zinc-800 transition cursor-pointer"
                  >
                    <span className="text-lg border rounded-md p-1 border-gray-200 dark:border-gray-700">
                      {li.icon}
                    </span>
                    <div className="text-left">
                      <div className="font-medium text-sm text-gray-900 dark:text-white">
                        {li.title}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {li.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="pricing" key="pricing">
            <AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 hover:no-underline rounded-md transition [&>svg]:hidden">
              Pricing
            </AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="blog" key="blog">
            <AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 hover:no-underline rounded-md transition [&>svg]:hidden">
              Blog
            </AccordionTrigger>
          </AccordionItem>
          <AccordionItem value="story" key="story">
            <AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 hover:no-underline rounded-md transition [&>svg]:hidden">
              Story
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </ul>

      <div className="flex flex-row border-t border-b justify-between items-center text-sm font-medium py-3 pl-4">
        <p className="">Theme</p>
        <ModeToggle />
      </div>
    </div>
  )
}

export default NavbarMobile
