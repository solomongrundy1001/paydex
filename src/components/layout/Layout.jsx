import useWindowWidth from "../../hooks/useWindowWidth";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

export default function Layout({ children }) {
  const width = useWindowWidth();

  return (
    <div className="min-h-screen flex flex-col">
      {width > 768 ? <DesktopNav /> : <MobileNav />}

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}