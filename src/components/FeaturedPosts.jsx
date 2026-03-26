function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
      title: 'Loudest à la Madison #1',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      title: 'Loudest à la Madison #2',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80',
      title: 'Loudest à la Madison #3',
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-10 px-4 py-12 md:px-6 xl:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-[14px] font-bold text-[#23A6F0]">Practice Advice</span>
          <h2 className="text-[40px] font-bold text-[#252B42]">Featured Posts</h2>
          <p className="max-w-[450px] text-[14px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap lg:flex-nowrap">
          {posts.map((post) => (
            <div key={post.id} className="flex w-full flex-col bg-white md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <img
                src={post.image}
                alt={post.title}
                className="h-[300px] w-full object-cover"
              />

              <div className="flex flex-col gap-3 px-6 py-6">
                <div className="flex gap-4 text-[12px] text-[#23A6F0]">
                  <span>Google</span>
                  <span className="text-[#737373]">Trending</span>
                  <span className="text-[#737373]">New</span>
                </div>

                <h3 className="text-[20px] leading-7 text-[#252B42]">
                  {post.title}
                </h3>

                <p className="text-[14px] leading-5 text-[#737373]">
                  We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
                </p>

                <div className="flex items-center justify-between text-[12px] text-[#737373]">
                  <span>22 April 2021</span>
                  <span>10 comments</span>
                </div>

                <button className="w-fit text-[14px] font-bold text-[#737373]">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;