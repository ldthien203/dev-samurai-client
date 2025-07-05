"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button_1 = require("@/components/ui/button");
const ApplySection = () => {
    return (<section className="border-l border-r bg-diagonal-lines py-10">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 pb-5">
        Ready to start?
      </h2>
      <button_1.Button>Start for free</button_1.Button>
    </section>);
};
exports.default = ApplySection;
