import "./Footer.css";

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage : "url(/img/Rodapie.svg)" }} >
        <div className="redes" >
            <a href="https://github.com/JuanSposada">
                <img src="/img/githubLogo.png" alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/juansposada/">
                <img src="/img/linkedInLogo.png"alt="linkedin"/>
            </a>
            
        </div>
        <img src='/img/Logo.png' alt='LogoORg' />
        <strong>Desarrollado por JuanSposada</strong>
    </footer>
}

export default Footer;