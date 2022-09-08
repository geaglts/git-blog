import Link from 'next/link';

import TextCode from '@components/TextCode';
import Section from '@containers/Section';

const Home = () => {
    return (
        <>
            <p>Hola 👋, bienvenidx al mundo de git.</p>
            <br />
            <Section title="🥭Temas">
                <Link href="/tags">Tags</Link>
            </Section>
            <Section title="🥭Que es Git?">
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
            </Section>
            <Section title="🥭Comandos basicos">
                <h3>Inicializar un proyecto</h3>
                <p>Para inicializar un proyecto con git basta con ejecutar el comando:</p>
                <TextCode language="shell">git init</TextCode>
                <h3>Guardar y registrar cambios</h3>
                <p>
                    Para registrar nuestros cambios y agregar un mensaje basta con ejecutar el
                    comando:
                </p>
                <TextCode language="shell">git add . && git commit -m "mensaje"</TextCode>
                <h3>Crear una rama</h3>
                <p>
                    Para crear ramas tenemos 2 opciones, la primera es con el comando{' '}
                    <b>checkout</b> lo que hace este comando es crear la rama y movernos a
                    ella.
                </p>
                <TextCode language="shell">git checkout -b nombre</TextCode>
                <p>
                    La segunda opción es con el comando <b>branch</b>, este comando crea una
                    rama pero no te mueve a ella.
                </p>
                <TextCode language="shell">git branch nombre</TextCode>
            </Section>
        </>
    );
};

export default Home;
