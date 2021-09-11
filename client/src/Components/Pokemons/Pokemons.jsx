import Pokemon from '../Pokemon/Pokemon';
import styles from './Pokemons.module.css';

export default function Pokemons({list}){
    return (
        <div className={styles.pokemons}>
            
            {list.length === 0? <div>Please wait... </div>: list.map((el, i) => <Pokemon key={i} name={el.name} img={el.img} types={el.types} id={el.id}/>)            
            }
        </div>
    )
}