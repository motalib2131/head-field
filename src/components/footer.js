import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Web development
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Digital marketing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Mobile app
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                SEO
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                User testing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Case study
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Follow us</h4>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Figma
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex flex-col space-y-2">
            <Link to="/">
              <img src={logo} className="h-8 mb-4" />
            </Link>

            <span className="text-gray-400">Get latest updates</span>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-900 text-white px-4 py-2 rounded-full w-full border border-gray-700 focus:outline-none focus:border-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
