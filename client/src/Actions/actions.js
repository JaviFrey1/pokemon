import axios from 'axios';
import { GET_POKEMONS, GET_TYPES, FILTER_BY_TYPE, FILTER_IF_CREATED, ORDER_BY_NAME, GET_NAME_POKEMONS, ORDER_BY_ATTACK, FILTER_BY_NAME, CLEAN_TYPES, GET_ID, CLEAN_ID } from './constants';


export function getPokemons() {
    return async (dispatch) => {
        try {
            // let urlFront = await axios.get('http://localhost:3001/pokemons');
            let urlFront = await axios.get('/pokemons');
            return dispatch({
                type: GET_POKEMONS,
                payload: urlFront.data
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export function getTypes(){
    return async (dispatch) => {
        try{
            // let urlTypes = await axios.get('http://localhost:3001/type');
            let urlTypes = await axios.get('/type');
            return dispatch({
                type: GET_TYPES,
                payload: urlTypes.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export const cleanTypes = ()=> (dispatch) => {
    dispatch({
        type: CLEAN_TYPES
    })
}

export function getIds(id){
    return async (dispatch) => {
        try{
        // let urlId = await axios.get(`http://localhost:3001/pokemons/${id}`);
        let urlId = await axios.get(`/pokemons/${id}`)
        dispatch({
            type: GET_ID,
            payload: urlId.data
        })
        }catch(e){
            console.log(e)
        }
    }
}

export const cleanId = () => (dispatch) => {
    let rest = {};
    dispatch({
        type: CLEAN_ID,
        payload: rest
    })
}

export function getPokemonsName(name){
    return async(dispatch) => {
        try{
            // let res = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            let res = await axios.get(`/pokemons?name=${name}`);
            // console.log(dispatch)   
            return dispatch({
                type: GET_NAME_POKEMONS,
                payload: res.data
            })
        }catch(e){
            console.log(e)
        }
    }
} 

export function filterByType(payload) {
    // console.log(payload)
    return {
        type: FILTER_BY_TYPE,
        payload
    }
}

export function filterIfCreated(payload){
    // console.log(payload)
    return{
        type: FILTER_IF_CREATED,
        payload
    } 
}

export function filterByName(payload){
    // console.log(payload)
    return{
        type: FILTER_BY_NAME,
        payload
    }
}

export function orderByName(payload){
    return {
        type: ORDER_BY_NAME,
        payload
    } 
}

export function orderByAttack(payload){
    return {
        type: ORDER_BY_ATTACK,
        payload
    }  
}



