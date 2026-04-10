function EditorsPick() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-330 flex-col gap-8 px-4 py-12 md:px-6 xl:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-[24px] font-bold text-[#252B42]">
            EDITOR&apos;S PICK
          </h2>
          <p className="text-[14px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.55fr]">
          <div className="relative overflow-hidden">
            <img
              src="/editor-men.jpg"
              alt="MEN"
              className="h-[300px] w-full object-cover md:h-[500px]"
            />
            <div className="absolute bottom-6 left-6 bg-white px-6 py-2 text-[14px] font-bold text-[#252B42]">
              MEN
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src="/editor-women.jpg"
              alt="WOMEN"
              className="h-[300px] w-full object-cover md:h-[500px]"
            />
            <div className="absolute bottom-6 left-6 bg-white px-6 py-2 text-[14px] font-bold text-[#252B42]">
              WOMEN
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative overflow-hidden">
              <img
                src="/editor-accessories.jpg"
                alt="ACCESSORIES"
                className="h-[300px] w-full object-cover md:h-[242px]"
              />
              <div className="absolute bottom-6 left-6 bg-white px-4 py-2 text-[12px] font-bold text-[#252B42]">
                ACCESSORIES
              </div>
            </div>

            <div className="relative overflow-hidden">
              <img
                src="/editor-kids.jpg"
                alt="KIDS"
                className="h-[300px] w-full object-cover md:h-[242px]"
              />
              <div className="absolute bottom-6 left-6 bg-white px-4 py-2 text-[12px] font-bold text-[#252B42]">
                KIDS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorsPick;