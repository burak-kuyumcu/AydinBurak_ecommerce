import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Gökhan Özdemir',
      role: 'Project Manager',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Burak Kuyumcu',
      role: 'Full Stack Developer',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Ayşe Yılmaz',
      role: 'UI/UX Designer',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Mehmet Kaya',
      role: 'Frontend Developer',
      image:
        'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Elif Demir',
      role: 'Backend Developer',
      image:
        'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      name: 'Can Arslan',
      role: 'QA Engineer',
      image:
        'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 7,
      name: 'Zeynep Aksoy',
      role: 'Product Designer',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 8,
      name: 'Mert Şahin',
      role: 'Mobile Developer',
      image:
        'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 9,
      name: 'Deniz Acar',
      role: 'Marketing Specialist',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="flex w-full flex-col bg-white">
      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-8 text-center md:px-6 md:py-10 xl:px-8">
          <span className="text-[14px] font-bold tracking-[0.2px] text-[#737373]">
            WHAT WE DO
          </span>

          <h1 className="text-[40px] font-bold leading-[50px] text-[#252B42] md:text-[58px] md:leading-[80px]">
            Innovation tailored for you
          </h1>

          <div className="flex items-center justify-center gap-2 text-[14px] font-bold text-[#737373]">
            <span className="text-[#252B42]">Home</span>
            <span>{'>'}</span>
            <span>Team</span>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-4 px-4 pb-10 md:px-6 xl:px-8">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
                alt="Hero team"
                className="h-[300px] w-full object-cover md:h-[530px]"
              />
            </div>

            <div className="flex w-full flex-col gap-4 lg:w-1/2">
              <div className="flex flex-col gap-4 md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                  alt="team 1"
                  className="h-[250px] w-full object-cover md:h-[260px] md:w-1/2"
                />
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
                  alt="team 2"
                  className="h-[250px] w-full object-cover md:h-[260px] md:w-1/2"
                />
              </div>

              <div className="flex flex-col gap-4 md:flex-row">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                  alt="team 3"
                  className="h-[250px] w-full object-cover md:h-[260px] md:w-1/2"
                />
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
                  alt="team 4"
                  className="h-[250px] w-full object-cover md:h-[260px] md:w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-12 md:px-6 xl:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
              Meet Our Team
            </h2>
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

      <section className="w-full bg-white">
        <div className="mx-auto flex w-full max-w-330 flex-col items-center gap-6 px-4 py-16 text-center md:px-6 xl:px-8">
          <h2 className="max-w-[450px] text-[40px] font-bold leading-[50px] text-[#252B42]">
            Start your 14 days free trial
          </h2>

          <p className="max-w-[420px] text-[14px] leading-5 text-[#737373]">
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
            <FaLinkedinInFallback />
          </div>
        </div>
      </section>
    </div>
  );
}

function FaLinkedinInFallback() {
  return <span className="text-[20px] font-bold">in</span>;
}

export default TeamPage;