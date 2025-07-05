"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TitleSection_1 = __importDefault(require("./components/TitleSection/TitleSection"));
const SidebarSection_1 = __importDefault(require("./components/SidebarSection/SidebarSection"));
const CollabSection_1 = __importDefault(require("./components/CollabSection/CollabSection"));
const FeatureSection_1 = __importDefault(require("./components/FeatureSection/FeatureSection"));
const ChartSection_1 = __importDefault(require("./components/ChartSection/ChartSection"));
const Testimonials_1 = __importDefault(require("./components/Testimonials/Testimonials"));
const QuestionSection_1 = __importDefault(require("./components/QuestionSection/QuestionSection"));
const ApplySection_1 = __importDefault(require("./components/ApplySection/ApplySection"));
const Home = () => {
    return (<>
      <TitleSection_1.default />
      <SidebarSection_1.default />
      <CollabSection_1.default />
      <FeatureSection_1.default />
      <ChartSection_1.default />
      <Testimonials_1.default />
      <QuestionSection_1.default />
      <ApplySection_1.default />
    </>);
};
exports.default = Home;
