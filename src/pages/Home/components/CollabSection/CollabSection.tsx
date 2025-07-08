import vercel from '@/assets/images/collab/vercel-light.png'
import vercelDark from '@/assets/images/collab/vercel-dark.png'
import deel from '@/assets/images/collab/deel-light.png'
import deelDark from '@/assets/images/collab/deel-dark.png'
import resend from '@/assets/images/collab/resend-light.png'
import resendDark from '@/assets/images/collab/resend-dark.png'
import notion from '@/assets/images/collab/notion-light.png'
import notionDark from '@/assets/images/collab/notion-dark.png'
import { useTheme } from '@/hooks/useDarkTheme'

const imageLogos = [
  { light: vercel, dark: vercelDark, alt: 'vercel-logo' },
  { light: deel, dark: deelDark, alt: 'deel-logo' },
  { light: resend, dark: resendDark, alt: 'resend-logo' },
  { light: notion, dark: notionDark, alt: 'notion-logo' },
]

const CollabSection = () => {
  const { theme } = useTheme()

  return (
    <section className="border border-solid px-7 py-3 bg-diagonal-lines">
      <div className="w-full flex flex-row justify-between items-center">
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-500 max-w-60 text-left">
          Trusted by fast-growing companies around the world
        </p>
        <div className="flex flex-row justify-between items-center gap-5">
          {imageLogos.map((logo, index) => (
            <span key={index} className="w-[20%] max-w-[120px]">
              <img
                src={theme === 'dark' ? logo.dark : logo.light}
                alt={logo.alt}
                className="w-full h-auto object-cover rounded"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollabSection
