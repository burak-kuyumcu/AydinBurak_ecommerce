import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import md5 from 'md5';
import {
  Phone,
  Mail,
  ChevronDown,
  User,
  Search,
  ShoppingCart,
  Heart,
  Menu,
  X,
} from 'lucide-react';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from 'react-icons/fa';
import { fetchCategoriesIfNeeded } from '../store/actions/productActions';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesIfNeeded());
  }, [dispatch]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const gravatarUrl = user?.email
    ? `https://www.gravatar.com/avatar/${md5(
        user.email.trim().toLowerCase()
      )}?d=identicon&s=40`
    : '';

  const cartItemCount = cart.reduce((total, item) => total + item.count, 0);

  const formatCategoryPath = (category) => {
    const genderValue = String(category.gender || '').toLowerCase();
    const genderText =
      genderValue === 'k' || genderValue === 'kadın' || genderValue === 'kadin'
        ? 'kadin'
        : 'erkek';

    const rawName = category.title || category.name || '';

    const categoryName = rawName
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll('ı', 'i')
      .replaceAll('ş', 's')
      .replaceAll('ç', 'c')
      .replaceAll('ö', 'o')
      .replaceAll('ü', 'u')
      .replaceAll('ğ', 'g');

    return `/shop/${genderText}/${categoryName}/${category.id}`;
  };

  const womenCategories = categories.filter((item) => {
    const genderValue = String(item.gender || '').toLowerCase();
    return genderValue === 'k' || genderValue === 'kadın' || genderValue === 'kadin';
  });

  const menCategories = categories.filter((item) => {
    const genderValue = String(item.gender || '').toLowerCase();
    return genderValue === 'e' || genderValue === 'erkek';
  });

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
            onClick={closeMobileMenu}
            className="text-[24px] font-bold leading-8 tracking-[0.1px] text-[#252B42]"
          >
            Bandage
          </Link>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-[#737373]"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="flex flex-col items-center gap-6 px-6 pb-6 pt-2">
            <nav className="flex flex-col items-center gap-6">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-[30px] leading-11.25 text-[#252B42]"
              >
                Home
              </Link>

              <Link
                to="/shop"
                onClick={closeMobileMenu}
                className="text-[30px] leading-11.25 text-[#737373]"
              >
                Shop
              </Link>

              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={formatCategoryPath(category)}
                  onClick={closeMobileMenu}
                  className="text-[20px] leading-8 text-[#737373]"
                >
                  {category.title || category.name}
                </Link>
              ))}

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="text-[30px] leading-11.25 text-[#737373]"
              >
                About
              </Link>

              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-[30px] leading-11.25 text-[#737373]"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="text-[30px] leading-11.25 text-[#737373]"
              >
                Contact
              </Link>

              <Link
                to="/"
                onClick={closeMobileMenu}
                className="text-[30px] leading-11.25 text-[#737373]"
              >
                Pages
              </Link>

              <Link
                to="/pricing"
                onClick={closeMobileMenu}
                className="text-[30px] leading-11.25 text-[#737373]"
              >
                Pricing
              </Link>
            </nav>

            {user?.email ? (
              <div className="flex items-center gap-3 text-[#23A6F0]">
                <img
                  src={gravatarUrl}
                  alt={user.name || user.email}
                  className="h-10 w-10 rounded-full"
                />
                <span className="text-[18px] font-semibold">
                  {user.name || user.email}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 text-[#23A6F0]">
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 text-[24px] leading-9"
                >
                  <User size={20} />
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMobileMenu}
                  className="text-[20px] font-semibold"
                >
                  Register
                </Link>
              </div>
            )}

            <div className="flex flex-col items-center gap-4 text-[#23A6F0]">
              <button type="button">
                <Search size={22} />
              </button>

              <button type="button" className="flex items-center gap-1">
                <ShoppingCart size={22} />
                <span className="text-[14px]">{cartItemCount}</span>
              </button>

              <button type="button">
                <Heart size={22} />
              </button>
            </div>
          </div>
        )}
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

              <div className="group relative">
                <div className="flex cursor-pointer items-center gap-1.5 text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#737373]">
                  Shop
                  <ChevronDown size={16} />
                </div>

                <div className="invisible absolute left-0 top-full z-50 mt-2 flex min-w-[420px] gap-12 bg-white p-6 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[16px] font-bold text-[#252B42]">
                      Kadın
                    </h3>
                    {womenCategories.map((category) => (
                      <Link
                        key={category.id}
                        to={formatCategoryPath(category)}
                        className="text-[14px] font-semibold text-[#737373]"
                      >
                        {category.title || category.name}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-[16px] font-bold text-[#252B42]">
                      Erkek
                    </h3>
                    {menCategories.map((category) => (
                      <Link
                        key={category.id}
                        to={formatCategoryPath(category)}
                        className="text-[14px] font-semibold text-[#737373]"
                      >
                        {category.title || category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

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

              <Link
                to="/pricing"
                className="text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#737373]"
              >
                Pricing
              </Link>
            </nav>
          </div>

          <div className="hidden items-center gap-7.5 lg:flex">
            {user?.email ? (
              <div className="flex items-center gap-2 text-[#23A6F0]">
                <img
                  src={gravatarUrl}
                  alt={user.name || user.email}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-[14px] font-semibold">
                  {user.name || user.email}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="flex items-center gap-1.5 text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#23A6F0]"
                >
                  <User size={16} />
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="text-[14px] font-semibold leading-6 tracking-[0.2px] text-[#23A6F0]"
                >
                  Register
                </Link>
              </div>
            )}

            <button type="button" className="text-[#23A6F0]">
              <Search size={18} />
            </button>

            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 text-[#23A6F0]"
              >
                <ShoppingCart size={18} />
                <span className="text-[12px] leading-4">{cartItemCount}</span>
              </button>

              <div className="invisible absolute right-0 top-full z-50 mt-2 w-[320px] rounded-[8px] bg-white p-4 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                <h3 className="mb-3 text-[16px] font-bold text-[#252B42]">
                  Cart
                </h3>

                {cart.length === 0 ? (
                  <p className="text-[14px] text-[#737373]">
                    Your cart is empty.
                  </p>
                ) : (
                  <div className="flex max-h-[300px] flex-col gap-3 overflow-y-auto">
                    {cart.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex items-center gap-3 border-b border-[#E6E6E6] pb-3"
                      >
                        <img
                          src={
                            item.product.images?.[0]?.url ||
                            item.product.images?.[0] ||
                            item.product.image ||
                            'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'
                          }
                          alt={item.product.name || item.product.title}
                          className="h-16 w-16 rounded object-cover"
                        />

                        <div className="flex flex-1 flex-col gap-1">
                          <span className="text-[14px] font-bold text-[#252B42]">
                            {item.product.name || item.product.title}
                          </span>
                          <span className="text-[13px] text-[#737373]">
                            Count: {item.count}
                          </span>
                          <span className="text-[13px] font-semibold text-[#23856D]">
                            ${item.product.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              className="flex items-center gap-1 text-[#23A6F0]"
            >
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