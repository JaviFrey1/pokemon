import React from "react";
import styles from '../SearchBar/SearchBar.module.css'

export default function SearchBar({handleChange, stateName}){

    return (
        <div>
            <input className={styles.search} type={'text'} placeholder='Search...' autoComplete='off' onChange={(e)=> handleChange(e)} />
        </div>
    )
}