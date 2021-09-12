import React from 'react';
import { configure, shallow, } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './Home'
// import configureStore from "redux-mock-store";;
// import {GET_POKEMONS} from '../../Actions/constants'

configure({adapter: new Adapter()});



describe('App', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Home />);
    })
    it('Renderiza un <slect>', () => {
      expect(wrapper.find('select')).toHaveLength(1)
    })

    it('Renderiza una option con el texto igual a "grass"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find('option').at(0).text()).toEqual('grass');
    })
});