/*eslint-disable */
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons, getTypes, filterByType, filterIfCreated, filterByName, orderByName, orderByAttack } from "../../Actions/actions";
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Pokemons from "../Pokemons/Pokemons";
import Paged from "../Paged/Paged";
import SearchBar from "../SearchBar/SearchBar";
import Nav from "../Nav/Nav";


export default function Home() {
    const dispatch = useDispatch();
    var allPokes = useSelector(store => store.pokemons);
    // const [pokemons, setPokemons] = useState([])
    // const names = useSelector(state => state.dataFilter)
    const [currentPage, setCurrentPage] = useState(1);
    const [PokesPerPage, setPokesPerPage] = useState(9);
    const [stateName, setStateName] = useState('');
    const indexOfLastPoke = currentPage * PokesPerPage;
    const indefOfFirstPoke = indexOfLastPoke - PokesPerPage;
    const currentPokes = allPokes.slice(indefOfFirstPoke, indexOfLastPoke) // [0,...,8] 


    const paged = page => {
        return setCurrentPage(page);
    }

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]) //component didMount

    function handleClick(click) { //boton
        click.preventDefault();
        dispatch(getPokemons());
        dispatch(getTypes())
    }

    function handleFilterType(click) { //filtrado
        click.preventDefault();
        dispatch(filterByType(click.target.value));
        setCurrentPage(1);
    }

    function handleFilterCreated(click) {
        click.preventDefault();
        dispatch(filterIfCreated(click.target.value));
        setCurrentPage(1);
    }

    function handleOrder(click) { //ordenamiento
        click.preventDefault();
        dispatch(orderByName(click.target.value));
        setCurrentPage(1);
    }
    function handleAttack(click) {
        click.preventDefault();
        dispatch(orderByAttack(click.target.value));
        setCurrentPage(1);
    }

    function handleChange(e) {
        e.preventDefault();
        setStateName((e.target.value).toLowerCase());
        dispatch(filterByName((e.target.value).toLowerCase()))
    }


    return (

        <div className={styles.page}>
            
            <div>
                <div className={styles.nav}>
                    <Nav />
                    <SearchBar stateName={stateName} handleChange={handleChange} />
                    
                </div>

                <div className={styles.createLink}><Link to='/create' className={styles.create}>Create Pokemons</Link></div>
                <div className={styles.container}>
                    <select onChange={click => handleOrder(click)} className={styles.select}>
                        <option value='alpha'>A - Z</option>
                        <option value='asc'>Ascendant</option>
                        <option value='desc'>Descendant</option>
                    </select>
                    <select onChange={click => handleAttack(click)}className={styles.select}>
                        <option value='oa'>Attack Order</option>
                        <option value='ascA'>Attack Desc</option>
                        <option value='descA'>Attack Asc</option>
                    </select>
                    <select onChange={click => handleFilterCreated(click)}className={styles.select}>
                        <option value='all'>Existents</option>
                        <option value='created'>Created</option>
                    </select>
                    <select onChange={click => handleFilterType(click)}className={styles.select}>
                        <option value='all'>All</option>
                        <option value='grass'>Grass</option>
                        <option value='poison'>Poison</option>
                        <option value='fire'>Fire</option>
                        <option value='flying'>Flying</option>
                        <option value='water'>Water</option>
                        <option value='bug'>Bug</option>
                        <option value='normal'>Normal</option>
                        <option value='electric'>Electric</option>
                        <option value='ground'>Ground</option>
                        <option value='fairy'>Fairy</option>

                        <option value='rock'>Rock</option>
                        <option value='ghost'>Ghost</option>
                        <option value='steel'>Steel</option>
                        <option value='psychic'>Psychic</option>
                        <option value='ice'>Ice</option>
                        <option value='dragon'>Dragon</option>
                        <option value='stedarkel'>Stedarkel</option>
                        <option value='shadow'>Shadow</option>
                        <option value='unknown'>Unknown</option>
                    </select>
                </div>
                <div>
                    <Paged PokesPerPage={PokesPerPage} allPokemons={allPokes.length} paged={paged} />
                </div>
                    <Pokemons list={currentPokes} className={styles.group}/>
                <div>
                    <Paged PokesPerPage={PokesPerPage} allPokemons={allPokes.length} paged={paged} />
                </div>
            </div>
        </div>
    )
}