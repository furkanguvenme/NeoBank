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
            <div className="w-4/5 h-3/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="simple-content">

                </div>
                <div className="simple-content p-10 flex flex-col justify-center">
                  <h2 className="text-2xl">Basit Faiz Nedir?</h2>
                  <p className="pl-3">Basit faiz, bir ana para üzerinden belirli bir süre ve faiz oranı ile kazanç veya borç maliyetinin hesaplanması yöntemidir.</p><br/>
                  
                  <h3 className="text-xl">Basit Faiz Hesaplama Formülü:</h3>
                  <p className="pl-3">Basit faiz şu formül ile hesaplanır:</p><br/>
                  <div className="flex justify-center items-center">
                    <p className="text-lg font-semibold">F = A × r × t</p>
                  </div>
                  <br />
                  <ul>
                    <li><strong className="pl-3">F:</strong> Hesaplanan faiz miktarı</li>
                    <li><strong className="pl-3">A:</strong> Ana para (başlangıçtaki miktar)</li>
                    <li><strong className="pl-3">r:</strong> Faiz oranı (yüzde olarak belirtilen oran, ondalık forma dönüştürülmeli; örneğin, %5 → 0.05)</li>
                    <li><strong className="pl-3">t:</strong> Zaman (yıl bazında ifade edilir)</li>
                  </ul><br/>
                  
                  <h3 className="text-xl">Örnek Hesaplama:</h3>
                  <p className="pl-3">Bir kişi, 10.000 TL tutarındaki bir parayı %5 yıllık faiz oranıyla 3 yıl boyunca yatırırsa, hesaplama şu şekilde yapılır:</p>
                  <p className="pl-3"><em>F = 10.000 × 0.05 × 3 = 1.500 TL</em></p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
