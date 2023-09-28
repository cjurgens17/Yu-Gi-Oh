import React from "react";

export const YuGiOhCardContext = React.createContext(null);

const ENDPOINT =
  "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes";

function YuGiOhCardProvider({ children }) {
  const [status, setStatus] = React.useState("");
  const [yuGiOhCards, setYuGiOhCards] = React.useState([]);

  React.useEffect(() => {
    async function getCards(ENDPOINT) {
      setStatus("loading");
      try {
        const resp = await fetch(ENDPOINT);

        if (!resp.ok) {
          throw resp;
        }

        const data = await resp.json();
        setStatus("success");
        if (data) setYuGiOhCards(data.data);
      } catch (error) {
        setStatus("error");
        console.error(error);
      }
    }

    getCards(ENDPOINT);
  }, []);

  // const memoizedYuGiOhCards = React.useMemo(() => {
  //   return yuGiOhCards;
  // }, [yuGiOhCards]);

  if (status === "loading") {
    //do some logic which well add later: Just add Loading for now
    return <h1>Loading</h1>;
  }

  if (status === "error") {
    //do some logic later, for now just add error:
    return <h1>Error</h1>;
  }

  return (
    <YuGiOhCardContext.Provider value={{ yuGiOhCards, setYuGiOhCards }}>
      {children}
    </YuGiOhCardContext.Provider>
  );
}
export default YuGiOhCardProvider;
