import Carousel from "react-bootstrap/Carousel";

import foto1 from "../../assets/ima1.jpeg";
import foto2 from "../../assets/ima2.jpeg";
import foto3 from "../../assets/ima3.jpeg";

const NuestraHistoria = () => {

    return (

        <div
            style={{
                marginTop: "100px",
                marginBottom: "100px"
            }}
        >

            <h2>
                Nuestra Historia ❤️
            </h2>
            <Carousel
                style={{
                    maxWidth: "700px",
                    margin: "40px auto"
                }}
            >

                <Carousel.Item>
                    <img
                        src={foto1}
                        alt="Foto 1"
                        className="d-block w-100"
                        style={{
                            borderRadius: "20px",
                            maxHeight: "500px",
                            objectFit: "cover"
                        }}
                    />

                    <Carousel.Caption>
                        <h3>Nuestro primera foto juntos</h3>
                        <p>El comienzo de una hermosa historia.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={foto2}
                        alt="Foto 2"
                        className="d-block w-100"
                        style={{
                            borderRadius: "20px",
                            maxHeight: "500px",
                            objectFit: "cover"
                        }}
                    />

                    <Carousel.Caption>
                        <h3>El gran sí 💍</h3>
                        <p>El día que decidimos caminar juntos para siempre.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={foto3}
                        alt="Foto 3"
                        className="d-block w-100"
                        style={{
                            borderRadius: "20px",
                            maxHeight: "500px",
                            objectFit: "cover"
                        }}
                    />

                    <Carousel.Caption>
                        <h3>Nuestro gran rencuentro </h3>
                        <p>Momentos que nunca olvidaremos.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

            <p
                style={{
                    maxWidth: "700px",
                    margin: "30px auto",
                    fontSize: "1.1rem",
                    lineHeight: "1.8"
                }}
            >
                Desde el día que nos conocimos comenzó una aventura llena de amor,
                risas, viajes, sueños compartidos y momentos inolvidables.
                Hoy queremos celebrar contigo el inicio de nuestro nuevo capítulo.
            </p>

        </div>

    );

};

export default NuestraHistoria;