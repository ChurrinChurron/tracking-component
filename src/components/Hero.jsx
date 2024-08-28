import Nav from "./Nav"
import HeroImg from "./HeroImg"
import HeroTitle from "./HeroTitle"

const Hero = () => {
  return (
    <header>
      <Nav />
      <div className="lg:flex lg:items-center lg:justify-between lg:pl-[6em] lg:py-20 xl:pl-32 2xl:pl-52 3xl:pl-72">
        <HeroImg />
        <HeroTitle />
      </div>
    </header>
  )
}

export default Hero