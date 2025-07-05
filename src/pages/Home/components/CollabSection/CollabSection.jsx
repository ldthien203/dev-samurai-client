"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CollabSection = () => {
    return (<section className="border border-solid px-7 py-3 bg-diagonal-lines">
      <div className="w-full flex flex-row justify-between">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-500 max-w-60 text-left">
          Trusted by fast-growing companies around the world
        </p>
        <div className="flex flex-row justify-between items-center gap-5">
          <span className="w-[20%] max-w-[120px]">
            <img src="/images/collab/vercel.png" alt="vercel-logo" className="w-full h-auto object-cover rounded"/>
          </span>
          <span className="w-[20%] max-w-[120px]">
            <img src="/images/collab/deel.png" alt="deel-logo" className="w-full h-auto object-cover rounded"/>
          </span>
          <span className="w-[20%] max-w-[120px]">
            <img src="/images/collab/resend.png" alt="resend-logo" className="w-full h-auto object-cover rounded"/>
          </span>
          <span className="w-[20%] max-w-[120px]">
            <img src="/images/collab/notion.png" alt="notion-logo" className="w-full h-auto object-cover rounded"/>
          </span>
        </div>
      </div>
    </section>);
};
exports.default = CollabSection;
