import './topbar.css'

const NavigationBar = () => {
    return (
        <div className="w-full">
            <div className="h-[55px] bg-shady-gray shadow justify-items-center">
                <div className=" relative w-[1200px] h-full">
                    <ul className="flex h-full text-[14px] font-[600]">
                        <li className="flex h-full items-center px-[22px]">
                            <span>Elektronik</span>
                            <div className="ChildMenuItems">

                            </div>
                        </li>
                        <li className="flex h-full items-center px-[22px]">Moda</li>
                        <li className="flex h-full items-center px-[22px]">Ev, Yasam, 
                            Kirtasiye, Ofis</li>
                        <li className="flex h-full items-center px-[22px]">oto, Bahce, Yapi,Market</li>
                        <li className="flex h-full items-center px-[22px]">Anne, Bebek, Oyuncak</li>
                        <li className="flex h-full items-center px-[22px]">Spor,Outdoor</li>
                        <li className="flex h-full items-center px-[22px]">Kozmetik, Kisisel Bakim</li>
                        <li className="flex h-full items-center px-[22px]">Supermarket, Pet Shop</li>
                        <li className="flex h-full items-center px-[22px]">Kitap, Muzik, Film, Hobi</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;