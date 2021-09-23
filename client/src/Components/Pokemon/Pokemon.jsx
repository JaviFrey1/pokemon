/* eslint-disable */
import React from "react"
import { Link } from "react-router-dom"
import styles from './Pokemon.module.css'
import notFound from '../../Imgs/notFound.png'

export default function Card({ name, img, types, id }) {
    !img ? img = notFound : img;
    return (
        <div className={styles.card}>
            <div className={styles.name}>
                <h3>{name.toUpperCase()}</h3>
                <div className={styles.types}> <div className={styles.ty}>TYPES:</div> 
                    {
                        types.map((el, i) => <div key={i}><div key={i}>{`- ${el.name}`}</div></div>)
                    }
                </div>
            </div>
            <div className={styles.o}>
                <div className={styles.box}>
                    <Link to={`/${id}`}>
                        <img src={img} className={styles.img} alt='Image' width='200px' height='200px' />
                    </Link>
                </div>
            </div>
        </div>
    )

}