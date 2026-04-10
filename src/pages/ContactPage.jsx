import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

function ContactPage() {
  return (
    <div className="flex w-full flex-col bg-white">
      {/* HERO */}
      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-10 md:px-6 lg:flex-row lg:items-center lg:justify-between xl:px-8">
          
          {/* LEFT */}
          <div className="flex w-full flex-col gap-6 text-center lg:w-1/2 lg:text-left">
            <span className="text-[14px] font-bold tracking-[0.2px] text-[#252B42]">
              CONTACT US
            </span>

            <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] md:text-[58px] md:leading-[80px]">
              Get in touch today!
            </h1>

            <p className="max-w-[320px] self-center text-[20px] leading-[30px] text-[#737373] lg:self-start">
              We know how large objects will act, but things on a small scale
            </p>

            <div className="flex flex-col gap-2">
              <span className="text-[24px] font-bold text-[#252B42]">
                Phone : +451 215 215
              </span>
              <span className="text-[24px] font-bold text-[#252B42]">
                Fax : +451 215 215
              </span>
            </div>

            <div className="flex items-center justify-center gap-6 text-[#252B42] lg:justify-start">
              <FaTwitter size={24} />
              <FaFacebookF size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
          </div>

          {/* RIGHT - Figma style */}
          <div className="relative flex w-full items-center justify-center lg:w-1/2">
            <div className="relative h-[320px] w-full max-w-[560px] md:h-[420px]">
              
              {/* circles */}
              <div className="absolute left-[5%] top-[8%] h-12 w-12 rounded-full bg-[#FCD5D5]" />
              <div className="absolute left-[12%] top-[2%] h-[240px] w-[240px] rounded-full bg-[#F8DADA] opacity-70 md:h-[320px] md:w-[320px]" />
              <div className="absolute bottom-[22%] left-[4%] h-3 w-3 rounded-full bg-[#8B7CFF]" />
              <div className="absolute right-[10%] top-[18%] h-3 w-3 rounded-full bg-[#8B7CFF]" />
              <div className="absolute bottom-[32%] right-[6%] h-4 w-4 rounded-full bg-[#FCD5D5]" />

              {/* main image */}
              <img
                src="/contact-hero.png"
                alt="Contact hero"
                className="absolute bottom-0 left-1/2 z-10 h-[280px] w-auto -translate-x-1/2 object-contain md:h-[390px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-14 text-center md:px-6 xl:px-8">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[14px] font-bold text-[#737373]">
              VISIT OUR OFFICE
            </span>
            <h2 className="max-w-[420px] text-[40px] font-bold leading-[50px] text-[#252B42]">
              We help small businesses with big ideas
            </h2>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap lg:flex-nowrap">
            
            <div className="flex w-full flex-col items-center gap-4 bg-white px-10 py-12 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <Phone size={48} className="text-[#23A6F0]" />
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@example.com
                </span>
                <span className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@ple.com
                </span>
              </div>
              <span className="text-[16px] font-bold text-[#252B42]">
                Get Support
              </span>
              <button className="rounded-[37px] border border-[#23A6F0] px-9 py-4 text-[14px] font-bold text-[#23A6F0]">
                Submit Request
              </button>
            </div>

            <div className="flex w-full flex-col items-center gap-4 bg-[#252B42] px-10 py-12 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <MapPin size={48} className="text-[#23A6F0]" />
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-bold text-white">
                  georgia.young@example.com
                </span>
                <span className="text-[14px] font-bold text-white">
                  georgia.young@ple.com
                </span>
              </div>
              <span className="text-[16px] font-bold text-white">
                Get Support
              </span>
              <button className="rounded-[37px] border border-[#23A6F0] px-9 py-4 text-[14px] font-bold text-[#23A6F0]">
                Submit Request
              </button>
            </div>

            <div className="flex w-full flex-col items-center gap-4 bg-white px-10 py-12 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <Mail size={48} className="text-[#23A6F0]" />
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@example.com
                </span>
                <span className="text-[14px] font-bold text-[#252B42]">
                  georgia.young@ple.com
                </span>
              </div>
              <span className="text-[16px] font-bold text-[#252B42]">
                Get Support
              </span>
              <button className="rounded-[37px] border border-[#23A6F0] px-9 py-4 text-[14px] font-bold text-[#23A6F0]">
                Submit Request
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-6 px-4 py-16 text-center md:px-6 xl:px-8">
          <ArrowRight size={48} className="rotate-90 text-[#23A6F0]" />

          <span className="text-[14px] font-bold text-[#252B42]">
            WE Can&apos;t WAIT TO MEET YOU
          </span>

          <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
            Let’s Talk
          </h2>

          <button className="bg-[#23A6F0] px-10 py-4 text-[14px] font-bold text-white">
            Try it free now
          </button>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;