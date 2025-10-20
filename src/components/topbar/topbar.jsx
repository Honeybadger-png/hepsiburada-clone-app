import './topbar.css'
import Header from './header';
import NavigationBar from './navigation-bar';





const Topbar = () => {
    return (
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
                <NavigationBar />
            </div>
        </div>
       
    )
}

export default Topbar;