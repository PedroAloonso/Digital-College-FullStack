import style from "./home.module.css";
import MainSlider from "../../components/MainSlider/MainSlider";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";
import TredingProducts from "../../components/TredingProducts/TredingProducts";

export default function Home() {
    return (
        <>
            <MainSlider />
            <FeaturedCollections />
            <TredingProducts />
        </>
    );
}
