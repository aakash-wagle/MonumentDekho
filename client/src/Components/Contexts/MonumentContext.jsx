import React, { createContext } from 'react';
const MonumentContext = createContext(null);

export default (props) => {
    <MonumentContext.Provider value={null}>
        { props.children }
    </MonumentContext.Provider>
};    