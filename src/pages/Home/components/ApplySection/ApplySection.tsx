import { Button } from '@/components/ui/button'
import './ApplySection.css'

const ApplySection = () => {
  return (
    <section className="border-l border-r bg-diagonal-lines py-10">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 pb-5">
        Ready to start?
      </h2>
      <Button>Start for free</Button>
    </section>
  )
}

export default ApplySection
