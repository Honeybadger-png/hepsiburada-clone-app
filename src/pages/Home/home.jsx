import Topbar from "../../components/topbar/topbar";
import HomeContent from "../../components/home-content/home-content";

const Home = () => {
    return (
        <div>
            <Topbar/>
            <div className="flex justify-center">
                <HomeContent />
            </div>
        </div>
    )
}

export default Home;