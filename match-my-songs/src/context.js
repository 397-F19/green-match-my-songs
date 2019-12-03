import React from 'react';

const Usercontext = React.createContext(null);
const Songcontext = React.createContext(null) 

const SongcontextProvider = ({children}) => {
    const [title,setTitle] =React.useState('')
    const [matched,setMatched] = React.useState([])

    return (
        <Songcontext.Provider value={[title,setTitle,matched,setMatched]}>
            {children}
        </Songcontext.Provider>
    )
}

export { Usercontext, Songcontext, SongcontextProvider }