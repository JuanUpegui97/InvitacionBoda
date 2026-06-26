import { Button } from "react-bootstrap";
import videoPortada from "../assets/portada.mp4";
import "./Sobre.css";
import { motion } from "framer-motion";

interface Props {
    onAbrirInvitacion: () => void;
    nombresInvitado: string;
}

const Sobre = ({ onAbrirInvitacion }: Props) => {
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
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                <div className="contenido-portada">
                    <h1 className="titulo-portada">
                        Camille & Juan
                    </h1>

                    <h3 className="subtitulo-portada">
                        Se (re)marient
                    </h3>

                    <Button
                        size="lg"
                        variant="light"
                        onClick={onAbrirInvitacion}
                        className="boton-portada"
                    >
                        Voir l’invitation
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default Sobre;