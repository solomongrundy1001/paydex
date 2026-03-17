import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Logo from "../ui/Logo";
import Btn from "../ui/Btn";

export default function DesktopNav() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <Logo />

      <div className="flex items-center gap-8">
        <Link to="/solutions">Solutions</Link>
        <Link to="/who-we-serve">Who We Serve</Link>
        <Link to="/platform">Platform</Link>
        <Link to="/about">About</Link>
        <Link to="/support">Support</Link>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="text-sm">
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

        <Btn to="/login" variant="outline">
          Login
        </Btn>

        <Btn to="/request-access">
          Request Access
        </Btn>
      </div>
    </nav>
  );
}