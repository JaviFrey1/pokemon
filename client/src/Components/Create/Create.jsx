import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getTypes } from "../../Actions/actions";
import Nav from "../Nav/Nav";
import pika from '../../Imgs/pika.jpg'
import styles from '../Create/Create.module.css'

export default function Create() {
    const validate = (input) => {
        let error
        if (!input.name) {
            error = 'Insert Name'
        }
        return error;
    }

    async function postPokemons(a) {
        const urlLocal = await axios.post('http://localhost:3001/pokemons', a);
        return urlLocal;
    }

    const dispatch = useDispatch()
    const [valTypes, setValTypes] = useState([]);
    const [poke, setPoke] = useState({
        name: '',
        img: pika,
        hp: 0,
        attack: 0,
        defense: 0,
        height: 0,
        weight: 0,
        types: []
    });
    const [errorName, setErrorName] = useState('');
    const [succes, setSucces] = useState('');
    const [err, setErr] = useState('');
    const [types, setTypes] = useState([]);
    // const pokes = useSelector(store => store.types)
    const storeType = useSelector(store => store.types);

    // const clear = () => {
    //     dispatch(cleanTypes());
    // }

    useEffect(() => {
        dispatch(getTypes());
        // return () =>  clear();
    }, [dispatch]);

    useEffect(() => {
        setTypes(storeType);
    }, [storeType]);

    useEffect(() => {
        setPoke({ ...poke, types: valTypes });
    }, [valTypes]);

    const send = (el, event) => {
        if (el.name !== '') {
            let res = handleSubmit(event);
            setSucces('Success');
            console.log(res);
        } else {
            event.preventDefault();
            setErr('error');
        }
    }

    const handleType = (change) => {
        if (change.target.checked) {
            setValTypes([change.target.value, ...valTypes]);
        } else {
            setValTypes(valTypes.filter(el => el !== change.target.value));
        }
    }

    const handleName = (change) => {
        setSucces('');
        setErr('');
        setPoke({ ...poke, name: change.target.value });
        setErrorName(validate({ ...poke, name: change.target.value }));
    }

    const handleHp = (change) => {
        setPoke({ ...poke, hp: change.target.value });
    }

    const handleAttack = (change) => {
        setPoke({ ...poke, attack: change.target.value });
    }

    const handleDefense = (change) => {
        setPoke({ ...poke, defense: change.target.value });
    }

    const handleWeight = (change) => {
        setPoke({ ...poke, weight: change.target.value });
    }

    const handleHeight = (change) => {
        setPoke({ ...poke, height: change.target.value });
    }
    // const handleImg = (change) => {
    //     setPoke({...poke, img: change.target.value})
    // }

    const handleSubmit = (submit) => {
        submit.preventDefault();
        let upload = postPokemons(poke);

        setPoke({
            name: '',
            img: '',
            hp: 0,
            attack: 0,
            defense: 0,
            height: 0,
            weight: 0,
            types: []
        });
        submit.target.reset();
        return upload;
    }

    return (
        <div>
            <Nav />
            <form onSubmit={(event) => send(poke, event)}>
                <div>LET'S CREATE SOME POKEMONS!</div>
                <div>
                    <div>
                        <div>
                            <h3>DATA</h3>
                            <div className={styles.name}>
                                <label>Name: </label>
                                <input type='text' onChange={handleName} placeholder='Name' value={poke.name} name='name' />
                                {errorName && <h2 className={styles.error}>{errorName}</h2>}
                            </div>
                            <div className={styles.type}>STATS</div>
                            <div className={styles.stat}>
                                <label>Life Points:     </label>
                                <input className={styles.inputHp} type='number' onChange={handleHp} placeholder='LifePoints' value={poke.hp} name='lifepoints' min='0' />
                            </div>
                            <div className={styles.stat}>
                                <label>Attack Points:     </label>
                                <input type='text' onChange={handleAttack} placeholder='Attack Points' value={poke.attack} name='attack' min='0' />
                            </div>
                            <div className={styles.stat}>
                                <label>Defense Points:     </label>
                                <input className={styles.inputDefense} type='text' onChange={handleDefense} placeholder='Defense Points' value={poke.defense} name='defense' min='0' />
                            </div>
                            <div className={styles.stat}>
                                <label>Weight:      </label>
                                <input className={styles.statW} type='text' onChange={handleWeight} placeholder='Weight' value={poke.weight} name='weight' min='0' />
                            </div>
                            <div className={styles.stat}>
                                <label>Height:     </label>
                                <input className={styles.statH} type='text' onChange={handleHeight} placeholder='Height' value={poke.height} name='height' min='0' />
                            </div>
                        </div>
                        <div className={styles.imgDiv}>
                            <img className={styles.img} src={pika} alt='' />
                        </div>
                    </div>
                    <div>
                        <h3 className={styles.type}> TYPES</h3>
                        {
                            types.map((el, i) =>
                                <div className={styles.typeDiv}>
                                    <input type='checkbox' onChange={handleType} key={i} value={el.id} id={el.id} />
                                    {el.name}
                                </div>
                            )
                        }
                    </div>
                    <div>{succes && <h2>CREATED SUCCESFULLY</h2>}</div>
                    <div>{err && <h2>OOPS... WE COULDN'T CREATE YOUR POKEMON</h2>}</div>
                    <div><input type='submit' value='CREATE!' /></div>

                </div>
            </form>
        </div>
    )
}