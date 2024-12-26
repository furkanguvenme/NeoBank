import { useNavigate } from "react-router"
import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"


export const Share = () => {

    const navigate = useNavigate();

    const onClick = (url:string):void => {
        navigate(url)
    }

  return (
    <>
        <div className="w-full flex flex-col items-center">
            <Header onClick={onClick}/>
        </div>
        <Footer/>
    </>
  )
}
