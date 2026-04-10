import { Check, ChevronRight } from 'lucide-react';
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

  const companyLogos = [
    { id: 1, name: 'hooli', image: '/hooli.svg' },
    { id: 2, name: 'lyft', image: '/lyft.svg' },
    { id: 3, name: 'leaf', image: '/leaf.svg' },
    { id: 4, name: 'stripe', image: '/stripe.svg' },
    { id: 5, name: 'aws', image: '/aws.svg' },
    { id: 6, name: 'reddit', image: '/reddit.svg' },
  ];

  return (
    <div className="flex w-full flex-col bg-[#FAFAFA]">
      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-4 px-4 py-10 text-center md:px-6 md:py-12 xl:px-8">
          <span className="text-[16px] font-bold text-[#737373]">PRICING</span>

          <h1 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
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
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-10 md:px-6 md:py-12 xl:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              Pricing
            </h2>

            <p className="max-w-[470px] text-[14px] leading-[20px] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-[16px] font-bold text-[#252B42]">
                Monthly
              </span>

              <div className="flex h-7 w-14 items-center rounded-full border border-[#23A6F0] px-1">
                <div className="h-5 w-5 rounded-full bg-[#23A6F0]" />
              </div>

              <span className="text-[16px] font-bold text-[#252B42]">
                Yearly
              </span>

              <span className="rounded-[37px] bg-[#B2E3FF] px-4 py-1.5 text-[14px] font-bold text-[#23A6F0]">
                Save 25%
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-0 pt-2 lg:flex-row lg:items-center lg:justify-center">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`flex w-full max-w-[327px] flex-col items-center gap-8 border px-8 py-10 text-center ${
                  plan.dark
                    ? 'z-10 min-h-[730px] rounded-[10px] border-[#23A6F0] bg-[#252B42] text-white lg:-my-4'
                    : 'min-h-[680px] rounded-[10px] border-[#23A6F0] bg-white text-[#252B42]'
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
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
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

          <div className="flex flex-col items-center gap-6 pt-8 text-center">
            <span className="text-[14px] font-bold text-[#252B42]">
              Trusted By Over 4000 Big Companies
            </span>

            <div className="flex w-full flex-col items-center justify-center gap-8 py-4 md:flex-row md:flex-wrap md:gap-12">
              {companyLogos.map((logo) => (
                <img
                  key={logo.id}
                  src={logo.image}
                  alt={logo.name}
                  className="h-8 w-auto object-contain opacity-60"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-12 md:px-6 xl:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              Pricing FAQs
            </h2>

            <p className="max-w-[470px] text-[14px] leading-[20px] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics
            </p>
          </div>

          <div className="flex flex-col gap-y-8 md:flex-row md:flex-wrap md:gap-x-8">
            {faqList.map((faq, index) => (
              <div
                key={index}
                className="flex w-full gap-3 md:w-[calc(50%-16px)]"
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
        <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-5 px-4 py-12 text-center md:px-6 xl:px-8">
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

          <div className="flex items-center gap-5 text-[#23A6F0]">
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