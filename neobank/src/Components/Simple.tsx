import { useNavigate } from "react-router";
import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"


export const Simple = () => {

    const navigate = useNavigate();

    function onClick(url: string): void {
      navigate(url);
    }

  return (
    <>
        <div className="w-full h-full flex flex-col items-center">
            <Header onClick={onClick}/>
            Simple
        </div>
        <Footer/>
    </>
  )
}
