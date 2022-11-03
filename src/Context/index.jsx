import React, {createContext} from 'react';
import AllProduct from './AllProduct';



const Context = ({children }) => {
    return <AllProduct>{children}</AllProduct>;
}

export default Context;