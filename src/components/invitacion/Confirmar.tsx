

const Confirmar = () => {

    return (
        <div className="seccion-invitacion">

            <h2>
                Confirmation de présence
                
            </h2>


            <div className="card-seccion">
               
                <p>
                    Merci de bien vouloir confirmer votre présence en remplissant le formulaire ci-dessous.
                </p>

                <button
                    className="btn btn-dark mt-4"
                    onClick={() =>
                        window.open(
                            "https://docs.google.com/forms/d/e/1FAIpQLSejjD4pQOCjO56hs2VxuVjuBELNj_U1CYyoobMSm1XKKsrg2w/viewform?usp=publish-editor",
                            "_blank"
                        )
                    }
                >
                    Confirmar
                </button>
            </div>

        </div>
    );

}

export default Confirmar;