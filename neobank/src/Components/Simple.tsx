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
            <div className="w-4/5 h-3/5 grid grid-cols-2 gap-6">
                <div className="bg-black w-full h-[70vh]"></div>
                <div className="bg-black w-full h-[70vh]"></div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
