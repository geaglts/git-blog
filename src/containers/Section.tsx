import styles from '@styles/Section.module.scss';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
    return (
        <>
            <section className={styles.Container}>
                <h2>{title}</h2>
                {children}
            </section>
            <br />
        </>
    );
}

export default Section;
