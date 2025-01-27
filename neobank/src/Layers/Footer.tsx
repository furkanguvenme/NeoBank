import { FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from "react";

export const Footer = () => {

  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Sayfa yönlendirmesini engeller
    setShowAlert(true); // Uyarı mesajını göster
  };

  const closeAlert = () => {
    setShowAlert(false); // Uyarı mesajını kapat
  };

  return (
    <footer className="w-4/5 flex flex-row justify-between items-center my-10">
        <nav className="flex flex-col gap-5">
            <a href="/aboutme">Hakkımda</a>
            <a href="#">Gizlilik Politikası</a>
            <a
              href="#"
              onClick={handleLinkClick}
            >
              Kullanım Şartları
            </a>
            {showAlert && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                <div className="w-4/5 lg:w-1/5 bg-white p-6 rounded-lg shadow-lg text-center">
                  <p className="text-lg mb-4 text-left">
                  Yapacağınız hesaplamalar ve verdiğim bilgiler, araştırmam doğrultusunda elde ettiğim verilere dayanmaktadır. Ancak, sağlanan bilgilerin kesin doğruluğunu garanti edememekteyim.<br/><br/>
Lütfen önemli kararlar almadan önce bu bilgileri doğrulamayı ihmal etmeyiniz. Ayrıca, bu bilgilerden kaynaklanabilecek herhangi bir hata, eksiklik veya yanlış anlaşılma durumunda hiçbir şekilde sorumluluk veya yükümlülük kabul etmediğimi belirtmek isterim.
                  </p>
                  <button
                    onClick={closeAlert}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            )}
        </nav>
        <nav className="flex flex-col lg:flex-row gap-6 text-3xl">
            <a href="https://www.linkedin.com/in/devfurkang/" target="_blank"><FaLinkedin /></a>
            <a href="https://furkan-guven.vercel.app/" target="_blank"><CgProfile /></a>
            <a href="mailto:furkanguven.dev@gmail.com"><BiLogoGmail /></a>
        </nav>
    </footer>
  )
}
