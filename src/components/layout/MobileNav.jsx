import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Logo from "../ui/Logo";
import Btn from "../ui/Btn";

export default function MobileNav() {
  const { dark, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-6 py-5">
      <div className="flex justify-between items-center">
        <Logo />

        <button onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 mt-6">
          <Link to="/solutions">Solutions</Link>
          <Link to="/who-we-serve">Who We Serve</Link>
          <Link to="/platform">Platform</Link>
          <Link to="/about">About</Link>
          <Link to="/support">Support</Link>

          <button onClick={toggleTheme}>
            {dark ? "Light Mode" : "Dark Mode"}
          </button>

          <Btn to="/login" variant="outline">
            Login
          </Btn>

          <Btn to="/request-access">
            Request Access
          </Btn>
        </div>
      )}
    </nav>
  );
}