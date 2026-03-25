function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="w-full border-b border-[#E6E6E6] bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-6 px-4 py-10 md:px-6 lg:flex-row lg:items-center lg:justify-between xl:px-8">
          <h2 className="text-[24px] font-bold text-[#252B42]">Bandage</h2>

          <div className="flex items-center gap-5 text-[#23A6F0]">
            <span>f</span>
            <span>◎</span>
            <span>𝕏</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-10 md:px-6 xl:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-between">
          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-[#252B42]">Company Info</h4>
            <p className="text-[14px] text-[#737373]">About Us</p>
            <p className="text-[14px] text-[#737373]">Carrier</p>
            <p className="text-[14px] text-[#737373]">We are hiring</p>
            <p className="text-[14px] text-[#737373]">Blog</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-[#252B42]">Legal</h4>
            <p className="text-[14px] text-[#737373]">About Us</p>
            <p className="text-[14px] text-[#737373]">Carrier</p>
            <p className="text-[14px] text-[#737373]">We are hiring</p>
            <p className="text-[14px] text-[#737373]">Blog</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-[#252B42]">Features</h4>
            <p className="text-[14px] text-[#737373]">Business Marketing</p>
            <p className="text-[14px] text-[#737373]">User Analytic</p>
            <p className="text-[14px] text-[#737373]">Live Chat</p>
            <p className="text-[14px] text-[#737373]">Unlimited Support</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-[#252B42]">Resources</h4>
            <p className="text-[14px] text-[#737373]">IOS & Android</p>
            <p className="text-[14px] text-[#737373]">Watch a Demo</p>
            <p className="text-[14px] text-[#737373]">Customers</p>
            <p className="text-[14px] text-[#737373]">API</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-[#252B42]">Get In Touch</h4>

            <div className="flex w-full max-w-80.25">
              <input
                className="h-14.5 min-w-0 flex-1 border border-[#E6E6E6] bg-[#F9F9F9] px-5 text-[14px] outline-none"
                placeholder="Your Email"
              />
              <button className="h-14.5 bg-[#23A6F0] px-5 text-[14px] text-white">
                Subscribe
              </button>
            </div>

            <p className="text-[12px] text-[#737373]">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#FAFAFA]">
        <div className="mx-auto w-full max-w-330 px-4 py-6 md:px-6 xl:px-8">
          <p className="text-center text-[14px] font-semibold text-[#737373] md:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;