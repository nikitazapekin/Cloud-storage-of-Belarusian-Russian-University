"use client"
import styles from './layout.module.scss';

//import { Header } from '@widgets/Header';
//import { Footer } from '@widgets/Footer';

//import type { LayoutProps } from './interfaces';


/*
import { LayoutProps } from './types';
import Header from '../widgets/Header/Header';
export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
		 
		</div>
	);
};
*/

//import styles from './layout.module.scss';
import { LayoutProps } from './types'; // Ensure LayoutProps is imported correctly
import Header from '../widgets/Header/Header';

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layout}>
          

            <Header />
            <main className={styles.main}>{children}</main>
    
        </div>
    );
};

export default Layout; 