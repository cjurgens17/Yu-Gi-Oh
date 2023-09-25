import React from "react";
import useSWR from "swr";


export const YuGiOhCardContext = React.createContext();

const ENDPOINT= 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
async function getCards(ENDPOINT){
    const resp = await fetch(ENDPOINT);

    if(!resp.ok){
        throw resp
    }

    const data = await resp.json();

    return data;
}

export function YuGiOhCardProvider({children}){

    const {data, isLoading, error} = useSWR(ENDPOINT, getCards);

    const memoizedYuGiOhCards = React.useMemo(() => {
         return data.data
    },[data]);

    if(isLoading){
        //do some logic which well add later: Just add Loading for now
        return <h1>Loading</h1>
    }

    if(error){
        //do some logic later, for now just add error: 
        return <h1>Error</h1>
    }

    return (
        <YuGiOhCardContext.Provider value={memoizedYuGiOhCards}>
            {children}
        </YuGiOhCardContext.Provider>
    );
}