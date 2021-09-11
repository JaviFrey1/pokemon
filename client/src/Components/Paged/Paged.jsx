/* eslint-disable */
import React from "react";
import styles from './Paged.module.css'

export default function Paged({ PokesPerPage, allPokemons, paged }) {
    const pageNumbers = [];
    for (let i = 1; i < allPokemons/PokesPerPage + 1; i++) { // 40/9 = 5? je
        pageNumbers.push(i);
    }

    return (
        <div>
            <nav className={styles.paged}>
                <ul className = {styles.list}>
                    {pageNumbers?.map(n => (
                        <div key={n}>
                            <button className={styles.btn} key={n} onClick={() => paged(n)}>
                                <a className={styles.num} >{n}</a>
                            </button>
                        </div>)
                    )}
                </ul>
            </nav>
        </div>
    )
}