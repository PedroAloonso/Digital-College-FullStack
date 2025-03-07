import style from "./login.module.scss";

export default function Login() {
    // TODO: Fazer uma rota nova com um novo Layout
    return (
        <section className={style.container}>
            <div className={style.loginContainer}>
                <h1>Acesse a conta</h1>
                <h4>
                    Novo cliente? Então registre-se <a href="">aqui</a>.
                </h4>
                <form action="" method="post">
                    <div>
                        <div>
                            <label htmlFor="email">Login *</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Insira seu login ou email"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Senha *</label>
                            <input
                                type="text"
                                name="password"
                                placeholder="Insira sua senha"
                            />
                        </div>
                    </div>

                    <a href="">Esqueci minha senha</a>
                    <button>Acessar Conta</button>
                </form>
                <div>
                    <p>
                        Ou faça login com
                        <span>
                            <img src="" alt="Google" />
                        </span>
                        <span>
                            <img src="" alt="Facebook" />
                        </span>
                    </p>
                </div>
            </div>
            <div>{/* Para as imagens dos tênis */}</div>
        </section>
    );
}
