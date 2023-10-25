import React from 'react';

export const UserDeckContext = React.createContext(null);

function UserDeckProvider({children}) {
    const [userDeckData, setUserDeckData] = React.useState({
        deckName: '',
        mainDeck: [],
        sideDeck: [],
        extraDeck: []
    });

    return (
        <UserDeckContext.Provider value={{userDeckData, setUserDeckData}}>
            {children}
        </UserDeckContext.Provider>
    );
}

export default UserDeckProvider;