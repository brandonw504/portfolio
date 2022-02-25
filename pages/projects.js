import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const prefix = '/portfolio';

import styles from prefix + '../styles/projects.module.css'

function Projects() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    
    return (
        <div className={styles.container}>
            <h2 data-aos="fade-right">Projects</h2>
            <h3 data-aos="fade-right">Field Event Tracker</h3>
            <p data-aos="fade-right" className={styles.subheading}>SwiftUI</p>
            <ul>
                <li data-aos="fade-right">Developed an iOS app to collect marks for field events in track and field</li>
                <li data-aos="fade-right">Created an intuitive user interface with SwiftUI</li>
                <li data-aos="fade-right">Greatly improved efficiency in recording and ranking athletes&apos; marks at meets by switching from paper to a digital medium</li>
            </ul>

            <h3 data-aos="fade-right">Game of Thrones Character Database</h3>
            <p data-aos="fade-right" className={styles.subheading}>Next.js</p>
            <ul>
                <li data-aos="fade-right">Created an interactive Game of Thrones character database in a Next.js website</li>
                <li data-aos="fade-right">Implemented a responsive search bar using React Hooks </li>
            </ul>
        </div>
    )
}

export default Projects