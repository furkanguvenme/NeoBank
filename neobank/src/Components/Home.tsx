import { Content } from "../Layers/Content"
import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"
import Slider from "../Layers/Slider"

export const Home = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center">
          <Header/>
          <Slider/>
          <Content/>
      </div>
      <Footer/>
    </>
  )
}
