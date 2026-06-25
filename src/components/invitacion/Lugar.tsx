import imagenLugar from "../../assets/lugar.webp";

const Lugar = () => {

    return (
        <div className="seccion-invitacion">

            <h2>
                📍 Lieu de la célébration - L'ImpenSable
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

            <div className="card-seccion">

                <p>
                    Nous vous recevrons les pieds dans le sable, au milieu des arbres et des vignes.
                    À 30 minutes de Montpellier.
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
                    Voir la localisation
                </button>
            </div>

        </div>
    );

};

export default Lugar;