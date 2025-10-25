import SwimLane from "./swim-lane";
import Banner from "./banner";

const HomeContent = () => {
    return(
        <div className="flex flex-col gap-6 p-6 w-[1320px]">
            <SwimLane />
            <Banner />
        </div>
    )
}


export default HomeContent;