import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Hero from "./invitacion/Hero";
import "./Invitacion.css";
import NuestraHistoria from "./invitacion/NuestraHistoria";
import CuentaRegresiva from "./invitacion/CuentaRegresiva";
import Lugar from "./invitacion/Lugar";
import DressCode from "./invitacion/DressCode";
import Cronograma from "./invitacion/Cronograma";
import Confirmar from "./invitacion/Confirmar";
//import LluviaSobres from "./invitacion/LluviaSobre";



interface Props {

    onCerrarInvitacion: () => void;
    nombresInvitado: string;
}

const Invitacion = ({ onCerrarInvitacion, nombresInvitado }: Props) => {

    return (

        <motion.div

            initial={{
                y: "100vh",
                scale: 0.3,
                opacity: 0
            }}
            animate={{
                y: 0,
                scale: 1,
                opacity: 1
            }}
            transition={{
                duration: 1.2,
                ease: "easeOut"
            }}
        >

            <Container
                fluid
                className="text-center invitacion-container"
            >
                <Hero nombreInvitado={nombresInvitado}/>
                <NuestraHistoria/>
                <CuentaRegresiva/>
                <Lugar/>
                <DressCode/>
                <Cronograma/>
                <Confirmar/>
                
                

                <button
                    onClick={onCerrarInvitacion}
                    className="btn btn-outline-dark"
                >
                    Retour
                </button>

            </Container>

        </motion.div>

    );
};

export default Invitacion;