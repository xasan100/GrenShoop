import React from 'react';
import Cactus from '../../Components/Home/Cactus';
import Carusel from '../../Components/Home/Carusel';
import { Categoris } from '../../Components/Home/Categories';
import { Contact } from '../../Components/Home/Contact';
import FilterBlock from '../../Components/Home/FilterBlock';
import Posts from '../../Components/Home/Posts';
import { Block } from './style';

export const Home = () => {
    return (
        <>
        <Block>
            <Carusel />
            <FilterBlock />
           </Block>
          <Cactus/>
          <Posts/>
          <Categoris/>
        <Contact/>
        </>
    )
}

export default Home;