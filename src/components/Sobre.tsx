import { Button } from "react-bootstrap";
import videoPortada from "../assets/portada.mp4";
import "./Sobre.css";
import { motion } from "framer-motion";

interface Props {
    onAbrirInvitacion: () => void;
    nombresInvitado: string;
}

const sobre = ({ onAbrirInvitacion }: Props) => {

    return (

        <div className="sobre-container">

            <video
                className="video-fondo"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={videoPortada} type="video/mp4" />
            </video>

            <motion.div
                className="overlay"
                initial={{
                    opacity: 0,
                    y: 50
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 2
                }}
            >

                <h1
                    style={{
                        fontSize: "5rem",
                        color: "white",
                        marginBottom: "20px"
                    }}
                >
                    Camille & Juan
                </h1>

                <h3
                    style={{
                        color: "white",
                        letterSpacing: "8px",
                        marginBottom: "40px"
                    }}
                >
                    NOS CASAMOS
                </h3>

                <Button
                    size="lg"
                    variant="light"
                    onClick={onAbrirInvitacion}
                >
                    Ver Invitación
                </Button>

            </motion.div>

        </div>

    );

};

export default sobre;