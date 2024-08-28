import Laptop from "../assets/illustration-devices.svg"

const HeroImg = () => {
  return (
    <div className="relative h-[32em] overflow-hidden -z-10 -top-[9em] sm:h-[34em] md:h-[38em] lg:absolute lg:top-0 lg:right-0 lg:order-1 xl:h-[40em] 3xl:h-[45em]">
      <div className="absolute left-[50%] h-[28em] w-6/12 rounded-bl-[4em] bg-light-g-blue sm:h-[34em] md:h-[38em] lg:left-[10%] lg:w-[37em] lg:h-[28em] xl:left-[15%] xl:w-[58em] xl:h-[25em] 3xl:w-[64em] 3xl:left-[10%]"></div>
      <img src={Laptop} className="absolute top-48 scale-125 -right-24 w-full max-w-[31em] h-auto sm:max-w-[35em] md:max-w-[41em] lg:relative lg:scale-100 xl:max-w-[50em] xl:-right-52 xl:top-52 2xl:max-w-[55em] 2xl:-right-60 3xl:max-w-[60em]" alt="laptop" />
    </div>
  )
}

export default HeroImg