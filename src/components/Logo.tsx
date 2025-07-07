import { LogoSVG } from '@/assets/svgs'
import { NavLink } from 'react-router'

interface LogoProps {
  align?: 'left' | 'center'
}

const Logo: React.FC<LogoProps> = ({ align = 'center' }) => {
  return (
    <NavLink
      className={`block w-fit ${align === 'center' ? 'mx-auto' : ''}`}
      to="/"
    >
      <div className="flex items-center space-x-2">
        <div className="flex size-9 items-center justify-center p-1">
          <div className="flex size-7 items-center justify-center rounded-md border text-primary-foreground bg-primary">
            <LogoSVG />
          </div>
        </div>
        <span className="font-bold">Acme</span>
      </div>
    </NavLink>
  )
}

export default Logo
