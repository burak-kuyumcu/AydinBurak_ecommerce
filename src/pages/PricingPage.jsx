import {
  Check,
  ChevronRight,
} from 'lucide-react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

function PricingPage() {
  const plans = [
    {
      id: 1,
      name: 'FREE',
      price: '0',
      dark: false,
      features: [
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: '1GB Cloud storage', active: false },
        { text: 'Email and community support', active: false },
      ],
    },
    {
      id: 2,
      name: 'STANDARD',
      price: '9.99',
      dark: true,
      features: [
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: '1GB Cloud storage', active: false },
        { text: 'Email and community support', active: false },
      ],
    },
    {
      id: 3,
      name: 'PREMIUM',
      price: '19.99',
      dark: false,
      features: [
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: 'Unlimited product updates', active: true },
        { text: '1GB Cloud storage', active: false },
        { text: 'Email and community support', active: false },
      ],
    },
  ];

  const faqList = [
    'the quick fox jumps over the lazy dog',
    'the quick fox jumps over the lazy dog',
    'the quick fox jumps over the lazy dog',
    'the quick fox jumps over the lazy dog',
    'the quick fox jumps over the lazy dog',
    'the quick fox jumps over the lazy dog',
  ];

  return (
    <div className="flex w-full flex-col bg-[#FAFAFA]">
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-6 px-4 py-10 text-center md:px-6 md:py-14 xl:px-8">
          <span className="text-[16px] font-bold text-[#737373]">PRICING</span>

          <h1 className="text-[40px] font-bold leading-[50px] text-[#252B42] md:text-[58px] md:leading-[80px]">
            Simple Pricing
          </h1>

          <div className="flex items-center gap-2 text-[14px] font-bold">
            <span className="text-[#252B42]">Home</span>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <span className="text-[#737373]">Pricing</span>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-12 md:px-6 md:py-16 xl:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              Pricing
            </h2>

            <p className="max-w-[470px] text-[14px] leading-[20px] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics
            </p>

            <div className="flex items-center gap-4">
              <span className="text-[16px] font-bold text-[#252B42]">
                Monthly
              </span>

              <div className="flex h-8 w-16 items-center rounded-full border border-[#23A6F0] px-1">
                <div className="h-6 w-6 rounded-full bg-[#23A6F0]" />
              </div>

              <span className="text-[16px] font-bold text-[#252B42]">
                Yearly
              </span>

              <span className="rounded-[37px] bg-[#B2E3FF] px-5 py-2 text-[14px] font-bold text-[#23A6F0]">
                Save 25%
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`flex w-full max-w-[330px] flex-col items-center gap-8 rounded-[10px] border px-10 py-12 text-center ${
                  plan.dark
                    ? 'border-[#23A6F0] bg-[#252B42] text-white'
                    : 'border-[#23A6F0] bg-white text-[#252B42]'
                }`}
              >
                <div className="flex flex-col items-center gap-6">
                  <h3 className="text-[24px] font-bold">{plan.name}</h3>

                  <p
                    className={`max-w-[160px] text-[16px] font-bold ${
                      plan.dark ? 'text-white' : 'text-[#737373]'
                    }`}
                  >
                    Organize across all apps by hand
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[40px] font-bold text-[#23A6F0]">
                    {plan.price}
                  </span>

                  <div className="flex flex-col items-start">
                    <span className="text-[24px] font-bold text-[#23A6F0]">$</span>
                    <span className="text-[14px] font-bold text-[#8EC2F2]">
                      Per Month
                    </span>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-4">
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-left"
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full ${
                          feature.active ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'
                        }`}
                      >
                        <Check size={16} className="text-white" />
                      </div>

                      <span
                        className={`text-[14px] font-bold ${
                          plan.dark ? 'text-white' : 'text-[#252B42]'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-[#23A6F0] px-10 py-4 text-[14px] font-bold text-white">
                  Try for free
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8 pt-8 text-center">
            <span className="text-[14px] font-bold text-[#252B42]">
              Trusted By Over 4000 Big Companies
            </span>

            <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap">
              <span className="text-[40px] font-bold text-[#737373] opacity-60">
                hooli
              </span>
              <span className="text-[40px] font-bold text-[#737373] opacity-60">
                lyft
              </span>
              <span className="text-[40px] font-bold text-[#737373] opacity-60">
                stripe
              </span>
              <span className="text-[40px] font-bold text-[#737373] opacity-60">
                aws
              </span>
              <span className="text-[40px] font-bold text-[#737373] opacity-60">
                reddit
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-14 md:px-6 xl:px-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              Pricing FAQs
            </h2>

            <p className="max-w-[470px] text-[14px] leading-[20px] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-y-10">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="flex w-full gap-4 md:w-[calc(50%-16px)]"
              >
                <ChevronRight
                  size={18}
                  className="mt-1 shrink-0 text-[#23A6F0]"
                />

                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-bold text-[#252B42]">
                    {faq}
                  </h3>
                  <p className="text-[14px] leading-[20px] text-[#737373]">
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation veniam consequent sent nostrud amet.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[14px] text-[#737373]">
            Haven&apos;t got your answer? Contact our support
          </p>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-6 px-4 py-16 text-center md:px-6 xl:px-8">
          <h2 className="max-w-[450px] text-[40px] font-bold leading-[50px] text-[#252B42]">
            Start your 14 days free trial
          </h2>

          <p className="max-w-[420px] text-[14px] leading-[20px] text-[#737373]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>

          <button className="bg-[#23A6F0] px-10 py-4 text-[14px] font-bold text-white">
            Try it free now
          </button>

          <div className="flex items-center gap-6 text-[#23A6F0]">
            <FaTwitter size={20} />
            <FaFacebookF size={20} />
            <FaInstagram size={20} />
            <FaLinkedinIn size={20} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PricingPage;