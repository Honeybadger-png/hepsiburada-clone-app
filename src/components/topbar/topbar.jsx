import './topbar.css'
import Header from './header';
import NavigationBar from './navigation-bar';





const Topbar = () => {
    return (
        <div className='w-full'>
            <div className='containerFullWidth'>
                <div className='topbar'>
                    <div className='topLinks'>
                        <ul className='linksList'>
                            <li>
                                <a href="">
                                    Siparislerim
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Super Fiyat, Super Teklif
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Yurt Disindan
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Kampanyalar
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Girisimci Kadinlar
                                </a>
                            </li>
                            <li><a href="">Musteri Hizmetleri</a></li>
                            <li><a href="">Hepsiburada Premium</a></li>
                            <li><a href="">Hepsiburada'da Satici Ol</a></li>
                        </ul>
                    </div>
                    <Header />
                </div>
            </div>
            <div className='flex w-full h-[10px]'>
                <div className='w-4/12 h-full bg-orange'></div>
                <div className='w-2/12 h-full bg-[#49C7ED]'></div>
                <div className='w-2/12 h-full bg-[#7723DB]'></div>
                <div className='w-2/12 h-full bg-[#57B900]'></div>
                <div className='w-2/12 h-full bg-[#5D196A]'></div>
            </div>
            <NavigationBar />
        </div>
       
    )
}

export default Topbar;