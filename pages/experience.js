import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const prefix = '/portfolio';

import styles from prefix + '../styles/experience.module.css'

function Experience() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.container}>
            <h2 data-aos="fade-right">Experience</h2>
            <h3 data-aos="fade-right">Front-End Developer at #include</h3>
            <p data-aos="fade-right" className={styles.subheading}>September 2021 - Present</p>
            <ul>
                <li data-aos="fade-right">Created a dynamic art gallery website with expandable information about each piece</li>
                <li data-aos="fade-right">Built and styled several web pages using Next.js and Figma designs</li>
                <li data-aos="fade-right">Managed changes to the codebase using Github</li>
                <li data-aos="fade-right">Learned React and SEO best practices</li>
            </ul>
        </div>
    )
}

export default Experience