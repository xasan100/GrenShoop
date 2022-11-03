import React, { createContext, useState } from 'react';

export const contextAllProdect = createContext();

const AllProduct = ({ children }) => {
    
    const [state, setState] = useState(0);

    return (
			<contextAllProdect.Provider value={[state, setState]}>
				{children}
			</contextAllProdect.Provider>
		);
}

export default AllProduct;