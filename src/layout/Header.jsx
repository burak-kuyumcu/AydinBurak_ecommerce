import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  ChevronDown,
  User,
  Search,
  ShoppingCart,
  Heart,
  Menu,
} from 'lucide-react';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';

function Header() {
  return (
    <header className="w-full">
      <div className="hidden w-full bg-[#23856D] text-white lg:block">
        <div className="mx-auto flex w-full max-w-330 items-center justify-between px-6 py-3.5 xl:px-8">
          <div className="flex items-center gap-7.5">
            <div className="flex items-center gap-1.5">
              <Phone size={16} />
              <span className="text-[14px] font-semibold leading-6">
                (225) 555-0118
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <Mail size={16} />
              <span className="text-[14px] font-semibold leading-6">
                michelle.rivera@example.com
              </span>
            </div>
          </div>

          <p className="text-[14px] font-semibold leading-6">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="flex items-center gap-2.5">
            <span className="text-[14px] font-semibold leading-6">
              Follow Us :
            </span>

            <div className="flex items-center gap-2.5">
              <FaInstagram size={16} />
              <FaYoutube size={16} />
              <FaFacebookF size={16} />
              <FaTwitter size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white lg:hidden">
        <div className="flex items-center justify-between px-6 py-6">
          <Link
            to="/"
            className="text-[24px] font-bold leading-8 tracking-[0.1px] text-[#252B42]"
          >
            Bandage
          </Link>

          <button className="text-[#737373]">
            <Menu size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 px-6 pb-6 pt-2">
          <nav className="flex flex-col items-center gap-6">
            <Link to="/" className="text-[30px] leading-11.25 text-[#252B42]">
              Home
            </Link>
            <Link to="/shop" className="text-[30px] leading-11.25 text-[#737373]">
              Shop
            </Link>
            <Link to="/about" className="text-[30px] leading-11.25 text-[#737373]">
              About
            </Link>
            <Link to="/" className="text-[30px] leading-11.25 text-[#737373]">
              Blog
            </Link>
            <Link to="/contact" className="text-[30px] leading-11.25 text-[#737373]">
              Contact
            </Link>
            <Link to="/" className="text-[30px] leading-11.25 text-[#737373]">
              Pages
            </Link>
          </nav>

          <Link
            to="/signup"
            className="flex items-center gap-2 text-[24px] leading-9 text-[#23A6F0]"
          >
            <User size={20} />
            Login / Register
          </Link>

          <div className="flex flex-col items-center gap-4 text-[#23A6F0]">
            <button>
              <Search size={22} />
            </button>
            <button>
              <ShoppingCart size={22} />
            </button>
            <button>
              <Heart size={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden w-full bg-white lg:block">
        <div className="mx-auto flex w-full max-w-330 items-center justify-between px-6 py-6 xl:px-8">
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="text-[24px] font-bold leading-8 tracking-[0.1px] text-[#252B42]"
            >
              Bandage
            </Link>

            <nav className="hidden items-center gap-5 lg:flex">
              <Link
                to="/"
                className="text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Home
              </Link>

              <Link
                to="/shop"
                className="flex items-center gap-1.5 text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Shop
                <ChevronDown size={16} />
              </Link>

              <Link
                to="/about"
                className="text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#737373]"
              >
                About
              </Link>

              <Link
                to="/"
                className="text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Contact
              </Link>

              <Link
                to="/"
                className="text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Pages
              </Link>
            </nav>
          </div>

          <div className="hidden items-center gap-7.5 lg:flex">
            <Link
              to="/signup"
              className="flex items-center gap-1.5 text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#23A6F0]"
            >
              <User size={16} />
              Login / Register
            </Link>

            <button className="text-[#23A6F0]">
              <Search size={18} />
            </button>

            <button className="flex items-center gap-1 text-[#23A6F0]">
              <ShoppingCart size={18} />
              <span className="text-[12px] leading-4">1</span>
            </button>

            <button className="flex items-center gap-1 text-[#23A6F0]">
              <Heart size={18} />
              <span className="text-[12px] leading-4">1</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;