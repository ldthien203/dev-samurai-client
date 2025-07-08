import { NavLink } from 'react-router'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const accordionItems: { trigger: string; content: string }[] = [
  {
    trigger: 'What does Acme do?',
    content:
      'This is a demo application built with Achromatic. It will save you time and effort building your next SaaS. Here you would write something like "Acme helps you manage customer relationships, organize sales activities and improve service delivery to make your business more efficient and successful."',
  },
  {
    trigger: 'How will this benefit my business?',
    content:
      'By centralizing your customer data and automating tasks, Acme makes it easier to track leads, manage your sales pipeline and collaborate with your team, saving you time and boosting your productivity.',
  },
  {
    trigger: 'Is my data safe?',
    content:
      'Your data security is our top priority. We use advanced encryption and follow industry-standard security measures to keep your information protected and compliant.',
  },
  {
    trigger: 'What kind of integrations are available?',
    content:
      'Acme supports integration with various business tools, including CRMs, email marketing software and collaboration platforms. Connect with Salesforce, HubSpot and more to create a seamless workflow.',
  },
  {
    trigger: 'How easy is it to onboard my team?',
    content:
      'The platform is designed for easy onboarding, with intuitive interfaces and step-by-step guides to help your team get up and running quickly.',
  },
  {
    trigger: 'What types of businesses can use this?',
    content:
      'Acme is suitable for businesses of all sizes and industries, from startups to large enterprises, looking to streamline their customer relationship management.',
  },
  {
    trigger: 'Can I customize this to fit my business needs?',
    content:
      'Absolutely. You can customize workflows, fields and templates to suit the unique needs of your business.',
  },
]

const QuestionSection = () => {
  return (
    <section className="border-l border-r border-b w-full max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="text-left px-10">
          <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-muted-foreground md:block lg:max-w-[75%]">
            Haven't found what you're looking for? Try{' '}
            <span className="underline hover:text-black dark:hover:text-white">
              <NavLink to="#">contacting</NavLink>
            </span>{' '}
            us, we are glad to help.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full px-10">
          {accordionItems.map((item) => (
            <AccordionItem value={item.trigger} key={item.trigger}>
              <AccordionTrigger className="cursor-pointer">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-left">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default QuestionSection
