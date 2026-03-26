function EditorsPick() {
  const cards = [
    {
      id: 1,
      title: 'MEN',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      className: 'w-full md:w-[calc(50%-8px)] lg:w-[40%]',
    },
    {
      id: 2,
      title: 'WOMEN',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
      className: 'w-full md:w-[calc(50%-8px)] lg:w-[40%]',
    },
    {
      id: 3,
      title: 'ACCESSORIES',
      image:
        'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
      className: 'w-full lg:w-[20%]',
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-12 md:px-6 xl:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-[24px] font-bold text-[#252B42]">EDITOR’S PICK</h2>
          <p className="text-[14px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:flex-wrap lg:flex-nowrap">
          {cards.map((card) => (
            <div key={card.id} className={`relative overflow-hidden ${card.className}`}>
              <img
                src={card.image}
                alt={card.title}
                className="h-[300px] w-full object-cover md:h-[420px]"
              />
              <div className="absolute bottom-6 left-6 bg-white px-6 py-2 text-[14px] font-bold text-[#252B42]">
                {card.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EditorsPick;