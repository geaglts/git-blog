import React from 'react';

import styles from '@styles/Layout.module.scss';

type Props = {
    children: JSX.Element | JSX.Element[];
};

const Layout: React.FC<Props> = ({ children }) => {
    return <main className={styles.Container}>{children}</main>;
};

export default Layout;
