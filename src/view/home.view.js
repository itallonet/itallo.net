import React from "react";
import banner from "../assets/images/banner.jpeg";
import itallo from "../assets/images/itallo.png";
import "../assets/css/home.css";

/**
 * HomeView
 * @description Home page
 * @returns {JSX.Element} HomeView
 */
export default class HomeView extends React.Component {
    render() {
        return (
            <div>
                <img src={banner} alt="Banner" id="banner" />
                <div id="home">
                    <img src={itallo} alt="Itallo" id="itallo" width={200} />
                    <div id="content">
                        <h1>🔥🔥 Itallo 🔥🔥</h1>
                        <h4>@itallonet</h4>
                        <small>Desenvolvedor e Consultor em OpenTelemetry e New Relic | Especialista em <br /> Gestão de Projetos e Liderança | Apaixonado por Soluções<br /> Inovadoras e Resultados Tangíveis | Comprometido com<br /> a Excelência e Satisfação do Cliente</small>
                        <div id="items">
                            <a target="_blank" href="https://youtube.com/@itallonet">
                                <i className="fa-brands fa-youtube"></i>
                                <span>YouTube</span>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                            <a target="_blank" href="https://twitch.tv/itallonet">
                                <i className="fa-brands fa-twitch"></i>
                                <span>Twitch</span>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                            <a target="_blank" href="https://twitter.com/@itallonet">
                                <i className="fa-brands fa-twitter"></i>
                                <span>Twitter</span>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/itallonet/">
                                <i className="fa-brands fa-linkedin"></i>
                                <span>LinkedIn</span>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                            <a href="mailto:contato@itallonet.tech">
                                <i className="fa-solid fa-envelope"></i>
                                <span>E-mail</span>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>=
            </div>
        );
    }
}