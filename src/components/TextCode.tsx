import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import styles from '@styles/TextCode.module.scss';

type Props = {
    children?: string | string[];
    language: string;
};

const TextCode: React.FC<Props> = (props) => {
    return (
        <div className={styles.Container}>
            <button className={styles.CopyIcon}>c</button>
            <SyntaxHighlighter language={props.language} style={atomOneDark}>
                {props.children}
            </SyntaxHighlighter>
        </div>
    );
};

export default TextCode;
