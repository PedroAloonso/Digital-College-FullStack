import style from "./productPage.module.scss";

import { Navigate, useParams } from "react-router-dom";

import products from "../../assets/data/products.json";

import SliderWithPreview from "./SliderWithPreview/SliderWithPreview";
import ProductInfo from "./ProductInfo/ProductInfo";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductInputs from "./ProductInputs/ProductInputs";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const slugToName = (slug) => slug.replace(/-/g, " ").toLowerCase();

export default function ProductPage() {
    const { title } = useParams();
    var productTitle = ""
    var productId = ""

    if (title.includes("&")) {
        productTitle = title.split("&")[0];
        productId = title.split("&")[1];
    } else {
        productId = title 
    }
    
    const product = products.find((p) => p.id == productId || p.title === productTitle );

    if (!product) {
        console.log("deu ruim");
        return <Navigate to="/" replace />;
    }

    const sizes = [39, 40, 41, 42, 43];
    const colors = ["#6FEEFF", "#FF6969", "#5E5E5E", "#6D70B7"];
    return (
        <>
            <section>
                <Breadcrumb />
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
