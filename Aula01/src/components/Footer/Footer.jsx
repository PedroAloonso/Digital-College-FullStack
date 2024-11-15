import style from "./footer.module.css";
import Logo from "/src/assets/img/footer/logo.png";
import FacebookIcon from "/src/assets/img/footer/facebook-icon.png";
import InstagramIcon from "/src/assets/img/footer/instagram-icon.png";
import TwitterIcon from "/src/assets/img/footer/twitter-icon.png";

export default function Footer() {
    return (
        <>
            <footer>
                <div className={style.footerTop}>
                    <div className={style.footerOrganizationAbout}>
                        <img src={Logo} alt="Digital Store logo" className={style.footerLogo}/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore.
                        </p>
                        <div className={style.footerOrganizationAboutLinks}>
                            <a href="#">
                                <img src={FacebookIcon} alt="facebook" />
                            </a>
                            <a href="#">
                                <img src={InstagramIcon} alt="instagram" />
                            </a>
                            <a href="#">
                                <img src={TwitterIcon} alt="twitter" />
                            </a>
                        </div>
                    </div>
                    <div className={style.footerAboutAndCategories}>
                        <div className={style.footerAbout}>
                            <h3>Informação</h3>
                            <ul>
                                <li>
                                    <a href="#">Sobre Drip Store</a>
                                </li>
                                <li>
                                    <a href="#">Segurança</a>
                                </li>
                                <li>
                                    <a href="#">Wishlist</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Trabalhe conosco</a>
                                </li>
                                <li>
                                    <a href="#">Meus Pedidos</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.footerCategories}>
                            <h3>Categorias</h3>
                            <ul>
                                <li>
                                    <a href="#">Camisetas</a>
                                </li>
                                <li>
                                    <a href="#">Calças</a>
                                </li>
                                <li>
                                    <a href="#">Bonés</a>
                                </li>
                                <li>
                                    <a href="#">Headphones</a>
                                </li>
                                <li>
                                    <a href="#">Tênis</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.footerContact}>
                        <h3>Contato</h3>
                        <div className={style.footerContactBotton}>
                            <p>
                                Av. Santos Dumont, 1510 - 1 andar - Aldeota,
                                Fortaleza - CE, 60150-161
                            </p>
                            <p>(85) 3051-3411</p>
                        </div>
                    </div>
                </div>
                <div className={style.footerBotton}>
                    <span> </span>
                    <p>@ 2022 Digital College.</p>
                </div>
            </footer>
        </>
    );
}
