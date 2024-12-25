import { useNavigate } from "react-router"
import { Header } from "../Layers/Header"
import { Footer } from "../Layers/Footer";


export const Credit = () => {

    const navigate = useNavigate();

    const onClick = (url: string):void => {
        navigate(url);
    }

  return (
    <>
        <div>
            <Header onClick={onClick}/>
            <div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
