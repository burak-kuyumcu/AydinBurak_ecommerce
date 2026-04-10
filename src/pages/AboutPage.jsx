import { FaTwitter, FaFacebookF, FaInstagram, FaPlay } from 'react-icons/fa';

function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Username',
      role: 'Profession',
      image: '/team1.jpg',
    },
    {
      id: 2,
      name: 'Username',
      role: 'Profession',
      image: '/team2.jpg',
    },
    {
      id: 3,
      name: 'Username',
      role: 'Profession',
      image: '/team3.jpg',
    },
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
    <div className="flex w-full flex-col bg-white">
      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-10 md:px-6 lg:flex-row lg:items-center lg:justify-between xl:px-8">
          <div className="flex w-full flex-col gap-5 text-center lg:w-[42%] lg:text-left">
            <span className="text-[14px] font-bold tracking-[0.2px] text-[#252B42]">
              ABOUT COMPANY
            </span>

            <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] md:text-[48px] md:leading-[60px]">
              ABOUT US
            </h1>

            <p className="max-w-[280px] self-center text-[14px] leading-[20px] text-[#737373] lg:self-start">
              We know how large objects will act, but things on a small scale
            </p>

            <button className="w-fit self-center bg-[#23A6F0] px-8 py-3 text-[14px] font-bold text-white lg:self-start">
              Get Quote Now
            </button>
          </div>

          <div className="relative flex w-full items-center justify-center lg:w-[58%]">
            <div className="relative h-[300px] w-full max-w-[520px] md:h-[360px]">
              <div className="absolute left-[6%] top-[8%] h-10 w-10 rounded-full bg-[#FCD5D5]" />
              <div className="absolute left-[18%] top-[0%] h-[210px] w-[210px] rounded-full bg-[#F8DADA] opacity-75 md:h-[260px] md:w-[260px]" />
              <div className="absolute bottom-[24%] left-[8%] h-2.5 w-2.5 rounded-full bg-[#8B7CFF]" />
              <div className="absolute right-[14%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#8B7CFF]" />
              <div className="absolute bottom-[32%] right-[10%] h-3 w-3 rounded-full bg-[#FCD5D5]" />

              <img
                src="/technology1.png"
                alt="About hero"
                className="absolute bottom-0 left-1/2 z-10 h-[260px] w-auto -translate-x-1/2 object-contain md:h-[330px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-6 px-4 py-10 md:px-6 lg:flex-row lg:items-start lg:justify-between xl:px-8">
          <div className="flex w-full flex-col gap-3 lg:w-[33%]">
            <span className="text-[14px] font-bold text-[#E74040]">
              Problems trying
            </span>

            <h2 className="max-w-[260px] text-[20px] font-bold leading-[30px] text-[#252B42]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h2>
          </div>

          <div className="w-full lg:w-[54%]">
            <p className="text-[14px] leading-[20px] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics. Problems trying to
              resolve the conflict between the two major realms of Classical
              physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-6 px-4 py-6 text-center md:flex-row md:flex-wrap md:px-6 lg:flex-nowrap lg:justify-between xl:px-8">
          <div className="flex flex-col items-center gap-1 md:w-1/2 lg:w-[23%]">
            <h3 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              15K
            </h3>
            <p className="text-[14px] font-bold text-[#737373]">Happy Customers</p>
          </div>

          <div className="flex flex-col items-center gap-1 md:w-1/2 lg:w-[23%]">
            <h3 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              150K
            </h3>
            <p className="text-[14px] font-bold text-[#737373]">Monthly Visitors</p>
          </div>

          <div className="flex flex-col items-center gap-1 md:w-1/2 lg:w-[23%]">
            <h3 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              15
            </h3>
            <p className="text-[14px] font-bold text-[#737373]">Countries Worldwide</p>
          </div>

          <div className="flex flex-col items-center gap-1 md:w-1/2 lg:w-[23%]">
            <h3 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              100+
            </h3>
            <p className="text-[14px] font-bold text-[#737373]">Top Partners</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 px-4 py-8 md:px-6 xl:px-8">
          <div className="relative w-full overflow-hidden rounded-[12px]">
            <img
              src="/video-cover.jpg"
              alt="video cover"
              className="h-[240px] w-full object-cover md:h-[340px]"
            />

            <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#23A6F0] text-white shadow-lg">
              <FaPlay size={16} className="ml-0.5" />
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-12 md:px-6 xl:px-8">
          <div className="flex flex-col items-center gap-2 text-center">
            <h2 className="text-[24px] font-bold leading-[32px] text-[#252B42]">
              Meet Our Team
            </h2>
            <p className="max-w-[420px] text-[12px] leading-[18px] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex w-full flex-col items-center text-center md:w-[calc(33.333%-16px)]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[180px] w-full object-cover"
                />

                <div className="flex flex-col items-center gap-2 py-4">
                  <h3 className="text-[14px] font-bold text-[#252B42]">
                    {member.name}
                  </h3>
                  <p className="text-[12px] font-semibold text-[#737373]">
                    {member.role}
                  </p>

                  <div className="flex items-center gap-4 text-[#23A6F0]">
                    <FaFacebookF size={14} />
                    <FaInstagram size={14} />
                    <FaTwitter size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-4 px-4 py-10 text-center md:px-6 xl:px-8">
          <h2 className="text-[24px] font-bold leading-[32px] text-[#252B42]">
            Big Companies Are Here
          </h2>
          <p className="max-w-[420px] text-[12px] leading-[18px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-8 py-4 md:flex-row md:flex-wrap md:gap-10">
            {companyLogos.map((logo) => (
              <img
                key={logo.id}
                src={logo.image}
                alt={logo.name}
                className="h-6 w-auto object-contain opacity-60"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto grid w-full max-w-330 grid-cols-1 md:grid-cols-[0.48fr_0.52fr]">
          <div className="flex flex-col justify-center gap-4 bg-[#2A7CC7] px-8 py-12 text-white md:px-10">
            <span className="text-[12px] font-bold tracking-[0.2px]">
              WORK WITH US
            </span>

            <h2 className="max-w-[240px] text-[28px] font-bold leading-[36px]">
              Now Let’s grow Yours
            </h2>

            <p className="max-w-[280px] text-[12px] leading-[18px] text-white/90">
              The gradual accumulation of information about atomic and small-scale
              behavior during the first quarter of the 20th
            </p>

            <button className="w-fit border border-white px-8 py-3 text-[12px] font-bold text-white">
              Button
            </button>
          </div>

          <div className="w-full">
            <img
              src="/work-with-us.jpg"
              alt="work with us"
              className="h-[320px] w-full object-cover md:h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;