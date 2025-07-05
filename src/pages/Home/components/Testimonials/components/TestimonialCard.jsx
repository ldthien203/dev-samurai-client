"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("@/components/ui/card");
const avatar_1 = require("@/components/ui/avatar");
const fa6_1 = require("react-icons/fa6");
const TestimonialCard = ({ rating, content, author }) => {
    return (<card_1.Card className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <card_1.CardContent className="p-0 flex flex-col justify-between h-full">
        <div>
          <p className="text-gray-700 text-left leading-relaxed mb-3">
            {content}
          </p>
          <div className="flex mb-3">
            {Array.from({ length: rating }).map((_, i) => (<fa6_1.FaStar key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>))}{' '}
          </div>
        </div>
        <div className="flex items-center">
          <avatar_1.Avatar className="h-10 w-10 mr-3">
            <avatar_1.AvatarImage src={author.avatar} alt={author.name}/>
            <avatar_1.AvatarFallback>
              {author.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
            </avatar_1.AvatarFallback>
          </avatar_1.Avatar>
          <div>
            <p className="font-semibold text-left text-gray-900">
              {author.name}
            </p>
            <p className="text-sm text-left text-gray-500">{author.title}</p>
          </div>
        </div>
      </card_1.CardContent>
    </card_1.Card>);
};
exports.default = TestimonialCard;
