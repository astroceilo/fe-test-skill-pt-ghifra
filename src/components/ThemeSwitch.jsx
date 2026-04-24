import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";


export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-muted hover:text-foreground transition">
      {/* Left: Icon + Label */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {darkMode ? <Moon size={16} /> : <Sun size={16} />}
        <span>Theme</span>
      </div>

      {/* Right: Switch */}
      <Switch
        checked={darkMode}
        onCheckedChange={setDarkMode}
        className="cursor-pointer"
      />
    </div>
  );
}
