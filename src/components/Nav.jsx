import Logo from "../assets/logo.svg"
import NavIcon from "../assets/icon-hamburger.svg"
import CloseIcon from "../assets/icon-close.svg"
import { useState } from "react"

const Nav = () => {

  const [click, setClick] = useState(true);

  return (
    <nav className="w-full relative flex justify-between items-center py-10 px-8 font-c-barlow lg:font-c-barlow lg:py-20 lg:px-32 xl:px-40 2xl:px-60 3xl:px-80">
        <img src={Logo} className="h-6 lg:h-8" alt="logo" />
        <div className="hidden font-bold text-lg tracking-wider lg:flex lg:gap-x-10">
          <a href="#" className="text-very-d-blue hover:underline">PRODUCT</a>
          <a href="#" className="text-very-d-blue hover:underline">FEATURES</a>
          <a href="#" className="text-very-d-blue hover:underline">PRICING</a>
          <span className="text-grayish-blue">●</span>
          <a href="#" className="text-grayish-blue hover:underline">LOGIN</a>
        </div>
        <button className="lg:hidden" onClick={() => setClick(!click)}>{click ? <img src={NavIcon} alt="nav icon"/> : <img src={CloseIcon} alt="close icon"/>}</button>
        {!click && 
          <div className="absolute flex flex-col items-center gap-y-4 rounded left-2/4 transform -translate-x-2/4 top-24 w-4/5 p-6 text-lg tracking-widest shadow-md bg-white">
            <a href="#" className="font-bold text-very-d-blue">PRODUCT</a>
            <a href="#" className="font-bold text-very-d-blue">FEATURES</a>
            <a href="#" className="font-bold text-very-d-blue">PRICING</a>
            <div className="w-full h-[.040em] bg-light-g-blue"></div>
            <a href="#" className="text-grayish-blue font-bold">LOGIN</a>  
          </div>
          }
    </nav>
  )
}

export default Nav