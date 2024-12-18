import logo from '../assets/logo.png';
import { HiHome } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
import { GiProcessor } from "react-icons/gi";
import { FaPhoneSquareAlt } from "react-icons/fa";

export const Header = () => {
  return (
    <>
    <div className='flex flex-row items-center w-4/5 h-1/6 justify-between'>
        <img src={logo}/>
        <nav className="flex flex-row gap-5 lg:gap-2 items-center">
            <a className='hidden lg:block no-underline' href='#'>Ana Sayfa</a>
            <HiHome className='lg:hidden'/>
            <a className='hidden lg:block no-underline' href='#'>Hakkımda</a>
            <FcAbout className='lg:hidden'/>
            <a className='hidden lg:block no-underline' href='#'>İşlemler</a>
            <GiProcessor className='lg:hidden'/>
            <a className='hidden lg:block no-underline' href='#'>İletişim</a>
            <FaPhoneSquareAlt className='lg:hidden'/>
        </nav>
    </div>
    </>
  )
}
