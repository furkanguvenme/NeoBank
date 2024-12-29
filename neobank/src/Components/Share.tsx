import { useNavigate } from "react-router";
import { Footer } from "../Layers/Footer";
import { Header } from "../Layers/Header";
import { useForm } from "react-hook-form";
import { useState } from "react";

type Inputs = {
    piece:number;
    price:number;
    process:number;
    own:number;
    sales:number;
    buying:number;
    money:number;
    rate:number;
    period:number;
    time:number;
}

export const Share = () => {

    const navigate = useNavigate();

    const onClick = (url:string):void => {
        navigate(url)
    }

    
    const [type, setType] = useState<string | null>(null);

    const [step, setStep] = useState<string | null>(null);

    const [result, setResult] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        setType(event.target.value);
    }

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        setStep(event.target.value);
        reset();
    }

    const hesapla = (data: Inputs):void => {
        switch(step) {
            case "maliyet": {
                const sonuc = data.piece*data.price + data.process;
                setResult(sonuc);
                break;
            }
            case "deger": {
                const sonuc = data.piece*data.price + data.own;
                setResult(sonuc);
                break;
            }
            case "kar": {
                const sonuc = (data.sales - data.buying)*data.piece - data.process;
                setResult(sonuc);
                break;
            }
            case "year": {
                const sonuc = data.money*Math.pow((1 + data.rate), data.time);
                setResult(sonuc);
                break;
            }
            case "month": {
                const sonuc = data.money*Math.pow((1 + (data.rate / data.period)), (data.period*(data.time/12)));
                setResult(sonuc);
                break;
            }
            default:
                break;
        }
    }


    const sifirla = ():void => {
        reset();
        setResult(null);
    }

    const geri = ():void => {
        reset();
        setType(null);
        setStep(null);
        setResult(null);
    }

  return (
    <>
        <div className="w-full flex flex-col items-center">
            <Header onClick={onClick}/>
            <div className="w-4/5 h-3/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div className="share-content h-full justify-center py-7">
                    <div className={type == null ? "flex flex-col gap-4 w-full h-full items-center justify-center" : "hidden"}>
                        <p>Yapmak İstediğiniz İşlemi Seçiniz:</p>
                        <label htmlFor="alsat">
                            <input id="alsat" type="radio" name="type" value="alsat" checked={type === "alsat"} onChange={handleChange}/>
                            <span>Alım - Satım Simülasyonu</span>
                        </label>
                        <label htmlFor="uzun">
                            <input id="uzun" type="radio" name="type" value="uzun" checked={type === "uzun"} onChange={handleChange}/>
                            <span>Uzun Vadeli Yatırım</span>
                        </label>
                    </div>
                    <form className="flex flex-col gap-5 w-full h-full items-center justify-center" onSubmit={handleSubmit(hesapla)}>
                        <div className={type == "alsat" ? "flex flex-col w-3/5 justify-center gap-y-3" : "hidden"}>
                            <div className="flex flex-col items-center gap-y-2">
                            <p>Hesaplama türü seçiniz:</p>
                                <label htmlFor="maliyet" className="">
                                    <input id="maliyet" type="radio" name="step" value="maliyet" checked={step === "maliyet"} onChange={changeHandler}/>
                                    <span>Alım Maliyeti Hesabı</span>
                                </label>
                                <label htmlFor="deger">
                                    <input id="deger" type="radio" name="step" value="deger" checked={step === "deger"} onChange={changeHandler}/>
                                    <span>Portföy Değeri Hesabı</span>
                                </label>
                                <label htmlFor="kar">
                                    <input id="kar" type="radio" name="step" value="kar" checked={step === "kar"} onChange={changeHandler}/>
                                    <span>Kar/Zarar Hesabı</span>
                                </label>
                            </div>
                            <div className={step == "maliyet" ? "flex flex-col gap-y-3" : "hidden"}>
                                <label htmlFor="piece">
                                    <input id="piece" className="share-input" type="number" placeholder="Alınan hisse miktarı" {...register("piece", {required:"Bu alan gereklidir!"})}/>
                                    {errors.piece && <span>{errors.piece.message}</span>}
                                </label>
                                <label htmlFor="price">
                                    <input id="price" className="share-input" type="number" placeholder="Hisse fiyatı" {...register("price",{required:"Bu alan gereklidir!"})}/>
                                    {errors.price && <span>{errors.price.message}</span>}
                                </label>
                                <label htmlFor="process">
                                    <input id="process" className="share-input" type="number" placeholder="İşlem ücreti (varsa)" {...register("process",{required:"Bu alan gereklidir!"})}/>
                                    {errors.process && <span>{errors.process.message}</span>}
                                </label>
                            </div>
                            <div className={step == "deger" ? "flex flex-col gap-y-3" : "hidden"}>
                                <label htmlFor="piece">
                                    <input id="piece" className="share-input" type="number" placeholder="Mevcut hisse miktarı" {...register("piece", {required:"Bu alan gereklidir!"})}/>
                                    {errors.piece && <span>{errors.piece.message}</span>}
                                </label>
                                <label htmlFor="price">
                                    <input id="price" className="share-input" type="number" placeholder="Güncel hisse fiyatı" {...register("price",{required:"Bu alan gereklidir!"})}/>
                                    {errors.price && <span>{errors.price.message}</span>}
                                </label>
                                <label htmlFor="own">
                                    <input id="own" className="share-input" type="number" placeholder="Nakit" {...register("own",{required:"Bu alan gereklidir!"})}/>
                                    {errors.own && <span>{errors.own.message}</span>}
                                </label>
                            </div>
                            <div className={step == "kar" ? "flex flex-col gap-y-3" : "hidden"}>
                                <label htmlFor="sales">
                                    <input id="sales" className="share-input" type="number" placeholder="Satış fiyatı" {...register("sales", {required:"Bu alan gereklidir!"})}/>
                                    {errors.sales && <span>{errors.sales.message}</span>}
                                </label>
                                <label htmlFor="buying">
                                    <input id="buying" className="share-input" type="number" placeholder="Alış fiyatı" {...register("buying",{required:"Bu alan gereklidir!"})}/>
                                    {errors.buying && <span>{errors.buying.message}</span>}
                                </label>
                                <label htmlFor="piece">
                                    <input id="piece" className="share-input" type="number" placeholder="Satılan hisse miktarı" {...register("piece",{required:"Bu alan gereklidir!"})}/>
                                    {errors.piece && <span>{errors.piece.message}</span>}
                                </label>
                                <label htmlFor="process">
                                    <input id="process" className="share-input" type="number" placeholder="İşlem ücretleri (Varsa)" {...register("process",{required:"Bu alan gereklidir!"})}/>
                                    {errors.process && <span>{errors.process.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className={type == "uzun" ? "flex flex-col w-3/5 justify-center gap-y-3" : "hidden"}>
                            <div className="flex flex-col items-center gap-y-2">
                            <p>Vade türü seçiniz:</p>
                                <label htmlFor="year">
                                    <input id="year" type="radio" name="step" value="year" checked={step === "year"} onChange={changeHandler}/>
                                    <span>Yıl</span>
                                </label>
                                <label htmlFor="month">
                                    <input id="month" type="radio" name="step" value="month" checked={step === "month"} onChange={changeHandler}/>
                                    <span>Ay</span>
                                </label>
                            </div>
                            <div className={step == "year" ? "flex flex-col gap-y-3" : "hidden"}>
                                <label htmlFor="money">
                                    <input id="money" className="share-input" type="number" placeholder="Ana para" {...register("money",{required:"Bu alan gereklidir!"})}/>
                                    {errors.money && <span>{errors.money.message}</span>}
                                </label>
                                <label htmlFor="rate">
                                    <input id="rate" className="share-input" type="number" placeholder="Getiri Oranı (r)" {...register("rate",{required:"Bu alan gereklidir!"})}/>
                                    {errors.rate && <span>{errors.rate.message}</span>}
                                </label>
                                <label htmlFor="time">
                                    <input id="time" className="share-input" type="number" placeholder="Yatırım süresi (Yıl)" {...register("time",{required:"Bu alan gereklidir!"})}/>
                                    {errors.time && <span>{errors.time.message}</span>}
                                </label>
                            </div>
                            <div className={step == "month" ? "flex flex-col gap-y-3    " : "hidden"}>
                            <label htmlFor="money">
                                    <input id="money" className="share-input" type="number" placeholder="Ana para" {...register("money",{required:"Bu alan gereklidir!"})}/>
                                    {errors.money && <span>{errors.money.message}</span>}
                                </label>
                                <label htmlFor="rate">
                                    <input id="rate" className="share-input" type="number" placeholder="Getiri oranı (r)" {...register("rate",{required:"Bu alan gereklidir!"})}/>
                                    {errors.rate && <span>{errors.rate.message}</span>}
                                </label>
                                <label htmlFor="period">
                                    <input id="period" className="share-input" type="number" placeholder="Dönem sayısı (d)" {...register("period",{required:"Bu alan gereklidir!"})}/>
                                    {errors.period && <span>{errors.period.message}</span>}
                                </label>
                                <label htmlFor="time">
                                    <input id="time" className="share-input" type="number" placeholder="Yatırım süresi (t)" {...register("time",{required:"Bu alan gereklidir!"})}/>
                                    {errors.time && <span>{errors.time.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className={type != null && step != null ? "flex flex-col gap-y-3 sm:gap-y-0 sm:flex-row w-3/5 sm:justify-between" : "hidden"}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" type="submit">Hesapla</button>
                            <button className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" type="button" onClick={geri}>Geri</button>
                            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" type="button" onClick={sifirla}>Sıfırla</button>
                        </div>
                    </form>
                    <p className={result == null ? "hidden" : "block"}>{result}</p>
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
