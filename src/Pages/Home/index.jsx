import React from 'react';
import Carusel from '../../Components/Home/Carusel';
import FilterBlock from '../../Components/Home/FilterBlock';
import { Block } from './style';

export const Home = () => {
    return (
        <Block>
            <Carusel />
            <FilterBlock />
        </Block>
    )
}

export default Home;