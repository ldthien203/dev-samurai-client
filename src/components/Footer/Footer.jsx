"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logo_1 = __importDefault(require("../Logo"));
const input_1 = require("@/components/ui/input");
const button_1 = require("@/components/ui/button");
const react_router_1 = require("react-router");
const fa_1 = require("react-icons/fa");
const Footer = () => {
    return (<footer className="w-full border-t bg-white dark:bg-black text-left">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr_3fr] gap-10">
          <div className="flex flex-col gap-2 w-max max-w-3xs">
            <Logo_1.default align="left"/>
            <p className="text-xs text-muted-foreground mt-2 md:max-w-[30ch] sm:max-w-[20ch]">
              Our mission is to disrupt the market with AI.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center">
            <div>
              <h4 className="font-semibold mb-2">Product</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {[
            'Feature 1',
            'Feature 2',
            'Feature 3',
            'Feature 4',
            'Feature 5',
        ].map((text) => (<li key={text}>
                    <react_router_1.NavLink to="#" className="hover:text-black">
                      {text}
                    </react_router_1.NavLink>
                  </li>))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    Contact
                  </react_router_1.NavLink>
                </li>
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    Roadmap <sup>↗</sup>
                  </react_router_1.NavLink>
                </li>
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    Docs
                  </react_router_1.NavLink>
                </li>
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    API Reference <sup>↗</sup>
                  </react_router_1.NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    Story
                  </react_router_1.NavLink>
                </li>
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    Blog
                  </react_router_1.NavLink>
                </li>
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    Careers
                  </react_router_1.NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    Terms of Use
                  </react_router_1.NavLink>
                </li>
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    Privacy Policy
                  </react_router_1.NavLink>
                </li>
                <li>
                  <react_router_1.NavLink to="#" className="hover:text-black">
                    Cookie Policy
                  </react_router_1.NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
            <form className="flex gap-2 justify-start">
              <input_1.Input type="email" placeholder="Enter your email" className="bg-white dark:bg-gray-800 text-black dark:text-white w-full sm:w-[300px]"/>
              <button_1.Button type="submit" className="bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Subscribe
              </button_1.Button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row gap-4 justify-between">
          <span className="text-xs text-muted-foreground ">
            © 2025 Acme. All rights reserved.
          </span>
          <div className="flex flex-row gap-3 text-gray-500 dark:hover:text-white">
            <react_router_1.NavLink to="#">
              <fa_1.FaTwitter className="hover:text-black"/>
            </react_router_1.NavLink>
            <react_router_1.NavLink to="#">
              <fa_1.FaLinkedin className="hover:text-black"/>
            </react_router_1.NavLink>
            <react_router_1.NavLink to="#">
              <fa_1.FaFacebook className="hover:text-black"/>
            </react_router_1.NavLink>
            <react_router_1.NavLink to="#">
              <fa_1.FaInstagramSquare className="hover:text-black"/>
            </react_router_1.NavLink>
            <react_router_1.NavLink to="#">
              <fa_1.FaTiktok className="hover:text-black"/>
            </react_router_1.NavLink>
          </div>
        </div>
      </div>
    </footer>);
};
exports.default = Footer;
