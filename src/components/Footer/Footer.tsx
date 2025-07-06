import Logo from '../Logo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { NavLink } from 'react-router'
import {
  FaFacebook,
  FaInstagramSquare,
  FaTiktok,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full border-t bg-white dark:bg-black text-left">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-10 items-start">
          <div className="flex flex-col gap-2 w-max max-w-3xs">
            <Logo align="left" />
            <p className="text-xs text-muted-foreground mt-2 md:max-w-[30ch] sm:max-w-[20ch]">
              Our mission is to disrupt the market with AI.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-start">
            <div>
              <h4 className="font-semibold mb-2">Product</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {[
                  'Feature 1',
                  'Feature 2',
                  'Feature 3',
                  'Feature 4',
                  'Feature 5',
                ].map((text) => (
                  <li key={text}>
                    <NavLink to="#" className="hover:text-black">
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <NavLink to="#" className="hover:text-black">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-black">
                    Roadmap <sup>↗</sup>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-black">
                    Docs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-black">
                    API Reference <sup>↗</sup>
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <NavLink to="#" className="hover:text-black">
                    Story
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-black">
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-black">
                    Careers
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <NavLink to="#" className="hover:text-black">
                    Terms of Use
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-black">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:text-black">
                    Cookie Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
            <form className="flex gap-2 justify-start">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white dark:bg-gray-800 text-black dark:text-white w-full"
              />
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row gap-4 justify-between">
          <span className="text-xs text-muted-foreground ">
            © 2025 Acme. All rights reserved.
          </span>
          <div className="flex flex-row gap-3 text-gray-500 dark:hover:text-white">
            <NavLink to="#">
              <FaTwitter className="hover:text-black" />
            </NavLink>
            <NavLink to="#">
              <FaLinkedin className="hover:text-black" />
            </NavLink>
            <NavLink to="#">
              <FaFacebook className="hover:text-black" />
            </NavLink>
            <NavLink to="#">
              <FaInstagramSquare className="hover:text-black" />
            </NavLink>
            <NavLink to="#">
              <FaTiktok className="hover:text-black" />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
