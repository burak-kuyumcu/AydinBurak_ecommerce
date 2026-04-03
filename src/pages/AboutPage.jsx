import { FaTwitter, FaFacebookF, FaInstagram, FaPlay } from 'react-icons/fa';

function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Zeynep Aksoy',
      role: 'Project Manager',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Burak Kuyumcu',
      role: 'Full Stack Developer',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Gökhan Özdemir',
      role: 'Frontend Developer',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="flex w-full flex-col bg-white">
      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-10 md:px-6 lg:flex-row lg:items-center lg:justify-between xl:px-8">
          <div className="flex w-full flex-col gap-6 text-center lg:w-1/2 lg:text-left">
            <span className="text-[14px] font-bold tracking-[0.2px] text-[#252B42]">
              ABOUT COMPANY
            </span>

            <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] md:text-[58px] md:leading-[80px]">
              ABOUT US
            </h1>

            <p className="max-w-[320px] self-center text-[20px] leading-[30px] text-[#737373] lg:self-start">
              We know how large objects will act, but things on a small scale
            </p>

            <button className="w-fit self-center bg-[#23A6F0] px-10 py-4 text-[14px] font-bold text-white lg:self-start">
              Get Quote Now
            </button>
          </div>

          <div className="flex w-full justify-center lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
              alt="About hero"
              className="h-[300px] w-full max-w-[500px] object-cover md:h-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-12 md:px-6 lg:flex-row lg:items-start lg:justify-between xl:px-8">
          <div className="flex w-full flex-col gap-4 lg:w-[35%]">
            <span className="text-[14px] font-bold text-[#E74040]">
              Problems trying
            </span>

            <h2 className="max-w-[280px] text-[24px] font-bold leading-[32px] text-[#252B42]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
          </div>

          <div className="w-full lg:w-[55%]">
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
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-8 text-center md:px-6 md:flex-row md:flex-wrap md:gap-y-10 lg:flex-nowrap lg:justify-between xl:px-8">
        <div className="flex flex-col items-center gap-2 md:w-1/2 lg:w-[23%]">
            <h3 className="text-[58px] font-bold leading-[80px] text-[#252B42]">
            15K
            </h3>
            <p className="text-[16px] font-bold text-[#737373]">Happy Customers</p>
        </div>

        <div className="flex flex-col items-center gap-2 md:w-1/2 lg:w-[23%]">
            <h3 className="text-[58px] font-bold leading-[80px] text-[#252B42]">
            150K
            </h3>
            <p className="text-[16px] font-bold text-[#737373]">Monthly Visitors</p>
        </div>

        <div className="flex flex-col items-center gap-2 md:w-1/2 lg:w-[23%]">
            <h3 className="text-[58px] font-bold leading-[80px] text-[#252B42]">
            15
            </h3>
            <p className="text-[16px] font-bold text-[#737373]">Countries Worldwide</p>
        </div>

        <div className="flex flex-col items-center gap-2 md:w-1/2 lg:w-[23%]">
            <h3 className="text-[58px] font-bold leading-[80px] text-[#252B42]">
            100+
            </h3>
            <p className="text-[16px] font-bold text-[#737373]">Top Partners</p>
        </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 px-4 py-10 md:px-6 xl:px-8">
          <div className="relative w-full overflow-hidden rounded-[20px]">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80"
              alt="video cover"
              className="h-[300px] w-full object-cover md:h-[500px]"
            />

            <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#23A6F0] text-white shadow-lg">
              <FaPlay size={22} className="ml-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-14 md:px-6 xl:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              Meet Our Team
            </h2>
            <p className="max-w-[450px] text-[14px] leading-[20px] text-[#737373]">
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:gap-7.5">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex w-full flex-col items-center text-center md:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[300px] w-full object-cover md:h-[231px]"
                />

                <div className="flex flex-col items-center gap-3 py-6">
                  <h3 className="text-[16px] font-bold text-[#252B42]">
                    {member.name}
                  </h3>
                  <p className="text-[14px] font-semibold text-[#737373]">
                    {member.role}
                  </p>

                  <div className="flex items-center gap-5 text-[#23A6F0]">
                    <FaFacebookF size={16} />
                    <FaInstagram size={16} />
                    <FaTwitter size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FAFAFA]">
        <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-6 px-4 py-14 text-center md:px-6 xl:px-8">
          <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
            Big Companies Are Here
          </h2>
          <p className="max-w-[500px] text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-10 py-6 md:flex-row md:flex-wrap">
            <span className="text-[40px] font-bold text-[#737373] opacity-60">hooli</span>
            <span className="text-[40px] font-bold text-[#737373] opacity-60">lyft</span>
            <span className="text-[40px] font-bold text-[#737373] opacity-60">stripe</span>
            <span className="text-[40px] font-bold text-[#737373] opacity-60">aws</span>
            <span className="text-[40px] font-bold text-[#737373] opacity-60">reddit</span>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col md:flex-row">
          <div className="flex w-full flex-col justify-center gap-6 bg-[#2A7CC7] px-6 py-12 text-white md:w-1/2 md:px-10">
            <span className="text-[14px] font-bold tracking-[0.2px]">
              WORK WITH US
            </span>

            <h2 className="max-w-[280px] text-[40px] font-bold leading-[50px]">
              Now Let’s grow Yours
            </h2>

            <p className="max-w-[320px] text-[14px] leading-[20px] text-white/90">
              The gradual accumulation of information about atomic and small-scale
              behavior during the first quarter of the 20th
            </p>

            <button className="w-fit border border-white px-10 py-4 text-[14px] font-bold text-white">
              Button
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
              alt="work with us"
              className="h-[300px] w-full object-cover md:h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;