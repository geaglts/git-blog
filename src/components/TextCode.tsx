import Image from 'next/image';
import CopyToClipboard from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import copyIcon from '@icons/copy.svg';

import styles from '@styles/TextCode.module.scss';

type Props = {
    children?: string;
    language: string;
};

const TextCode: React.FC<Props> = (props) => {
    return (
        <div className={styles.Container}>
            <CopyToClipboard text={props.children}>
                <button className={styles.CopyIcon}>
                    <Image src={copyIcon} />
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter language={props.language} style={atomOneDark}>
                {props.children}
            </SyntaxHighlighter>
        </div>
    );
};

export default TextCode;
