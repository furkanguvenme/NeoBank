import "./Content.css";

interface ContentProps {
    onClick: (url: string) => void;
}
  
  export const Content: React.FC<ContentProps> = ({ onClick }) => {
    return (
      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        <button className="content bg-faiz" onClick={() => onClick("/simple")}>
          <p className="btn">Basit Faiz Hesaplama</p>
        </button>
        <button className="content bg-bilesik" onClick={() => onClick("/compound")}>
          <p className="btn">Bileşik Faiz Hesaplama</p>
        </button>
        <button className="content bg-kredi" onClick={() => onClick("/credit")}>
          <p className="btn">Kredi Hesaplama</p>
        </button>
        <button className="content bg-hisse" onClick={() => onClick("/share")}>
          <p className="btn">Hisse Senedi Yatırım Simülasyonu</p>
        </button>
      </div>
    );
  };
  