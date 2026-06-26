import Carousel from "react-bootstrap/Carousel";
import "./NuestraHistoria.css";

import foto1 from "../../assets/ima1.jpeg";
import foto2 from "../../assets/ima2.jpeg";
import foto21 from "../../assets/ima21.jpeg";
import foto3 from "../../assets/ima3.jpeg";

const NuestraHistoria = () => {
    return (
        <div className="nuestra-historia">
            <h2 className="nuestra-historia-titulo">
                Notre histoire ❤️
            </h2>

            <Carousel className="nuestra-historia-carousel">

                <Carousel.Item>
                    <div className="carousel-imagen-wrapper">
                        <img
                            src={foto1}
                            alt="Foto 1"
                            className="carousel-imagen-historia"
                        />

                        <div className="carousel-overlay"></div>

                        <Carousel.Caption className="carousel-caption-custom">
                            <h3>Notre première photo ensemble</h3>
                            <p>
                                Le commencement d'une belle histoire,
                                évidemment au sommet d'une montagne.
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-imagen-wrapper">
                        <img
                            src={foto2}
                            alt="Foto 2"
                            className="carousel-imagen-historia"
                        />

                        <div className="carousel-overlay"></div>

                        <Carousel.Caption className="carousel-caption-custom">
                            <h3>Le grand OUI 💍</h3>
                            <p>
                                Le jour où nous avons décidé que nous avancerions
                                ensemble le reste de notre vie.
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-imagen-wrapper">
                        <img
                            src={foto21}
                            alt="Foto 3"
                            className="carousel-imagen-historia"
                        />

                        <div className="carousel-overlay"></div>

                        <Carousel.Caption className="carousel-caption-custom">
                            <h3>Mari et Femme</h3>
                            <p>
                                Vous pouvez embrasser la mariée 💕
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-imagen-wrapper">
                        <img
                            src={foto3}
                            alt="Foto 4"
                            className="carousel-imagen-historia"
                        />

                        <div className="carousel-overlay"></div>

                        <Carousel.Caption className="carousel-caption-custom">
                            <h3>Les retrouvailles</h3>
                            <p>
                                La distance installe des doutes,
                                chaque retrouvaille les balaye.
                            </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>

            </Carousel>

            <div className="card-seccion">
                <p>
                    Depuis le jour de notre rencontre, une merveilleuse aventure faite d’amour, de rires, de voyages, de rêves partagés et de moments inoubliables a commencé.
                    Aujourd’hui, nous souhaitons célébrer avec toi le début de ce nouveau chapitre de notre vie.
                </p>
            </div>

        </div>
    );
};

export default NuestraHistoria;