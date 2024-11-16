import style from "./home.module.css";
import FirstBanner from "../../components/FirstBanner/FirstBanner";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";
import TredingProducts from "../../components/TredingProducts/TredingProducts";

export default function Home() {
    return (
        <>
            <FirstBanner />
            <FeaturedCollections />
            <TredingProducts/>
        </>
    );
}
