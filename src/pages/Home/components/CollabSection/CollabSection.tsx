import vercel from '@/assets/images/collab/vercel.png'
import deel from '@/assets/images/collab/deel.png'
import resend from '@/assets/images/collab/resend.png'
import notion from '@/assets/images/collab/notion.png'

const CollabSection = () => {
  return (
    <section className="border border-solid px-7 py-3 bg-diagonal-lines">
      <div className="w-full flex flex-row justify-between">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-500 max-w-60 text-left">
          Trusted by fast-growing companies around the world
        </p>
        <div className="flex flex-row justify-between items-center gap-5">
          <span className="w-[20%] max-w-[120px]">
            <img
              src={vercel}
              alt="vercel-logo"
              className="w-full h-auto object-cover rounded"
            />
          </span>
          <span className="w-[20%] max-w-[120px]">
            <img
              src={deel}
              alt="deel-logo"
              className="w-full h-auto object-cover rounded"
            />
          </span>
          <span className="w-[20%] max-w-[120px]">
            <img
              src={resend}
              alt="resend-logo"
              className="w-full h-auto object-cover rounded"
            />
          </span>
          <span className="w-[20%] max-w-[120px]">
            <img
              src={notion}
              alt="notion-logo"
              className="w-full h-auto object-cover rounded"
            />
          </span>
        </div>
      </div>
    </section>
  )
}

export default CollabSection
