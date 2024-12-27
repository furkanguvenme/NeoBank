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

    const [type, setType] = useState<string | null>();

    const [step, setStep] = useState<string | null>();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setType(event.target.value);
    }

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setStep(event.target.value);
        reset();
    }

    const hesapla = (data:Inputs):void => {

    }

    const sifirla = ():void => {
        reset();
    }

    console.log(type);

  return (
    <>
        <div className="w-full flex flex-col items-center">
            <Header onClick={onClick}/>
            <div className="w-4/5 h-3/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="share-content">
                    <form className={type == null ? "flex flex-col gap-4 w-full h-full items-center justify-center" : "hidden"}>
                        <label htmlFor="alsat">
                            <input id="alsat" type="radio" name="type" value="alsat" checked={type === "alsat"} onChange={handleChange}/>
                            <span>Alım - Satım Simülasyonu</span>
                        </label>
                        <label htmlFor="uzun">
                            <input id="uzun" type="radio" name="type" value="uzun" checked={type === "uzun"} onChange={handleChange}/>
                            <span>Uzun Vadeli Yatırım</span>
                        </label>
                    </form>
                    <form className="flex flex-col gap-4 w-full h-full items-center justify-center" onSubmit={handleSubmit(hesapla)}>
                        <div>
                            <div className={type == null ? "hidden" : type == "alsat" ? "flex flex-col gap-4 w-full h-full items-center justify-center" : "hidden"}>
                                <label htmlFor="maliyet">
                                    <input id="maliyet" type="radio" name="step" value="maliyet" checked={step === "maliyet"} onChange={changeHandler}/>
                                    <span>Alım Maliyeti Hesaplama</span>
                                </label>
                                <label htmlFor="deger">
                                    <input id="deger" type="radio" name="step" value="deger" checked={step === "deger"} onChange={changeHandler}/>
                                    <span>Portföy Değeri Hesaplama</span>
                                </label>
                                <label htmlFor="kar">
                                    <input id="kar" type="radio" name="step" value="kar" checked={step === "kar"} onChange={changeHandler}/>
                                    <span>Kar/Zarar Hesaplaması</span>
                                </label>
                            </div>
                            <div className={step == null ? "hidden" : step == "maliyet" ? "block" : "hidden"}>
                                <label htmlFor="piece">
                                    <span></span>
                                    <input id="piece" type="number" {...register("piece", {required:"Bu alan gereklidir!"})}/>
                                    {errors.piece && <span>{errors.piece.message}</span>}
                                </label>
                                <label htmlFor="price">
                                    <span></span>
                                    <input id="" type="number" {...register("price",{required:"Bu alan gereklidir!"})}/>
                                    {errors.price && <span>{errors.price.message}</span>}
                                </label>
                                <label htmlFor="process">
                                    <span></span>
                                    <input id="process" type="number" {...register("process",{required:"Bu alan gereklidir!"})}/>
                                    {errors.process && <span>{errors.process.message}</span>}
                                </label>
                            </div>
                            <div className={step == null ? "hidden" : step == "deger" ? "block" : "hidden"}>
                                <label htmlFor="piece">
                                    <span></span>
                                    <input id="piece" type="number" {...register("piece", {required:"Bu alan gereklidir!"})}/>
                                    {errors.piece && <span>{errors.piece.message}</span>}
                                </label>
                                <label htmlFor="price">
                                    <span></span>
                                    <input id="price" type="number" {...register("price",{required:"Bu alan gereklidir!"})}/>
                                    {errors.price && <span>{errors.price.message}</span>}
                                </label>
                                <label htmlFor="own">
                                    <span></span>
                                    <input id="own" type="number" {...register("own",{required:"Bu alan gereklidir!"})}/>
                                    {errors.own && <span>{errors.own.message}</span>}
                                </label>
                            </div>
                            <div className={step == null ? "hidden" : step == "kar" ? "block" : "hidden"}>
                                <label htmlFor="sales">
                                    <span></span>
                                    <input id="sales" type="number" {...register("sales", {required:"Bu alan gereklidir!"})}/>
                                    {errors.sales && <span>{errors.sales.message}</span>}
                                </label>
                                <label htmlFor="buying">
                                    <span></span>
                                    <input id="buying" type="number" {...register("buying",{required:"Bu alan gereklidir!"})}/>
                                    {errors.buying && <span>{errors.buying.message}</span>}
                                </label>
                                <label htmlFor="piece">
                                    <span></span>
                                    <input id="piece" type="number" {...register("piece",{required:"Bu alan gereklidir!"})}/>
                                    {errors.piece && <span>{errors.piece.message}</span>}
                                </label>
                                <label htmlFor="process">
                                    <span></span>
                                    <input id="process" type="number" {...register("process",{required:"Bu alan gereklidir!"})}/>
                                    {errors.process && <span>{errors.process.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className={type == "uzun" ? "block" : "hidden"}>
                            <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
                                <label htmlFor="year">
                                    <input id="year" type="radio" name="step" value="year" checked={step === "year"} onChange={changeHandler}/>
                                    <span>Yıl</span>
                                </label>
                                <label htmlFor="month">
                                    <input id="month" type="radio" name="step" value="month" checked={step === "month"} onChange={changeHandler}/>
                                    <span>Ay</span>
                                </label>
                            </div>
                            <div className={step == "year" ? "block" : "hidden"}>
                                <label htmlFor="money">
                                    <span></span>
                                    <input id="money" type="number" {...register("money",{required:"Bu alan gereklidir!"})}/>
                                </label>
                                <label htmlFor="rate">
                                    <span></span>
                                    <input id="rate" type="number" {...register("rate",{required:"Bu alan gereklidir!"})}/>
                                </label>
                                <label htmlFor="time">
                                    <span></span>
                                    <input id="time" type="number" {...register("time",{required:"Bu alan gereklidir!"})}/>
                                </label>
                            </div>
                            <div className={step == "month" ? "block" : "hidden"}>
                            <label htmlFor="money">
                                    <span></span>
                                    <input id="money" type="number" {...register("money",{required:"Bu alan gereklidir!"})}/>
                                </label>
                                <label htmlFor="rate">
                                    <span></span>
                                    <input id="rate" type="number" {...register("rate",{required:"Bu alan gereklidir!"})}/>
                                </label>
                                <label htmlFor="period">
                                    <span></span>
                                    <input id="period" type="number" {...register("period",{required:"Bu alan gereklidir!"})}/>
                                </label>
                                <label htmlFor="time">
                                    <span></span>
                                    <input id="time" type="number" {...register("time",{required:"Bu alan gereklidir!"})}/>
                                </label>
                            </div>
                        </div>
                        <div className={type != null && step != null ? "block" : "hidden"}>
                            <button type="submit">Hesapla</button>
                            <button type="button" onClick={sifirla}>Sıfırla</button>
                        </div>
                    </form>
                </div>
                <div className="share-content lg:p-10 p-6">
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
                        <p>Toplam Getiri = Ana Para x ( 1 + r )<sup>Yıl</sup></p>
                    </div>
                    <h4 className="text-xl">Örnek:</h4>
                    <ul>
                        <li><strong>Girdi:</strong> 10,000 TL, %10 Yıllık Getiri, 5 Yıl</li>
                        <li><strong>Hesaplama:</strong> Toplam Getiri = 10.000 x ( 1 + 0.10 )<sup>5</sup>s = 16.105₺</li>
                    </ul>
                    <hr className="border-[1px] mt-3"/>
                    <div className="w-full flex justify-center py-3">
                        <p>Toplam Getiri = Ana Para x ( 1 + r / d )<sup>(t / 12)</sup></p>
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
