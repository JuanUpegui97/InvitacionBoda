import imagenLugar from "../../assets/lugar.webp";

const Lugar = () => {

    return (



        <div
            style={{
                marginTop: "120px",
                marginBottom: "120px"
            }}
        >

            <h2>
                📍 Lugar de la Celebración
            </h2>

            <img
                src={imagenLugar}
                alt="Lugar de la celebración"
                style={{
                    width: "100%",
                    maxWidth: "700px",
                    borderRadius: "20px",
                    marginTop: "30px",
                    marginBottom: "30px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
                }}
            />

            <h3>
                L'ImpenSable
            </h3>

            <p
                style={{
                    maxWidth: "600px",
                    margin: "20px auto",
                    lineHeight: "1.8"
                }}
            >
                Un lugar mágico rodeado de naturaleza donde celebraremos
                uno de los días más importantes de nuestras vidas.
            </p>

            <button
                className="btn btn-dark mt-4"
                onClick={() =>
                    window.open(
                        "https://www.google.com/maps/place/L'ImpenSable+-Tente+Lieu+de+r%C3%A9ception+-+H%C3%A9rault+-+Mariage+-+Bapt%C3%AAme+-+Aniane+-+Montpellier/@43.6696667,3.5664414,17z/data=!3m1!4b1!4m6!3m5!1s0x12b159bab0a40079:0x5cf7ae1dd964fd89!8m2!3d43.6696628!4d3.5690163!16s%2Fg%2F11vpdhdg8n?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D",
                        "_blank"
                    )
                }
            >
                Ver Ubicación
            </button>

        </div>

    );

};

export default Lugar;