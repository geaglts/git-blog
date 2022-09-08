import Link from 'next/link';

import Section from '@containers/Section';
import TextCode from '@components/TextCode';

const Tags = () => {
    return (
        <>
            <Link href="/">Regresar</Link>
            <Section title="🥭Tags en Git">
                <p>Los Tags nos ayudan a definir versiones de nuestro codigo.</p>
            </Section>
            <Section title="🥭Comandos">
                <h3>Crear un tag</h3>
                <TextCode language="shell">git tag -a _nombre_ -m "_mensaje_"</TextCode>
                <h3>Subir los tags al repositorio</h3>
                <TextCode language="shell">git push origin --tags</TextCode>
            </Section>
        </>
    );
};

export default Tags;
