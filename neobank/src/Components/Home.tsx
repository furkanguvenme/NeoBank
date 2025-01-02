import { Content } from "../Layers/Content";
import { Footer } from "../Layers/Footer";
import { Header } from "../Layers/Header";
import Slider from "../Layers/Slider";
import { useNavigate } from "react-router";
import { MdNotificationImportant } from "react-icons/md";


export const Home = () => {
  const navigate = useNavigate();

  function onClick(url: string): void {
    navigate(url);
  }

  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <Header onClick={onClick}/>
        <Slider />
        <p className="flex flex-row items-center text-red-700 mt-5"><MdNotificationImportant className="scale-[3] ml-2 lg:scale-125 lg:mr-1 mr-4"/> Hesaplama işlemleri geçmeden önce kullanım şartlarını okuyunuz!!! </p>
        <Content onClick={onClick} />
      </div>
      <Footer />
    </>
  );
};