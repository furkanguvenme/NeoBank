import { FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiLogoGmail } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer className="w-4/5 flex flex-row justify-between items-center my-10">
        <nav className="flex flex-col gap-5">
            <a href="#">Hakkımda</a>
            <a href="#">Gizlilik Politikası</a>
            <a href="#">Kullanım Şartları</a>
        </nav>
        <nav className="flex flex-col lg:flex-row gap-6 text-3xl">
            <a href="https://www.linkedin.com/in/devfurkang/" target="_blank"><FaLinkedin /></a>
            <a href="https://personal-website-sepia-one-96.vercel.app/" target="_blank"><CgProfile /></a>
            <a href="mailto:furkanguven.dev@gmail.com"><BiLogoGmail /></a>
        </nav>
    </footer>
  )
}
