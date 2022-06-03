import styles from '@styles/Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.Container}>
            <p className={styles.Author}>
                @gxlts &bull; Miguel Angel Toledo Santiago ❤️ &bull; &copy;
            </p>
        </footer>
    );
};

export default Footer;
