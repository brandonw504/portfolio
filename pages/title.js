import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const prefix = '/portfolio';

import styles from prefix + '../styles/title.module.css'

function Title() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.container}>
            <h1 data-aos="fade-right" className={styles.header}>Hi! I&apos;m Brandon!</h1>
            <h3 data-aos="fade-right" className={styles.description}>I&apos;m a Web and iOS developer currently studying computer science at UC Davis.</h3>
        </div>
    )
}

export default Title