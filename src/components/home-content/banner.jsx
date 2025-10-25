import LeftBannerSlider from "./left-slider";
import RightBannerSlider from "./right-slider";

const Banner = () => {
    return(
        <div className="flex w-full gap-3 items-center">
            <div className="w-8/12 h-[264px]">
                <LeftBannerSlider />
            </div>
            <div className="w-4/12 h-[264px]">
                <RightBannerSlider />
            </div>
        </div>
    )
}

export default Banner;