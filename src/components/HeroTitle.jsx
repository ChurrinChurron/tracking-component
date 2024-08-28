const HeroTitle = () => {
    return (
      <div className="relative bottom-36 p-8 xl:bottom-12">
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full font-c-barlow font-bold tracking-widest text-white bg-very-d-blue">NEW</span>
          <h3 className="text-grayish-blue tracking-[.3em] font-c-barlow">MONOGRAPH DASHBOARD</h3>
        </div>
        <h1 className="my-4 font-c-barlow font-extrabold text-[2.6em] leading-[1.050em] text-very-d-blue xl:text-[3.5em] 3xl:text-[4em]">POWERFUL INSIGHTS <br className="hidden lg:block" />
            INTO YOUR TEAM</h1>
        <h2 className="font-barlow tracking-wide text-lg text-dark-g-blue">Project planning and time tracking <br className="hidden lg:block" />
            for agile teams</h2>
        <div className="flex items-center gap-6 mt-6 lg:mt-12">
          <a href="#" className="py-3 px-6 rounded-md font-c-barlow font-semibold tracking-widest text-white bg-red hover:brightness-150">SCHEDULE A DEMO</a>
          <h3 className="tracking-widest font-c-barlow text-grayish-blue">TO SEE A PREVIEW</h3>
        </div>
      </div>
    )
  }
  
  export default HeroTitle