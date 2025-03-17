import Card from './Card';
import { team } from './data'
import styles from './founders.module.scss'

const Founder = (person_id) => {
    let member = team[0]
   
    return (
        <article className={styles.founder}>
            <div>
                <Card key={member.key} image={member.image} imgDesc={member.imgDesc} title={member.name} description={member.position} orientation="portrait" />
            </div>
            <div className={styles.founderInfo}>
                {member["about"].map((content) => {<p>content</p>})}
            </div>
        </article>
    );
};

export default Founder;