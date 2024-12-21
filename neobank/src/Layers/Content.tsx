import "./Content.css";

export const Content = () => {
  return (
    <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        <button className="content bg-faiz">
            <p className="btn">Basit Faiz Hesaplama</p>
        </button>
        <button className="content bg-bilesik">
            <p className="btn">Bileşik Faiz Hesaplama</p>
        </button>
        <button className="content bg-kredi">
            <p className="btn">Kredi Hesaplama</p>
        </button>
        <button className="content bg-hisse">
            <p className="btn">Hisse Senedi Yatırım Simülasyonu</p>
        </button>
    </div>
  )
}
