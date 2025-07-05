"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_1 = require("react-router");
const ThemeProvider_1 = require("./components/ThemeProvider/ThemeProvider");
const MainLayout_1 = __importDefault(require("./layout/MainLayout"));
const Home_1 = __importDefault(require("./pages/Home/Home"));
const Login_1 = __importDefault(require("./pages/Login/Login"));
const Register_1 = __importDefault(require("./pages/Register/Register"));
require("./App.css");
const mainRouter = [
    { path: '/', component: <Home_1.default /> },
];
function App() {
    return (<ThemeProvider_1.ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <react_router_1.BrowserRouter>
        <react_router_1.Routes>
          <react_router_1.Route path="auth/sign-in" element={<Login_1.default />}/>
          <react_router_1.Route path="auth/sign-up" element={<Register_1.default />}/>
          {mainRouter.map((el) => (<react_router_1.Route key={el.path} path={el.path} element={<MainLayout_1.default path={el.path}>{el.component}</MainLayout_1.default>}/>))}
        </react_router_1.Routes>
      </react_router_1.BrowserRouter>
    </ThemeProvider_1.ThemeProvider>);
}
exports.default = App;
