import { useNavigate } from "react-router";
import { Footer } from "../Layers/Footer"
import { Header } from "../Layers/Header"
import { useForm } from "react-hook-form"
import { useState } from "react";

type Inputs = {
  money: string
  rate: string
  time: string
}

export const Simple = () => {

    const navigate = useNavigate();

    const {
      register,
      handleSubmit, // handleSubmit'i buraya ekliyoruz
      reset,
      formState: { errors },
    } = useForm<Inputs>();

    const [result, setResult] = useState<number | null>();

    function onClick(url: string): void {
      navigate(url);
    }

    // Formun submit fonksiyonu
    const hesapla = (data: Inputs) => {
      const money = parseFloat(data.money);
      const rate = parseFloat(data.rate);
      const time = parseFloat(data.time);

      const interest = money * rate * time;
      setResult(interest);
    }

    const sifirla = () => {
      reset();
      setResult(null); // Sonucu sıfırlıyoruz
    }

  return (
    <>
        <div className="w-full h-full flex flex-col items-center">
            <Header onClick={onClick}/>
            <div className="w-4/5 h-3/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
                <div className="simple-content flex flex-col items-center justify-center py-7">
                <form className="flex flex-col gap-4 w-3/5 items-center justify-center" onSubmit={handleSubmit(hesapla)}>
                  <label htmlFor="mainMoney">Ana Para</label>
                  <input className="simple-input" type="number" id="mainMoney" {...register("money", {required: "Bu alan gereklidir!"})} />
                  {errors.money && <span>{errors.money.message}</span>}

                  <label htmlFor="rate">Faiz Oranı</label>
                  <input className="simple-input" type="number" id="rate" step="0.0001" {...register("rate", { required: "Bu alan gereklidir!" })} />
                  {errors.rate && <span>{errors.rate.message}</span>}

                  <label htmlFor="time">Faiz Süresi</label>
                  <input className="simple-input" type="number" id="time" {...register("time", {required: "Bu alan gereklidir!"})}></input>
                  {errors.time && <span>{errors.time.message}</span>}

                  <div className="flex gap-14">
                    <button type="submit">Hesapla</button>
                    <button type="button" onClick={sifirla}>Sıfırla</button>
                  </div>
                </form>
                <div className="py-5 flex flex-col gap-3">
                  <h3>Hesaplanan Faiz Miktarı:</h3>
                  <p className="bg-white text-black flex justify-center">{result}</p>
                </div>
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
