import logo from '../assets/logo.png';
import logok from '../assets/logok.png';
import { HiHome } from "react-icons/hi";
import { BsInfoSquareFill } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import './Header.css';

interface HeaderProps {
  onClick: (url: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onClick }) => {

  return (
    <div className="flex flex-row py-4 lg:py-14 items-center w-4/5 h-1/6 justify-between">
      <img className="lg:block hidden" src={logo} />
      <img className="lg:hidden block scale-50" src={logok} />
      <nav className="flex flex-row gap-5 lg:gap-10 items-center">
        <a className="navigation" onClick={() => onClick("/")}>Ana Sayfa</a>
        <HiHome className="icon" onClick={() => onClick("/")} />
        <a className="navigation" onClick={() => onClick("/hakkimda")}>Hakkımda</a>
        <BsInfoSquareFill className="icon" onClick={() => onClick("/hakkimda")} />
        <a className="navigation">İşlemler</a>
        <GiProcessor className="icon" />
        <a className="navigation" href="mailto:furkanguven.dev@gmail.com">İletişim</a>
        <FaPhoneSquareAlt className="icon" onClick={() => window.location.href = "mailto:furkanguven.dev@gmail.com"}/>
      </nav>
    </div>
  );
};
