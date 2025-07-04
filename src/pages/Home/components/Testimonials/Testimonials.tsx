import TestimonialCard from './components/TestimonialCard'

type Testimonials = {
  id: number
  rating: number
  content: string
  author: {
    name: string
    title: string
    avatar: string
  }
}

const testimonialList: Testimonials[] = [
  {
    id: 1,
    rating: 5,
    content:
      "Acme's customer prediction model has drastically improved our targeting strategy. We've seen a 50% increase in conversion rates! Their marketing automation features are unmatched.",
    author: {
      name: 'Maria Rodriguez',
      title: 'Customer Success Director at Cloud Dynamics',
      avatar: '/images/avatars/avatar1.webp',
    },
  },
  {
    id: 2,
    rating: 5,
    content:
      "Acme's multi-language support has made managing global customers effortless. Customer communication is now seamless across all regions. Perfect for international teams.",
    author: {
      name: 'Sarah Kim',
      title: 'Senior Account Executive at Digital First',
      avatar: '/images/avatars/avatar2.webp',
    },
  },
  {
    id: 3,
    rating: 5,
    content:
      "Acme's makes it perfect for healthcare providers. Secure patient relationship management has never been easier. A milestone in healthcare CRM solutions.",
    author: {
      name: 'Daniel Park',
      title: 'Business Operations Operations Lead at Swift Solutions',
      avatar: '/images/avatars/avatar3.webp',
    },
  },
  {
    id: 4,
    rating: 5,
    content:
      "Acme's enterprise-grade security features give us complete peace of mind. The most secure CRM solution we've ever used. Setting new standards in data protection.",
    author: {
      name: 'Robert Chen',
      title: 'Sales Enablement Manager at Catalyst Group',
      avatar: '/images/avatars/avatar4.webp',
    },
  },
]

const Testimonials = () => {
  return (
    <section className="border p-10 ">
      <div className="container">
        <h2 className="scroll-m-20 text-left pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          What people say
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
          {testimonialList.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              rating={testimonial.rating}
              content={testimonial.content}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
