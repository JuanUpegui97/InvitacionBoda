import "./Hero.css";

interface Props {
    nombreInvitado: string;
}

const Hero = ({ nombreInvitado }: Props) => {
    return (
        <div className="hero-invitado">
            <h1 className="hero-titulo">
                Bonjour <span>{nombreInvitado}</span> ✨
            </h1>

            <p className="hero-texto">
                Nous t'invitons à célébrer notre amour
            </p>
        </div>
    );
};

export default Hero;