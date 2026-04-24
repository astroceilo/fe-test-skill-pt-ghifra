import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import ThemeSwitch from "./ThemeSwitch";


export default function Sidebar({ darkMode, setDarkMode }) {
  return (
    <div className="md:w-64 xl:w72 p-6 pr-0 sticky top-0 h-screen">
      <div className="bg-sidebar h-full p-4 rounded-xl shadow flex flex-col">
        <div>
          {/* Logo */}
          <div className="mb-6">
            <Link
              to="/"
              className="block text-lg! text-center font-bold text-foreground! leading-tight"
            >
              PT Ghifra Utama Indonesia
            </Link>
          </div>

          <Separator />

          {/* Menu */}
          <div className="mt-4 space-y-2">
            <Link to="/dashboard">
              <Button
                variant="ghost"
                className="w-full justify-start cursor-pointer"
              >
                Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          {/* Toggle */}
          <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
    </div>
  );
}
