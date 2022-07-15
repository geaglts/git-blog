import Image from 'next/image';
import headerImage from '@images/banner.png';

import styles from '@styles/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.Container}>
            <Image src={headerImage} alt="imagen de git" />
            <div className={styles.TextContent}>
                <h1>
                    <span className={styles.GitText}>Git</span> x{' '}
                    <span className={styles.AuthorText}>Geaglts</span>
                </h1>
                <p className={styles.Description}>
                    Espero que lo poquito que se te pueda ayudar a reforzar tu aprendizaje en{' '}
                    <span className={styles.GitText}>git</span>.
                </p>
            </div>
        </header>
    );
};

export default Header;
