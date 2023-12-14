import UserExperience from "../../components/UserExperience/UserExperience";
import Banner from "./HomeComponets/Banner";
import OurFeatures from "./HomeComponets/OurFeatures";
import TopDeliveryMan from "./HomeComponets/TopDeliveryMan";
import WhyShipEase from "./HomeComponets/WhyShipEase";


const Home = () => {
    return (
        <div>
            <Banner/>
            <OurFeatures/>
            <WhyShipEase/>
            <TopDeliveryMan/>
            <UserExperience/>
        </div>
    );
};

export default Home;