

interface Props {
    nombreInvitado: string;
}

const Hero = ({ nombreInvitado }: Props) => {

    return (
        <>
            <h1>
                Hola {nombreInvitado} 
            </h1>
            <p
                style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    fontSize: "1.2rem"
                }}
            >
                Con mucha alegría queremos compartir contigo uno de los días más importantes de nuestra vida.
            </p>
        </>
    );
}

export default Hero;