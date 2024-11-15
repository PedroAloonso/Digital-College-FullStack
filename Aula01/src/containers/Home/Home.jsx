import style from "./home.module.css";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";
import FirstBanner from "../../components/FirstBanner/FirstBanner";

export default function Home() {
    return (
        <>
            <FirstBanner />
            <FeaturedCollections />
        </>
    );
}
