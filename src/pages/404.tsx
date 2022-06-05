import Image from 'next/image';

import notFoundImage from '@images/notFound.png';

import styles from '@styles/NotFound.module.scss';
import Link from 'next/link';

const NotFound = () => {
    return (
        <section className={styles.Container}>
            <div className={styles.NotFoundImage}>
                <Image src={notFoundImage} />
            </div>
            <div>
                <p className={styles.NotFoundText}>
                    404
                    <br />
                    Pagina no encontrada
                </p>
                <Link href={'/'}>
                    <button className={styles.GoBackButton}>Regresar al inicio</button>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
