import './topbar.css'

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
                <div className='header'>
                    <div className='flex flex-col justify-items-center'>
                        <div><h1 className='text-4xl font-bold text-orange'>hepsiburada</h1></div>
                        <div className='flex justify-center'>
                            <p class="preLogo">PREMIUM</p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
       
    )
}

export default Topbar;