import { Link } from "react-router-dom";
import styles from './Nav.module.css';

export default function Nav(){
    return (
        <nav className={styles.nav}>
            <Link to= '/home' className={styles.btn}>
                <div>HOME</div>
            </Link>
        </nav>
    )
}