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
            <div className="w-4/5 h-3/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="share-content"></div>
                <div className="share-content p-10">
                    <h2 className="text-2xl">Hisse Senedi Yatırım Simülasyonu</h2>
                    <p className="pl-3">Hisse senedi yatırım simülasyonu, kullanıcıların sanal bir ortamda gerçek piyasa koşullarına benzer bir şekilde yatırım deneyimi yaşamasını sağlar. Bu simülasyon, hem kısa vadeli alım-satım işlemlerini hem de uzun vadeli yatırım büyümesini incelemenize olanak tanır.</p><br/>
                    <h3 className="text-xl">1. Alım-Satım Simülasyonu</h3>
                    <p>Bu mod, kullanıcıların hisse senedi alım ve satım işlemleri yapmasına, portföylerini yönetmesine ve işlem sonuçlarına göre kar/zarar durumlarını analiz etmesine olanak tanır. Aşağıdaki hesaplamalar bu modda kullanılmaktadır:</p>
                    <br/>
                    <ul className="pl-3">
                        <li><strong>Alım Maliyeti:</strong> Alınan Hisse Miktarı × Hisse Fiyatı + İşlem Ücreti (Varsa)</li>
                        <li><strong>Portföy Değeri:</strong> (Sahip Olunan Hisse Miktarı × Guncel Hisse Fiyatı) + Nakit</li>
                        <li><strong>Kar/Zarar:</strong> (Satış Fiyatı - Alış Fiyatı) x Satılan Hisse Miktarı - İşlem Ücretleri</li>
                    </ul><br/>
                    <p className="pl-3">Bu mod, hisse alım-satımıyla ilgilenen kullanıcılar için idealdir ve piyasa dinamiklerini daha iyi anlamalarını sağlar.</p><br/>
                    <h3 className="text-xl">2. Uzun Vadeli Yatırım Simülasyonu</h3>
                    <p className="pl-3">Bu mod, belirli bir başlangıç tutarı, yıllık getiri oranı ve yatırım süresi girilerek yatırımın zamanla nasıl büyüyeceğini hesaplar. Aşağıdaki formül bu modda kullanılmaktadır:</p>
                    <div className="w-full flex justify-center py-3">
                        <p>Toplam Getiri = Ana Para x ( 1 + Yıllık Getiri )<sup>Yıl</sup></p>
                    </div>
                    <h4 className="text-xl">Örnek:</h4>
                    <ul>
                        <li><strong>Girdi:</strong> 10,000 TL, %10 Yıllık Getiri, 5 Yıl</li>
                        <li><strong>Hesaplama:</strong> Toplam Getiri = 10.000 x ( 1 + 0.10 )<sup>5</sup>s = 16.105₺</li>
                    </ul>
                    <p>Bu mod, uzun vadeli yatırım stratejilerini anlamak ve yatırım planları oluşturmak isteyen kullanıcılar için uygundur.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
