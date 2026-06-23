import { useState } from "react";
import { useParams } from "react-router-dom";

import Portada from "../components/Sobre";
import Invitacion from "../components/Invitacion";

const PaginaInvitacion = () => {

    const { nombreInvitado } = useParams();

    const [abrirInvitacion, setAbrirInvitacion] = useState(false);

    const cambiarEstadoAbierta = () => {
        setAbrirInvitacion(true);
    };

    const cambiarEstadoCerrada = () => {
        setAbrirInvitacion(false);
    };

    return (

        abrirInvitacion ?

            <Invitacion
                onCerrarInvitacion={cambiarEstadoCerrada}
                nombresInvitado={nombreInvitado ?? ""}
            />

            :

            <Portada
                onAbrirInvitacion={cambiarEstadoAbierta}
                nombresInvitado={nombreInvitado ?? ""}
            />

    );

};

export default PaginaInvitacion;