import { IconContext } from 'react-icons';
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { RiArrowDownSLine } from "react-icons/ri";


const Header = () => {
    return(
        <div className='header'>
            <div className='flex flex-col justify-items-center'>
                <div><h1 className='text-4xl font-bold text-orange'>hepsiburada</h1></div>
                <div className='flex justify-center'>
                    <p class="preLogo">PREMIUM</p>
                </div>
            </div>
            <div className='flex items-center'> 
                <div className='flex h-[52px] items-center border-[1px] border-orange rounded-lg'>
                    <IconContext.Provider value={{className: "text-orange text-[18px]"}}>
                        <div className='flex items-center px-4'>
                            <CiSearch />
                        </div>
                    </IconContext.Provider>
                    <div className='flex w-[400px]'>
                        <input className='text-lg outline-0 ' type="text" placeholder='Urun, kategori veya marka ara'/>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <div className='flex items-center w-[160px] h-[48px]'>
                    <IconContext.Provider value={{className: "text-orange"}}>
                        <div className='flex items-center px-4'>
                            <FaMapMarkerAlt />
                        </div>
                    </IconContext.Provider>
                    <div className='relative w-full min-w-0 text-[14px]'>
                        <h4 className='truncate font-bold'>Konum</h4>
                        <h5 className='truncate'>Yenimahalle</h5>
                    </div>
                </div>
                <div className='flex items-center px-4 h-[48px] bg-red-500 rounded-lg text-white '>
                    <IconContext.Provider value={{className: "text-white text-[18px]"}}>
                        <div className='flex items-center pr-2'>
                            <BsPerson />
                        </div>
                    </IconContext.Provider>
                    <div className='relative min-w-0 text-[14px]'>
                        <h4 className='truncate font-bold'>Hesabim</h4>
                        <h5 className='truncate'>Mert Gul</h5>
                    </div>
                        <IconContext.Provider value={{className: "text-white text-[18px]"}}>
                        <div className='flex items-center pl-2'>
                            <RiArrowDownSLine />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className='flex items-center px-4 h-[48px] bg-gray-400 rounded-lg text-white' >
                    <IconContext.Provider value={{className: "text-white text-[18px]"}}>
                        <div className='flex items-center pr-2'>
                            <LuShoppingCart />
                        </div>
                    </IconContext.Provider>
                    <div className='relative min-w-0 text-[14px]'>
                        <h4 className='truncate font-bold'>Sepetim</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;