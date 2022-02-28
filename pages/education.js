import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

import styles from '../styles/education.module.css'

function Education() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    
    return (
        <div className={styles.container}>
            <h2 data-aos="fade-right" data-aos-once="true">Education</h2>
            <h3 data-aos="fade-right" data-aos-once="true">Bachelor of Computer Science (in progress)</h3>
            <h4 data-aos="fade-right" data-aos-once="true">University of California, Davis</h4>
            <p data-aos="fade-right" data-aos-once="true">&emsp;Expected Graduation: Winter 2024</p>
            <p data-aos="fade-right" data-aos-once="true">&emsp;GPA: 3.79</p>

            <h3 data-aos="fade-right" data-aos-once="true">High School</h3>
            <h4 data-aos="fade-right" data-aos-once="true">Evergreen Valley High School</h4>
            <p data-aos="fade-right" data-aos-once="true">&emsp;Valedictorian - Graduated Spring 2021</p>
            <p data-aos="fade-right" data-aos-once="true">&emsp;GPA: 4.41 weighted, 4.00 unweighted</p>
        </div>
    )
}

export default Education