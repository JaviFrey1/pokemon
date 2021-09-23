import Pokemon from '../Pokemon/Pokemon';
import styles from './Pokemons.module.css';

export default function Pokemons({list}){
    return (
        <div className={styles.pokemons}>
            
            {list.length === 0? <div className={styles.waiting}>There is no Pokemon's available for this tipe...</div>: list.map((el, i) => <Pokemon className={styles.group} key={i} name={el.name} img={el.img} types={el.types} id={el.id}/>)            
            }
        </div>
    )
}