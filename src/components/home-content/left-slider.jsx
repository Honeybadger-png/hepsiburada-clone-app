import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";


const LeftBannerSlider = () => {
    return (

        <div className="relative w-full h-full bg-amber-400">
            <div className="absolute top-[45%] left-[16px] z-10">
                <div className="flex h-[36px] w-[36px] bg-amber-100 rounded-full justify-center items-center">
                    <IconContext.Provider value={{className:" w-[18px] h-[18px]"}}>
                        <FaChevronLeft />
                    </IconContext.Provider>
                </div>
            </div>
            <a href="">
                <div className="w-full h-full">
                    <img className="w-full h-full" src="/image/left_banner-example.png" alt="" />
                </div>
            </a>
            <div className="absolute top-[45%] right-[16px] z-10">
                <div className="flex  h-[36px] w-[36px] bg-amber-100 rounded-full justify-center items-center">
                    <IconContext.Provider value={{className:"w-[18px] h-[18px]"}} >
                        <FaChevronRight />
                    </IconContext.Provider>
                </div>
            </div>
            
        </div>
        
    )
}

export default LeftBannerSlider;