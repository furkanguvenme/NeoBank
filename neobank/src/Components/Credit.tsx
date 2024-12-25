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
        <div className="w-full h-full flex flex-col items-center">
            <Header onClick={onClick}/>
            <div className="w-4/5 h-3/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="credit-content">
                    
                </div>
                <div className="credit-content p-10">
                        <h2 className="text-2xl">Kredi Hesaplama Nedir?</h2>
                        <p className="pl-3">Kredi hesaplama, alınan kredinin faiz oranı ve geri ödeme süresine göre aylık taksitlerin belirlenmesidir. İki temel yöntem kullanılır:</p><br/>
                        <h3 className="text-xl">1. Sabit (Eşit) Taksitli Kredi</h3>
                        <p>Her ay eşit miktarda ödeme yapılır.</p><br/>
                        <h4 className="text-xl">Formül:</h4>
                        <div className="flex justify-center items-center py-7">
                            <p>Taksit =</p>
                            <div className="flex flex-col justify-center items-center pl-1">
                                <p className="border-b-2">A x FO x ( 1 + FO )<sup>r</sup></p>
                                <p className="pt-1">( 1 + FO )<sup>r</sup> - 1</p>
                            </div>
                        </div>
                        <ul className="pl-3">
                            <li><strong>Anapara (A):</strong> Alınan kredi miktarı</li>
                            <li><strong>Faiz Oranı (FO):</strong> Aylık faiz oranı (yıllık oranın 12'ye bölünmüş hali)</li>
                            <li><strong>Vade (r):</strong> Kredi süresi (ay cinsinden)</li>
                        </ul><br/>
                        <h4>Örnek:</h4>
                        <p>10.000 TL kredi, aylık %1,5 faiz ve 12 ay vade:</p>
                        <div className="flex justify-center items-center py-7">
                            <p>Taksit = </p>
                            <div className="flex flex-col justify-center items-center px-1">
                                <p className="border-b-2">10.000 x 0.015 x (1 + 0.015)<sup>12</sup></p>
                                <p className="pt-1">(1 + 0.015)<sup>12</sup> - 1</p>
                            </div>
                            <p>= 899₺</p>
                        </div>
                        <h3 className="text-xl">2. Azalan Bakiyeli Kredi (Değişken Taksit)</h3>
                        <p>Faiz, kalan anapara üzerinden hesaplanır. İlk taksitler yüksek, sonra düşük olur.</p><br/>
                        <h4 className="text-xl">Örnek:</h4>
                        <p>10.000 TL kredi, aylık %1,5 faiz ve 12 ay vade:</p>
                        <p>İlk ay:</p>
                        <ul className="pl-3">
                            <li><strong>Faiz:</strong> 10.000 x 0.015 = 150₺</li>
                            <li><strong>Ana Para Taksidi:</strong> 10.000 / 12 = 833.33₺</li>
                            <li><strong>Toplam:</strong> 983.33₺</li>
                        </ul>
                        <p>Sonraki aylar faiz azalan anapara üzerinden hesaplanır.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
