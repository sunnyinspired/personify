const { createContext, useState } = require("react");

const ScoreContext = createContext(null);

const ScoreContextProvider = ( {children} ) => {
    const [scores, setScores] = useState([]);
    const contextValues = { scores, setScores}

    return(
        <ScoreContext.Provider value={contextValues}>
            { children }
        </ScoreContext.Provider>
    )
}

export {ScoreContext, ScoreContextProvider}