import TextCode from '@components/TextCode';

const Home = () => {
    return (
        <>
            <p>Hola 👋, bienvenidx al mundo de git.</p>
            <br />
            <section>
                <h2>Que es Git?</h2>
                <p>
                    Git es un controlador de versiones, en resumen nos ayuda a registrar
                    cambios en nuestros proyectos de manera eficiente, cambios a los cuales
                    podemos regresar sí es necesario.
                </p>
                <p>
                    Funciona con varios tipos de archivos, pero su fuerte es el texto plano,
                    <i>
                        <b>.txt</b>, <b>archivos de código</b>, <b>documentos en markdown</b>
                    </i>
                    , etc.
                </p>
            </section>
        </>
    );
};

export default Home;
