import style from "./productPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import products from "../../assets/data/products.json"
import { Navigate, useParams } from "react-router-dom";

const slugToName = (slug) => slug.replace(/-/g, " ").toLowerCase();

export default function ProductPage() {
    const {category} = useParams()
    const productName = slugToName(category);
    const product = products.find(p => p.title === productName)

    if (!product) {
        console.log("deu ruim")
        return <Navigate to="/" replace />;
    }

    return (
        // #TODO: Adicionar o caminho formatado depois que tudo estiver funcionando
        <div>
            <div>
                <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className={`mySwiper ${style.customSwiper}`}
                >
                    <SwiperSlide>
                        <h1>{product.title}</h1>
                        <h1>{product.category}</h1>
                        <h1>{product.gender}</h1>
                        <h1>{product.value}</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1>aaaaaaaaaaaaaa</h1>
                        
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <h1></h1>
                <h3></h3>
            </div>
        </div>
    );
}
