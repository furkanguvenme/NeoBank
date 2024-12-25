import { useNavigate } from "react-router"
import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"
import { useForm } from "react-hook-form"
import { useState } from "react"

type Inputs = {
    money:string,
    rate:string,
    time:string,
    type:string,
}

export const Compound = () => {

    const navigate = useNavigate();

    const [result, setResult] = useState<number | null>(); 

    const [type, setType] = useState<string | null>();

    const onClick = (url: string):void => {
        navigate(url);
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };

    const hesapla = (data:Inputs) => {
        const money = parseFloat(data.money);
        const rate = parseFloat(data.rate);
        const time = parseFloat(data.time);

        if(type == "year"){ setResult(money*Math.pow((1 + rate), time)) }
        else if (type == "month"){ setResult(money*Math.pow((1+(rate/12)),time)) }

    }

    const sifirla = () => {
        reset();
        setResult(null);
        setType(null);
    }

  return (
    <>
        <div className="w-full h-full flex flex-col items-center">
            <Header onClick={onClick}/>
            <div className="w-4/5 h-3/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="compound-content flex flex-col items-center justify-center py-7">
                    <form className="flex flex-col gap-4 w-3/5 items-center justify-center" onSubmit={handleSubmit(hesapla)}>
                    <p>Lütfen zaman türü seçiniz!</p>
                        <div>
                            <label htmlFor="year">
                            <input
                                type="radio"
                                id="year"
                                name="type"
                                value="year"
                                checked={type === "year"}
                                onChange={handleChange}

                            />
                            <span>Yıl</span>
                            </label>
                            <label htmlFor="month">
                            <input
                                type="radio"
                                id="month"
                                name="type"
                                value="month"
                                checked={type === "month"}
                                onChange={handleChange}
                            />
                            <span>Ay</span>
                            </label>
                        </div>
                        <p>Seçilen zaman türü:<br/> {type == null ? "( Henüz seçim yapılmadı )" : type == "year" ? "( Yıl )" : "( Ay )"}</p>
                        <label htmlFor="money"></label>
                        <input id="money" type="number" className="compound-input" {...register("money", {required:"Bu alan gereklidir!"})}></input>
                        {errors.money && <span>{errors.money.message}</span>}

                        <label htmlFor="rate"></label>
                        <input id="rate" type="number" className="compound-input" step="0.01"{...register("rate", {required:"Bu alan gereklidir!"})}></input>
                        {errors.rate && <span>{errors.rate.message}</span>}

                        <label htmlFor="time"></label>
                        <input id="time" type="number" className="compound-input" {...register("time", {required:"Bu alan gereklidir!"})}></input>
                        {errors.time && <span>{errors.time.message}</span>}

                        <div>
                            <button type="submit">Hesapla</button>
                            <button type="button" onClick={sifirla}>Sıfırla</button>
                        </div>
                    </form>
                    <div>
                        <p>hesaplanan Faiz Miktarı:</p>
                        <p>{type == null ? "İlk olarak bir zaman türü seçiniz." : result}</p>
                    </div>
                </div>
                <div className="compound-content p-10 flex flex-col justify-center">
                    <h2 className="text-2xl">Bileşik Faiz Nedir?</h2>
                    <p className="pl-3">
                        Bileşik faiz, anaparanın ve önceki dönemlerde kazanılan faizlerin toplamı üzerinden faiz 
                        hesaplanan bir sistemdir. Bu yöntem, faizin "faiz getirmesi" prensibine dayanır ve birikimlerin 
                        daha hızlı büyümesini sağlar.
                    </p>
                    <br/>
                    
                    <h3 className="text-xl">Hesaplama Formülü:</h3><br/>
                    <div className="flex justify-center items-center">
                        <p className="pl-3">
                            <span>Yıl için:</span><br/>
                            <strong>A = P × (1 + r)<sup>n</sup></strong>
                        </p>
                        <p className="pl-10">
                            <span>Ay için:</span><br/>
                            <strong>A = P × (1 + r/12)<sup>n</sup></strong>
                        </p>
                    </div>
                    <br/>
                    <ul className="pl-3">
                        <li><strong>A:</strong> Gelecekteki toplam değer (ana para + faiz)</li>
                        <li><strong>P:</strong> Başlangıçtaki ana para</li>
                        <li><strong>r:</strong> Faiz oranı (dönemlik, ondalık olarak yazılır, örn. %5 için 0.05)</li>
                        <li><strong>n:</strong> Faiz uygulanacak dönem sayısı (Yıl veya ay olarak)</li>
                    </ul>
                    <br/>
                    
                    <h3 className="text-xl">Örnek:</h3>
                    <p className="pl-3">
                        10.000 TL anapara, yıllık %5 faiz oranı ve 3 yıl süreyle bileşik faiz uygulanırsa:
                    </p>
                    <div className="flex justify-center items-center">
                        <p className="text-lg font-semibold">
                            A = 10.000 × (1 + 0.05)<sup>3</sup> = 10.000 × 1.157625 = 11.576,25 TL
                        </p>
                    </div>
                    <br/>
                    <p className="pl-3">
                        Bu örnekte, 3 yılın sonunda toplam tutar 11.576,25 TL olur ve 1.576,25 TL faiz kazancı elde edilir.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}
