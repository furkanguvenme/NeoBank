import { Content } from "../Layers/Content";
import { Footer } from "../Layers/Footer";
import { Header } from "../Layers/Header";
import Slider from "../Layers/Slider";
import { useNavigate } from "react-router";

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
        <Content onClick={onClick} />
      </div>
      <Footer />
    </>
  );
};