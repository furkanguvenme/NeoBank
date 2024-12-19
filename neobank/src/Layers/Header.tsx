import logo from '../assets/logo.png';
import { HiHome } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
import { GiProcessor } from "react-icons/gi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import './Header.css';

export const Header = () => {
  return (
    <>
    <div className='flex flex-row items-center w-4/5 h-1/6 justify-between'>
        <img src={logo}/>
        <nav className="flex flex-row gap-5 lg:gap-10 items-center">
            <a className='navigation' href='#'>Ana Sayfa</a>
            <HiHome className='lg:hidden'/>
            <a className='navigation' href='#'>Hakkımda</a>
            <FcAbout className='lg:hidden'/>
            <a className='navigation' href='#'>İşlemler</a>
            <GiProcessor className='lg:hidden'/>
            <a className='navigation' href='#'>İletişim</a>
            <FaPhoneSquareAlt className='lg:hidden'/>
        </nav>
    </div>
    </>
  )
}
