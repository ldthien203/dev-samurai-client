import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@radix-ui/react-dropdown-menu'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useAuth } from '@/hooks/useAuth'
import { useLogout } from '@/api/hooks/user.hook'
import Spinner from '@/components/Spinner/Spinner'

const UserDropdown = () => {
  const { user, isLoading, logout } = useAuth()
  const { mutate: logoutApi, isPending: isLoggingOut } = useLogout()

  const handleLogout = () => {
    logoutApi(undefined, {
      onSuccess: () => {
        logout()
      },
    })
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="flex items-center gap-3 cursor-pointer">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />

              <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-center">Welcome, {user?.name}</span>
          </div>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-48 mt-2 bg-white dark:bg-zinc-900 border 
        border-gray-200 dark:border-zinc-800 rounded-md shadow-lg"
        align="end"
      >
        <DropdownMenuLabel className="px-3 py-2 text-gray-500 dark:text-gray-400 text-sm font-semibold">
          My Account
        </DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer px-3 py-2 text-sm 
        hover:bg-gray-100 dark:hover:bg-zinc-800 focus:bg-gray-100 dark:focus:bg-zinc-800 transition-colors"
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator className="my-1 h-px bg-gray-200 dark:bg-zinc-700" />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer px-3 py-2 text-sm text-red-600 
          hover:bg-red-50 dark:hover:bg-red-900/20 focus:bg-red-50 dark:focus:bg-red-900/20 transition-colors"
        >
          {isLoggingOut ? 'Logging out...' : 'Logout'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown
