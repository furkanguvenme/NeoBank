import { useNavigate } from "react-router";
import { Header } from "../Layers/Header";
import { Footer } from "../Layers/Footer";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

type Inputs = {
  money: number;
  rate: number;
  time: number;
  type: string;
};

export const Credit = () => {
  const navigate = useNavigate();

  const onClick = (url: string): void => {
    navigate(url);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [type, setType] = useState<string | null>();
  const [result, setResult] = useState<number | null>();
  const [odemePlani, setOdemePlani] = useState<Record<string, number>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };

  const hesapla = (data: Inputs): void => {
    if (type == "azalan") {
      let kalanOdeme = data.money;
      const anaParaTaksidi = data.money / data.time;
      const yeniOdemePlani: Record<string, number> = {};

      for (let ay = 1; ay <= data.time; ay++) {
        const faiz = kalanOdeme * data.rate;
        const toplamTaksit = faiz + anaParaTaksidi;

        yeniOdemePlani[`${ay}. Ay`] = parseFloat(
          Number(toplamTaksit).toFixed(2)
        );
        kalanOdeme -= anaParaTaksidi;
      }

      setOdemePlani(yeniOdemePlani);
    } else if (type == "sabit") {
      const A = data.money;
      const FO = data.rate;
      const r = data.time;

      const aylik =
        (A * FO * Math.pow(1 + FO, r)) / (Math.pow(1 + FO, r) - 1);
      setResult(aylik);
    }
  };

  const sifirla = (): void => {
    reset();
    setType(null);
    setOdemePlani({});
    setResult(null);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <Header onClick={onClick} />
        <div className="w-4/5 h-3/5 grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="credit-content flex flex-col items-center justify-center py-7">
            <form
              className="flex flex-col gap-4 w-3/5 items-center justify-center"
              onSubmit={handleSubmit(hesapla)}
            >
              <div className="flex flex-col items-center gap-2">
                <p className="font-medium text-lg">Faiz tipi seçiniz:</p>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="type"
                    value="sabit"
                    checked={type === "sabit"}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span>Sabit Faiz</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="type"
                    value="azalan"
                    checked={type === "azalan"}
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  <span>Azalan Faiz</span>
                </label>
                <p className="text-sm text-white">
                  {type == null
                    ? "Lütfen faiz tipi seçiniz!"
                    : type == "sabit"
                    ? "Sabit faiz hesabı"
                    : "Azalan faiz hesabı"}
                </p>
              </div>

              <label htmlFor="money" className="w-full">
                <input
                  id="money"
                  type="number"
                  className="credit-input"
                  placeholder="Kredi miktarı"
                  {...register("money", { required: "Bu alan gereklidir!" })}
                />
              </label>
              {errors.money && (
                <span className="text-white text-sm">
                  {errors.money.message}
                </span>
              )}

              <label htmlFor="rate" className="w-full">
                <input
                  id="rate"
                  type="number"
                  className="credit-input"
                  step="0.0001"
                  placeholder="Faiz oranı"
                  {...register("rate", { required: "Bu alan gereklidir!" })}
                />
              </label>
              {errors.rate && (
                <span className="text-red-500 text-sm">
                  {errors.rate.message}
                </span>
              )}

              <label htmlFor="time" className="w-full">
                <input
                  id="time"
                  type="number"
                  className="credit-input"
                  placeholder="Vade süresi (ay)"
                  {...register("time", { required: "Bu alan gereklidir!" })}
                />
              </label>
              {errors.time && (
                <span className="text-red-500 text-sm">
                  {errors.time.message}
                </span>
              )}

              <div className="flex w-full justify-between">
                <button
                  className="bg-blue-500 text-white px-2 lg:px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  type="submit"
                >
                  Hesapla
                </button>
                <button
                  className="bg-gray-500 text-white px-2 lg:px-4 py-2 rounded-md hover:bg-gray-600 transition"
                  type="button"
                  onClick={sifirla}
                >
                  Sıfırla
                </button>
              </div>
            </form>
            <div className={type != "azalan" ? "mt-6 text-center" : Object.keys(odemePlani).length > 0 ? "grid grid-rows-12 grid-flow-col mt-6 text-center gap-x-4 gap-y-2" : "mt-6 text-center"}>
              {type == null ? (
                <p>İlk olarak faiz tipi seçiniz</p>
              ) : type == "sabit" ? (
                <p>
                  <strong>Aylık ödemeniz gereken tutar:</strong> {result == null ? "Henüz işlem yapılmadı!" : `${result?.toFixed(2)} ₺`}
                </p>
              ) : (
                Object.entries(odemePlani).map(([key, value]) => (
                  <div key={key} className="text-sm text-white">
                    {`${key}: ${value}₺`}
                  </div>
                ))
              )}
            </div>
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
                        <div className="flex flex-col lg:flex-row justify-center lg:items-center py-7">
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
      <Footer />
    </>
  );
};