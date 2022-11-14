import React from 'react';
import Cactus from '../../Components/Home/Cactus';
import Carusel from '../../Components/Home/Carusel';
import FilterBlock from '../../Components/Home/FilterBlock';
import { Block } from './style';

export const Home = () => {
    return (
        <>
   
        <Block>
            <Carusel />
            <FilterBlock />
        </Block>
          <Cactus/>
        </>
    )
}

export default Home;