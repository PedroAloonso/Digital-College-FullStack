import Logo from "/src/assets/img/header/logo.png";

import { Link } from "react-router-dom";

export default function RegisterLoginHeader() {
    return (
        <>
            <header>
                <div>
                    <div>
                        <Link to={"../"}>
                            <img src={Logo} alt="" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
