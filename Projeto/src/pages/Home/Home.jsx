import MainSlider from "../../components/MainSlider/MainSlider";
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections";
import TrendingProducts from "../../components/TrendingProducts/TrendingProducts";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";

export default function Home() {
    return (
        <>
            <MainSlider />
            <FeaturedCollections />
            <TrendingProducts />
            <SpecialOffers />
        </>
    );
}
