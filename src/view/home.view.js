import React from "react";
import banner from "../assets/images/banner.jpeg";
import itallo from "../assets/images/itallo.png";
import "../assets/css/home.css";

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
                            {/* <a href="#">E-mail</a> */}
                            {/* <a href="#">Blog</a> */}
                        </div>
                    </div>
                </div>
                {/* <div id="modal"
                    class="hidden fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center">

                    <a class="fixed z-90 top-6 right-8 text-white text-5xl font-bold" href="javascript:void(0)"
                        onclick="closeModal()">&times;</a>

                    <img id="modal-img" class="max-w-[800px] max-h-[600px] object-cover" />
                </div> */}
            </div>
        );
    }
}