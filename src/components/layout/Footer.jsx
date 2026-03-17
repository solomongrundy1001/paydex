import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 px-6 md:px-12 py-12 border-t">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Paydex</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            US-based fintech infrastructure powering enterprise payment
            operations across North America and expanding into Europe.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/about/our-story">Our Story</Link>
            <Link to="/about/leadership">Leadership</Link>
            <Link to="/careers">Careers</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/support/help-center">Help Center</Link>
            <Link to="/support/system-status">System Status</Link>
            <Link to="/support/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Regions</h4>
          <div className="flex flex-col gap-2 text-sm">
            <span>United States</span>
            <span>Spain</span>
            <span>Italy</span>
            <span>France</span>
          </div>
        </div>
      </div>

      <div className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Paydex. All rights reserved.
      </div>
    </footer>
  );
}