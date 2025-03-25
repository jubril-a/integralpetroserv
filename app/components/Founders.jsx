import Founder from './Founder';
import styles from './founders.module.scss'

const Founders = () => {
    return (
        <section className='section constraint-I'>
            <h2 id="mgmt" className={styles.h2}>The Management Team</h2>
            <Founder person_id="0" />
            <Founder person_id="1" />
            <Founder person_id="2" />
            <Founder person_id="3" />
        </section>
    );
};

export default Founders;