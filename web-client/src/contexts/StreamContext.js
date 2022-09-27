import React, { createContext, useContext, useReducer } from 'react'
import { streamReducer } from '../reducers/streamReducer';

const Stream = createContext();

const StreamContext = ({ children }) => {

    const [streams, streamDispatch] = useReducer(streamReducer, {});

    return (
        <Stream.Provider value={{ streams, streamDispatch }}>
            {children}
        </Stream.Provider>
    )
}

export default StreamContext

export const StreamState = () => {
    return useContext(Stream);
};