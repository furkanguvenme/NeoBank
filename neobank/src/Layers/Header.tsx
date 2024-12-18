import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <>
    <div className='flex flex-row items-center w-4/5 h-1/6 justify-between'>
        <img src={logo}/>
        <nav className="flex flex-row gap-5">
            <a href='#'>Ana Sayfa</a>
            <a href='#'>Hakkımda</a>
            <a href='#'>İşlemler</a>
            <a href='#'>İletişim</a>
        </nav>
    </div>
    </>
  )
}
