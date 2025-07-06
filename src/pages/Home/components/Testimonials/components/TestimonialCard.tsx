import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FaStar } from 'react-icons/fa6'

interface TestimonialCardProps {
  rating: number
  content: string
  author: {
    name: string
    title: string
    avatar: string
  }
}

const TestimonialCard = ({ rating, content, author }: TestimonialCardProps) => {
  return (
    <Card
      className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] p-6
     bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <CardContent className="p-0 flex flex-col h-full">
        <div className="flex items-center min-h-30">
          <Avatar className="h-10 w-10 mr-3 flex-shrink-0">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>
              {author.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-semibold text-left text-gray-900 dark:text-white">
              {author.name}
            </p>
            <p className="text-sm text-left text-gray-500 dark:text-gray-400">
              {author.title}
            </p>
          </div>
        </div>

        <div className="flex my-3">
          {Array.from({ length: rating }).map((_, i) => (
            <FaStar
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}{' '}
        </div>

        <div>
          <p className="text-gray-700 dark:text-gray-300 text-left leading-relaxed mb-3">
            {content}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialCard
