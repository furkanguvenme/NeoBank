import logo from '../assets/logo.png';
import logok from '../assets/logok.png';
import { HiHome } from "react-icons/hi2";
import { BsInfoSquareFill } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import './Header.css';

export const Header = () => {
  return (
    <>
    <div className='flex flex-row py-4 lg:py-14 items-center w-4/5 h-1/6 justify-between'>
        <img className='lg:block hidden' src={logo}/>
        <img className="lg:hidden block scale-50" src={logok}/>
        <nav className="flex flex-row gap-5 lg:gap-10 items-center">
            <a className='navigation' href='#'>Ana Sayfa</a>
            <HiHome className='icon'/>
            <a className='navigation' href='#'>Hakkımda</a>
            <BsInfoSquareFill className='icon'/>
            <a className='navigation' href='#'>İşlemler</a>
            <GiProcessor className='icon'/>
            <a className='navigation' href='#'>İletişim</a>
            <FaPhoneSquareAlt className='icon'/>
        </nav>
    </div>
    </>
  )
}
