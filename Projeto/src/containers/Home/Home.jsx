import MainSlider from "../../components/MainSlider/MainSlider";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";
import TredingProducts from "../../components/TredingProducts/TredingProducts";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";

export default function Home() {
    return (
        <>
            <MainSlider />
            <FeaturedCollections />
            <TredingProducts />
            <SpecialOffers />
        </>
    );
}
