import Image from 'next/image';
import styles from '@styles/Footer.module.scss';

import socialMedias from 'catalogs/socialMedias';

const Footer = () => {
    return (
        <footer className={styles.Container}>
            <p className={styles.Author}>
                @gxlts &bull; Miguel Angel Toledo Santiago ❤️ &bull; &copy;
            </p>
            <div className={styles.SocialLinkContainer}>
                {socialMedias.map(({ image, alt, key, to }) => (
                    <a
                        key={key}
                        href={to}
                        target={'_blank'}
                        className={styles.SocialLink}
                        title={alt}
                    >
                        <Image src={image} alt={alt} />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
