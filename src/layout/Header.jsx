import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  ChevronDown,
  User,
  Search,
  ShoppingCart,
  Heart,
  Globe,
  MessageCircle,
  Play,
  Share2,
} from 'lucide-react';

function Header() {
  return (
    <header className="w-full">
      <div className="hidden w-full bg-[#23856D] text-white lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[24px] py-[14px] xl:px-[100px]">
          <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-[6px]">
              <Phone size={16} />
              <span className="text-[14px] font-semibold leading-[24px]">
                (225) 555-0118
              </span>
            </div>

            <div className="flex items-center gap-[6px]">
              <Mail size={16} />
              <span className="text-[14px] font-semibold leading-[24px]">
                michelle.rivera@example.com
              </span>
            </div>
          </div>

          <p className="text-[14px] font-semibold leading-[24px]">
            Follow Us and get a chance to win 80% off
          </p>

          <div className="flex items-center gap-[10px]">
            <span className="text-[14px] font-semibold leading-[24px]">
              Follow Us :
            </span>

            <div className="flex items-center gap-[10px]">
              <Globe size={16} />
              <MessageCircle size={16} />
              <Play size={16} />
              <Share2 size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[24px] py-[24px] xl:px-[100px]">
          <div className="flex items-center gap-[40px] xl:gap-[83px]">
            <Link
              to="/"
              className="text-[24px] font-bold leading-[32px] tracking-[0.1px] text-[#252B42]"
            >
              Bandage
            </Link>

            <nav className="hidden items-center gap-[21px] md:flex">
              <Link
                to="/"
                className="text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-[#737373]"
              >
                Home
              </Link>

              <Link
                to="/"
                className="flex items-center gap-[6px] text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-[#737373]"
              >
                Shop
                <ChevronDown size={16} />
              </Link>

              <Link
                to="/"
                className="text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-[#737373]"
              >
                About
              </Link>

              <Link
                to="/"
                className="text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-[#737373]"
              >
                Blog
              </Link>

              <Link
                to="/"
                className="text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-[#737373]"
              >
                Contact
              </Link>

              <Link
                to="/"
                className="text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-[#737373]"
              >
                Pages
              </Link>
            </nav>
          </div>

          <div className="hidden items-center gap-[30px] md:flex">
            <Link
              to="/"
              className="flex items-center gap-[6px] text-[14px] font-semibold leading-[24px] tracking-[0.2px] text-[#23A6F0]"
            >
              <User size={16} />
              Login / Register
            </Link>

            <button className="text-[#23A6F0]">
              <Search size={18} />
            </button>

            <button className="flex items-center gap-[5px] text-[#23A6F0]">
              <ShoppingCart size={18} />
              <span className="text-[12px] leading-[16px]">1</span>
            </button>

            <button className="flex items-center gap-[5px] text-[#23A6F0]">
              <Heart size={18} />
              <span className="text-[12px] leading-[16px]">1</span>
            </button>
          </div>

          <div className="flex items-center gap-[20px] md:hidden">
            <button className="text-[#252B42]">
              <Search size={20} />
            </button>

            <button className="text-[#252B42]">
              <ShoppingCart size={20} />
            </button>

            <button className="text-[#252B42]">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;