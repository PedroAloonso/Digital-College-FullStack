import style from "./productPage.module.scss";

import { Navigate, useParams } from "react-router-dom";

import products from "../../assets/data/products.json";

import SliderWithPreview from "./SliderWithPreview/SliderWithPreview";
import ProductInfo from "./ProductInfo/ProductInfo"; 
import ProductDescription from "./ProductDescription/ProductDescription"; 
import ProductInputs from "./ProductInputs/ProductInputs";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

const slugToName = (slug) => slug.replace(/-/g, " ").toLowerCase();

export default function ProductPage() {
    const { category, brand, title } = useParams();
    const productName = slugToName(category);
    const product = products.find((p) => p.title === productName);

    if (!product) {
        console.log("deu ruim");
        return <Navigate to="/" replace />;
    }

    const sizes = [39, 40, 41, 42, 43];
    const colors = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];
    return (
        // #TODO: Componetizar os elementos
        <>
            <section>
                <BreadCrumb />
                <div className={style.externalContainer}>
                    <div className={style.leftContainer}>
                        <SliderWithPreview colors={colors} />
                    </div>
                    <div className={style.rigthContainer}>
                        {/* Rigth Top */}
                        <ProductInfo product={product} />
                        {/* Rigth Mid */}
                        <ProductDescription />
                        {/* Rigth Bot */}
                        <ProductInputs colors={colors} sizes={sizes} />
                    </div>
                </div>
            </section>
        </>
    );
}
