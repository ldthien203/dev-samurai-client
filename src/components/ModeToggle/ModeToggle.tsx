import { useTheme } from '@/hooks/useDarkTheme'
import { Button } from '@/components/ui/button'
import { FaMoon } from 'react-icons/fa'
import { WiDaySunny } from 'react-icons/wi'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      onClick={toggleTheme}
      className="bg-white hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-800"
    >
      {theme === 'light' ? (
        <WiDaySunny className="text-black" />
      ) : (
        <FaMoon className="text-white" />
      )}
    </Button>
  )
}
