import { createContext } from 'react'

/**
 * is a promise, interface, description, blueprint of the data
 * it should not have any implementations (aka UI)
 */
const DataContext = createContext({
    cart: [],
    user: {},
    addToCart: () => {},
    removeFromCart: () => {},
});

export default DataContext;