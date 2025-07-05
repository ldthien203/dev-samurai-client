"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_router_1 = require("react-router");
const fi_1 = require("react-icons/fi");
const lu_1 = require("react-icons/lu");
const io5_1 = require("react-icons/io5");
const Logo_1 = __importDefault(require("../Logo"));
const navigation_menu_1 = require("@/components/ui/navigation-menu");
const accordion_1 = require("@/components/ui/accordion");
const ModeToggle_1 = require("@/components/ModeToggle/ModeToggle");
const productLists = [
    {
        title: 'Feature 1',
        desc: 'Short description here',
        icon: <fi_1.FiBox className="w-6 h-6 text-gray-500"/>,
        to: '#',
    },
    {
        title: 'Feature 2',
        desc: 'Short description here',
        icon: <fi_1.FiPlay className="w-6 h-6 text-gray-500"/>,
        to: '#',
    },
    {
        title: 'Feature 3',
        desc: 'Short description here',
        icon: <fi_1.FiCalendar className="w-6 h-6 text-gray-500"/>,
        to: '#',
    },
    {
        title: 'Feature 4',
        desc: 'Short description here',
        icon: <fi_1.FiFilm className="w-6 h-6 text-gray-500"/>,
        to: '#',
    },
    {
        title: 'Feature 5',
        desc: 'Short description here',
        icon: <io5_1.IoDocumentTextOutline className="w-6 h-6 text-gray-500"/>,
        to: '#',
    },
];
const resourceLists = [
    {
        title: 'Contact',
        desc: 'Reach out for assistance',
        icon: <lu_1.LuSendHorizontal className="w-6 h-6 text-gray-500"/>,
    },
    {
        title: 'Roadmap',
        desc: 'See what is coming next',
        icon: <fi_1.FiGrid className="w-6 h-6 text-gray-500"/>,
    },
    {
        title: 'Docx',
        desc: 'Learn how to use our platform',
        icon: <lu_1.LuBookOpen className="w-6 h-6 text-gray-500"/>,
    },
    {
        title: 'API Reference',
        desc: 'Build integrations with our API',
        icon: <fi_1.FiCode className="w-6 h-6 text-gray-500"/>,
    },
];
const Navbar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return (<section className="sticky inset-x-0 top-0 z-40 border-b bg-background py-3">
      <div className="container flex items-center justify-between mx-auto gap-5">
        <div className="flex items-center gap-10">
          <Logo_1.default />
          <navigation_menu_1.NavigationMenu viewport={false} className="flex-1 justify-center hidden lg:flex">
            <navigation_menu_1.NavigationMenuList className="gap-2">
              <navigation_menu_1.NavigationMenuItem>
                <navigation_menu_1.NavigationMenuTrigger>Product</navigation_menu_1.NavigationMenuTrigger>
                <navigation_menu_1.NavigationMenuContent>
                  <ul className="w-[360px] bg-white rounded-xl shadow-lg p-2 grid gap-1">
                    {productLists.map((li) => (<li className="rounded-lg hover:bg-gray-100 transition flex items-center gap-3 p-3 cursor-pointer">
                        <span className="bg-white rounded-lg p-2 mr-3 border border-solid border-grey-100">
                          {li.icon}
                        </span>
                        <div className="text-left">
                          <div className="font-medium">{li.title}</div>
                          <div className="text-xs text-gray-500">{li.desc}</div>
                        </div>
                      </li>))}
                  </ul>
                </navigation_menu_1.NavigationMenuContent>
              </navigation_menu_1.NavigationMenuItem>
              <navigation_menu_1.NavigationMenuItem>
                <navigation_menu_1.NavigationMenuTrigger>Resources</navigation_menu_1.NavigationMenuTrigger>
                <navigation_menu_1.NavigationMenuContent>
                  <ul className="w-[360px] bg-white rounded-xl shadow-lg p-2 grid gap-1">
                    {resourceLists.map((li) => (<li className="rounded-lg hover:bg-gray-100 transition flex items-center gap-3 p-3 cursor-pointer">
                        <span className="bg-white rounded-lg p-2 mr-3 border border-solid border-grey-100">
                          {li.icon}
                        </span>
                        <div className="text-left">
                          <div className="font-medium">{li.title}</div>
                          <div className="text-xs text-gray-500">{li.desc}</div>
                        </div>
                      </li>))}
                  </ul>
                </navigation_menu_1.NavigationMenuContent>
              </navigation_menu_1.NavigationMenuItem>
              <navigation_menu_1.NavigationMenuItem>
                <navigation_menu_1.NavigationMenuLink asChild className={(0, navigation_menu_1.navigationMenuTriggerStyle)()}>
                  <react_router_1.Link to="/pricing">Pricing</react_router_1.Link>
                </navigation_menu_1.NavigationMenuLink>
              </navigation_menu_1.NavigationMenuItem>
              <navigation_menu_1.NavigationMenuItem>
                <navigation_menu_1.NavigationMenuLink asChild className={(0, navigation_menu_1.navigationMenuTriggerStyle)()}>
                  <react_router_1.Link to="/blog">Blog</react_router_1.Link>
                </navigation_menu_1.NavigationMenuLink>
              </navigation_menu_1.NavigationMenuItem>
              <navigation_menu_1.NavigationMenuItem>
                <navigation_menu_1.NavigationMenuLink asChild className={(0, navigation_menu_1.navigationMenuTriggerStyle)()}>
                  <react_router_1.Link to="/story">Story</react_router_1.Link>
                </navigation_menu_1.NavigationMenuLink>
              </navigation_menu_1.NavigationMenuItem>
            </navigation_menu_1.NavigationMenuList>
          </navigation_menu_1.NavigationMenu>
        </div>
        <div className="items-center gap-2 hidden lg:flex">
          {/* <Button className="bg-white hover:bg-gray-100">
          <WiDaySunny className="text-black" />
        </Button> */}
          <ModeToggle_1.ModeToggle />
          <react_router_1.Link to="/auth/sign-in" className="px-4 py-1.5 rounded-md font-medium text-sm hover:bg-gray-100 transition border border-gray-200">
            Sign in
          </react_router_1.Link>
          <react_router_1.Link to="/auth/sign-up" className="px-4 py-1.5 rounded-md font-medium text-sm bg-black text-white hover:bg-gray-900 transition">
            Start for free
          </react_router_1.Link>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md border lg:hidden">
          {mobileOpen ? <fi_1.FiX size={20}/> : <fi_1.FiMenu size={20}/>}
        </button>
      </div>
      {mobileOpen && (<div className="lg:hidden w-full px-4 pb-4 pt-2 space-y-4">
          <div className="flex flex-col gap-2">
            <react_router_1.Link to="/auth/sign-up" className="w-full text-center px-4 py-2 rounded-md font-medium text-sm bg-black text-white hover:bg-gray-900 transition">
              Start for free
            </react_router_1.Link>
            <react_router_1.Link to="/auth/sign-in" className="w-full text-center px-4 py-2 rounded-md font-medium text-sm border border-gray-200 hover:bg-gray-100 transition">
              Sign in
            </react_router_1.Link>
          </div>

          <ul className="flex flex-col gap-2 w-full">
            <accordion_1.Accordion type="single" collapsible className="w-full">
              <accordion_1.AccordionItem value="product" key="product">
                <accordion_1.AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition">
                  Product
                </accordion_1.AccordionTrigger>
                <accordion_1.AccordionContent className="text-left">
                  <ul className="w-full px-2 py-1">
                    {productLists.map((li) => (<li key={li.title} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
                        <span className="text-lg border rounded-md p-1">
                          {li.icon}
                        </span>
                        <div className="text-left">
                          <div className="font-medium text-sm">{li.title}</div>
                          <div className="text-xs text-gray-500">{li.desc}</div>
                        </div>
                      </li>))}
                  </ul>
                </accordion_1.AccordionContent>
              </accordion_1.AccordionItem>
              <accordion_1.AccordionItem value="resources" key="resources">
                <accordion_1.AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition">
                  Resources
                </accordion_1.AccordionTrigger>
                <accordion_1.AccordionContent className="text-left ">
                  <ul className="w-full px-2 py-1">
                    {resourceLists.map((li) => (<li key={li.title} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
                        <span className="text-lg">{li.icon}</span>
                        <div className="text-left">
                          <div className="font-medium text-sm">{li.title}</div>
                          <div className="text-xs text-gray-500">{li.desc}</div>
                        </div>
                      </li>))}
                  </ul>
                </accordion_1.AccordionContent>
              </accordion_1.AccordionItem>
              <accordion_1.AccordionItem value="pricing" key="pricing">
                <accordion_1.AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition [&>svg]:hidden">
                  Pricing
                </accordion_1.AccordionTrigger>
              </accordion_1.AccordionItem>
              <accordion_1.AccordionItem value="blog" key="blog">
                <accordion_1.AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition [&>svg]:hidden">
                  Blog
                </accordion_1.AccordionTrigger>
              </accordion_1.AccordionItem>
              <accordion_1.AccordionItem value="story" key="story">
                <accordion_1.AccordionTrigger className="cursor-pointer text-left px-4 py-2 font-medium hover:bg-gray-100 hover:no-underline rounded-md transition [&>svg]:hidden">
                  Story
                </accordion_1.AccordionTrigger>
              </accordion_1.AccordionItem>
            </accordion_1.Accordion>
          </ul>

          <div className="flex flex-row border-t border-b justify-between items-center text-sm font-medium py-3 pl-4">
            <p className="">Theme</p>
            <div>Theme Change</div>
          </div>
        </div>)}
    </section>);
};
exports.default = Navbar;
