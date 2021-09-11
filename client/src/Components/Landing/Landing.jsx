import React from "react";
import { Link } from "react-router-dom";
import logo from '../../Imgs/logo.png'
import styles from '../Landing/Landing.module.css'

export default function Landing() {
    return (
        <div className={styles.img}>
            <Link to='/home'>
                <button className={styles.btn}>
                    <img className={styles.i} src={logo} alt={''} />
                </button>
            </Link>
        </div>
    )
}