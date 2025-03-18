import Card from './Card';
import { team } from './data'
import styles from './founders.module.scss'

const Founder = ({person_id}) => {
    let member = team[Number(person_id)]
   
    return (
        <article className={styles.founder}>
            <div>
                <Card key={member.key} image={member.image} imgDesc={member.imgDesc} title={member.name} description={member.position} orientation="portrait" />
            </div>
            <div className={styles.founderInfo}>
                {member["about"].map((bio) => <p key={`${member.key}-${member["about"].indexOf(bio)}`}>{bio}</p>)}
            </div>
        </article>
    );
};

export default Founder;