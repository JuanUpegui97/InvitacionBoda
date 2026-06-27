import { useEffect, useState } from "react";

const CuentaRegresiva = () => {

    const [tiempo, setTiempo] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    useEffect(() => {

        const intervalo = setInterval(() => {

            const fechaBoda = new Date("2027-04-24T16:00:00");

            const ahora = new Date();

            const diferencia = fechaBoda.getTime() - ahora.getTime();

            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

            const horas = Math.floor(
                (diferencia % (1000 * 60 * 60 * 24))
                / (1000 * 60 * 60)
            );

            const minutos = Math.floor(
                (diferencia % (1000 * 60 * 60))
                / (1000 * 60)
            );

            const segundos = Math.floor(
                (diferencia % (1000 * 60))
                / 1000
            );

            setTiempo({
                dias,
                horas,
                minutos,
                segundos
            });

        }, 1000);

        return () => clearInterval(intervalo);

    }, []);

    return (

        <div
            style={{
                marginTop: "120px",
                marginBottom: "120px"
            }}
        >

            <h2>
                💍 24 avril 2027
            </h2>

            <p>
                Le grand jour arrive bientôt
            </p>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "40px",
                    flexWrap: "wrap"
                }}
            >

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "20px",
                        minWidth: "120px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                >
                    <h1>{tiempo.dias}</h1>
                    <p>Jours</p>
                </div>

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "20px",
                        minWidth: "120px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                >
                    <h1>{tiempo.horas}</h1>
                    <p>Heures</p>
                </div>

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "20px",
                        minWidth: "120px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                >
                    <h1>{tiempo.minutos}</h1>
                    <p>Minutes</p>
                </div>

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "20px",
                        minWidth: "120px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                    }}
                >
                    <h1>{tiempo.segundos}</h1>
                    <p>Secondes</p>
                </div>



            </div>

            <div
             style={{
                marginTop: "10px",
                marginBottom: "120px"
            }}>

                <p>
                    Heure de la cérémonie à confirmer - probablement aux alentours de 17h
                </p>
                    
            </div>

        </div>

    );

};

export default CuentaRegresiva;