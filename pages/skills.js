import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/skills.module.css'

function Skills() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.container}>
            <h2 data-aos="fade-right">Skills</h2>
            <p data-aos="fade-right">Git, iOS development, Web development</p>
            <p data-aos="fade-right">Languages: C++, C, Swift, Java, HTML, CSS, Javascript, Python</p>
            <p data-aos="fade-right">Frameworks: SwiftUI, React, Next.js, Tensorflow</p>
        </div>
    )
}

export default Skills