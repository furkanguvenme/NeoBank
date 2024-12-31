import { useNavigate } from "react-router";
import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"
import { useForm } from "react-hook-form";
import { useState } from "react";
import shareData from "../share_data";

type Inputs = {
    alinanHisse:number;
    hisseFiyati:number;
    islemUcreti:number;
    mevcutHisse:number;
    güncelFiyat:number;
    nakit:number;
    satisFiyati:number;
    alisFiyati:number;
    satilanHisse:number;
    islemTutari:number;
    yilPara:number;
    yilOran:number;
    yil:number;
    ayPara:number;
    ayOran:number;
    donemSayisi:number;
    ay:number;
}

export const Share = () => {

    const navigate = useNavigate();

    const onClick = (url: string):void => {
        navigate(url);
    }

    const {yatirimTuru, inputs} = shareData;

    const {
        register,
        handleSubmit,
        reset,
        formState:{ errors },
    } = useForm<Inputs>();

    const [selectedYatirimTuru, setSelectedYatirimTuru] = useState<string | null>(null);
    const [selectedIslem, setSelectedIslem] = useState<string | null>(null);

    const indexFind = (type: string | null): typeof yatirimTuru.tip[keyof typeof yatirimTuru.tip] | undefined => {
        if(selectedYatirimTuru != null){
        const key = Object.keys(yatirimTuru.tip).find((key) => key === type) as keyof typeof yatirimTuru.tip | undefined;
        return key ? yatirimTuru.tip[key] : undefined;}
    };

    const yatirimData = indexFind(selectedYatirimTuru);

    const yatirimTuruChange = (event: React.ChangeEvent<HTMLInputElement>):void =>{
        setSelectedYatirimTuru(event.target.value);
    }

    const islemTuruChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSelectedIslem(event.target.value);
    }
    
    const test = () =>{
        console.log(selectedYatirimTuru);
        console.log(selectedIslem);
    }

  return (
    <>
        <div className="w-full h-full flex flex-col items-center">
            <Header onClick={onClick}/>
            <div className="w-4/5 grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-6">
                <div className="share-content">
                    <form onSubmit={handleSubmit()}>
                        <div>
                            <p>Yatırım Türü Seçiniz:</p>
                            {Object.entries(yatirimTuru.tip).map((type)=>(
                                <label >
                                    <input
                                        type="radio"
                                        value={type[0]}
                                        checked={selectedYatirimTuru === type[0]}
                                        onChange={yatirimTuruChange}
                                    />
                                    <span>{type[1].text}</span>
                                </label>
                            ))}
                        </div>
                        <div>
                            <p>İşlem Türünü Seçiniz:</p>
                            {!yatirimData || !yatirimData.islemler ? (
                                <p>Tür Seçilmedi</p>
                            ) : (
                                Object.entries(yatirimData.islemler).map(([key, step]) => (
                                    <label key={key}>
                                        <input
                                            type="radio"
                                            value={key}
                                            checked={selectedIslem === key}
                                            onChange={islemTuruChange}
                                        />
                                        <span>{step.text}</span>
                                    </label>
                                ))
                            )}
                        </div>
                        <div>
                            
                        </div>
                    </form>
                    <button type="button" onClick={test}>Test</button>
                </div>
                <div className="share-content lg:p-10 p-6">
                    <h2 className="text-2xl">Hisse Senedi Yatırım Simülasyonu</h2>
                    <p className="pl-3">Hisse senedi yatırım simülasyonu, kullanıcıların sanal bir ortamda gerçek piyasa koşullarına benzer bir şekilde yatırım deneyimi yaşamasını sağlar. Bu simülasyon, hem kısa vadeli alım-satım işlemlerini hem de uzun vadeli yatırım büyümesini incelemenize olanak tanır.</p><br/>
                    <h3 className="text-xl">1. Alım-Satım Simülasyonu</h3>
                    <p>Bu mod, kullanıcıların hisse senedi alım ve satım işlemleri yapmasına, portföylerini yönetmesine ve işlem sonuçlarına göre kar/zarar durumlarını analiz etmesine olanak tanır. Aşağıdaki hesaplamalar bu modda kullanılmaktadır:</p>
                    <br/>
                    <ul className="pl-3">
                        <li><strong>Alım Maliyeti:</strong> Alınan Hisse Miktarı × Hisse Fiyatı + İşlem Ücreti (Varsa)</li>
                        <li><strong>Portföy Değeri:</strong> (Mevcut Hisse Miktarı × Guncel Hisse Fiyatı) + Nakit</li>
                        <li><strong>Kar/Zarar:</strong> (Satış Fiyatı - Alış Fiyatı) x Satılan Hisse Miktarı - İşlem Ücretleri</li>
                    </ul><br/>
                    <p className="pl-3">Bu mod, hisse alım-satımıyla ilgilenen kullanıcılar için idealdir ve piyasa dinamiklerini daha iyi anlamalarını sağlar.</p><br/>
                    <h3 className="text-xl">2. Uzun Vadeli Yatırım Simülasyonu</h3>
                    <p className="pl-3">Bu mod, belirli bir başlangıç tutarı, yıllık getiri oranı ve yatırım süresi girilerek yatırımın zamanla nasıl büyüyeceğini hesaplar. Aşağıdaki formül bu modda kullanılmaktadır:</p>
                    <div className="w-full flex justify-center py-3">
                        <p>Toplam Getiri = <br className="sm:hidden"/>Ana Para x ( 1 + r )<sup>Yıl</sup></p>
                    </div>
                    <h4 className="text-xl">Örnek:</h4>
                    <ul>
                        <li><strong>Girdi:</strong> 10,000 TL, %10 Yıllık Getiri, 5 Yıl</li>
                        <li><strong>Hesaplama:</strong> Toplam Getiri = 10.000 x ( 1 + 0.10 )<sup>5</sup>s = 16.105₺</li>
                    </ul>
                    <hr className="border-[1px] mt-3"/>
                    <div className="w-full flex justify-center py-3">
                        <p>Toplam Getiri = <br className="sm:hidden"/>Ana Para x ( 1 + r / d )<sup>(d * (t / 12))</sup></p>
                    </div>
                    <ul>
                        <li><strong>Getiri Oranı (r):</strong> Yıllık getiri oranı (%10 için 0.10).</li>
                        <li><strong>Dönem Sayısı (d):</strong> Yıl içindeki dönem sayısı (aylık için 12, çeyreklik için 4).</li>
                        <li><strong>Ay (t):</strong> Yatırım süresi</li>
                    </ul><br/>
                    <p>Bu mod, uzun vadeli yatırım stratejilerini anlamak ve yatırım planları oluşturmak isteyen kullanıcılar için uygundur.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
