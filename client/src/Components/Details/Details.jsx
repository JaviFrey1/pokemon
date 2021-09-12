import React from "react";
import Nav from "../Nav/Nav";
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getIds } from '../../Actions/actions';
import styles from '../Details/Details.module.css';




export default function Details() {

    const dispatch = useDispatch();
    const [stats, setStats] = useState({});
    const details = useSelector(store => store.details);
    const { id } = useParams();

    // const clear = () => {
    //     dispatch(cleanId());
    // }

    const getDetails = () => {
        if (Object.keys(stats).length === 0) dispatch(getIds(id))
    }

    useEffect(() => {
        getDetails();
        // return () => clear();
    },[]) //Component did Mount

    useEffect(() => {
        setStats(details);
    }, [details])




    return (
        <div>
            <Nav />
            <div>
                {Object.keys(stats).length === 0 ? <span>Wait a second please...</span> :
                    <div className={styles.details}>
                        <div className={styles.nam}>
                            <div className={styles.name}>
                                {stats.name}
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <img className={styles.img} src={stats.img} alt='detailsPicture' />
                        </div>
                        <div className={styles.stats}> 
                            <div className={styles.hpDiv}>
                                <label>Life Points: </label>
                                {stats.hp}
                            </div>
                            <div className={styles.attackDiv}>
                                <label>Attack: </label>
                                {stats.attack}
                            </div>
                            <div className={styles.defenseDiv}>
                                <label>Defense: </label>
                                {stats.defense}
                            </div>
                            <div className={styles.heightDiv}>
                                <label>Height: </label>
                                {stats.height}
                            </div>
                            <div className={styles.weightDiv}>
                                <label>Weight: </label>
                                {stats.weight}
                            </div>
                            <div className={styles.weightDiv}>
                                <label>Speed: </label>
                                {stats.speed}
                            </div>
                            <div className={styles.weightDiv}>
                                <label>Id: </label>
                                {stats.id}
                            </div>
                            <div className={styles.typesDiv}>
                            {stats.types.map((el, i) =>
                                <p key={i}>{el.name}</p>
                            )}
                            </div>
                        </div>
                    </div>}
            </div>

        </div>
    )
}