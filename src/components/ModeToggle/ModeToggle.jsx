"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModeToggle = ModeToggle;
const lucide_react_1 = require("lucide-react");
const button_1 = require("@/components/ui/button");
const dropdown_menu_1 = require("@/components/ui/dropdown-menu");
const ThemeProvider_1 = require("@/components/ThemeProvider/ThemeProvider");
function ModeToggle() {
    const { setTheme } = (0, ThemeProvider_1.useTheme)();
    return (<dropdown_menu_1.DropdownMenu>
      <dropdown_menu_1.DropdownMenuTrigger asChild>
        <button_1.Button variant="outline" size="icon">
          <lucide_react_1.Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
          <lucide_react_1.Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
          <span className="sr-only">Toggle theme</span>
        </button_1.Button>
      </dropdown_menu_1.DropdownMenuTrigger>
      <dropdown_menu_1.DropdownMenuContent align="end">
        <dropdown_menu_1.DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </dropdown_menu_1.DropdownMenuItem>
        <dropdown_menu_1.DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </dropdown_menu_1.DropdownMenuItem>
        <dropdown_menu_1.DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </dropdown_menu_1.DropdownMenuItem>
      </dropdown_menu_1.DropdownMenuContent>
    </dropdown_menu_1.DropdownMenu>);
}
