function Footer() {
  return (
    <footer className="bg-white">
      <div className="w-full border-b border-[#E6E6E6] bg-[#FAFAFA]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-[24px] px-[24px] py-[40px] lg:flex-row lg:items-center lg:justify-between lg:px-[100px]">
          <h2 className="text-[24px] font-bold text-[#252B42]">Bandage</h2>

          <div className="flex items-center gap-[20px] text-[#23A6F0]">
            <span>f</span>
            <span>◎</span>
            <span>𝕏</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-[40px] px-[24px] py-[50px] lg:px-[100px]">
        <div className="flex flex-col gap-[30px] md:flex-row md:flex-wrap md:justify-between">
          <div className="flex flex-col gap-[12px]">
            <h4 className="text-[16px] font-bold text-[#252B42]">Company Info</h4>
            <p className="text-[14px] text-[#737373]">About Us</p>
            <p className="text-[14px] text-[#737373]">Carrier</p>
            <p className="text-[14px] text-[#737373]">We are hiring</p>
            <p className="text-[14px] text-[#737373]">Blog</p>
          </div>

          <div className="flex flex-col gap-[12px]">
            <h4 className="text-[16px] font-bold text-[#252B42]">Legal</h4>
            <p className="text-[14px] text-[#737373]">About Us</p>
            <p className="text-[14px] text-[#737373]">Carrier</p>
            <p className="text-[14px] text-[#737373]">We are hiring</p>
            <p className="text-[14px] text-[#737373]">Blog</p>
          </div>

          <div className="flex flex-col gap-[12px]">
            <h4 className="text-[16px] font-bold text-[#252B42]">Features</h4>
            <p className="text-[14px] text-[#737373]">Business Marketing</p>
            <p className="text-[14px] text-[#737373]">User Analytic</p>
            <p className="text-[14px] text-[#737373]">Live Chat</p>
            <p className="text-[14px] text-[#737373]">Unlimited Support</p>
          </div>

          <div className="flex flex-col gap-[12px]">
            <h4 className="text-[16px] font-bold text-[#252B42]">Resources</h4>
            <p className="text-[14px] text-[#737373]">IOS & Android</p>
            <p className="text-[14px] text-[#737373]">Watch a Demo</p>
            <p className="text-[14px] text-[#737373]">Customers</p>
            <p className="text-[14px] text-[#737373]">API</p>
          </div>

          <div className="flex flex-col gap-[12px]">
            <h4 className="text-[16px] font-bold text-[#252B42]">Get In Touch</h4>

            <div className="flex">
              <input
                className="h-[58px] w-[200px] border border-[#E6E6E6] bg-[#F9F9F9] px-[20px] text-[14px] outline-none"
                placeholder="Your Email"
              />
              <button className="h-[58px] bg-[#23A6F0] px-[20px] text-[14px] text-white">
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
        <div className="mx-auto max-w-[1440px] px-[24px] py-[25px] lg:px-[100px]">
          <p className="text-[14px] font-semibold text-[#737373]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;