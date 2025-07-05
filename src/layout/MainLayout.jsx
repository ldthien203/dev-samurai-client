"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Header_1 = __importDefault(require("@/components/Header/Header"));
const Footer_1 = __importDefault(require("@/components/Footer/Footer"));
const MainLayout = ({ path, children }) => {
    return (<>
      <Header_1.default />
      <main>{children}</main>
      <Footer_1.default />
    </>);
};
exports.default = MainLayout;
