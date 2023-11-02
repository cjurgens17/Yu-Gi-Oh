import React from "react";
import styles from "./VendorDialog.module.css";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from '@radix-ui/react-icons';

function VendorDialog({ card, children }) { 

  const [non_Expensive_Card, setNon_Expensive_Card] = React.useState({
    vendor: "",
    price: null,
  });

  function generateCardLink(cardName, vendor){
    let cardLinkName = "";

    let spaceQuery = "";
    //create a switch to denote symbol for query parameter depending on the market, becasue each market has different values.
    //Easy to add or update markets in the future
    switch(vendor) {
      case "cardmarket_price":
        spaceQuery = "+";
        break;
      case "ebay_price":
        spaceQuery = "+";
        break;
      case "amazon_price":
        spaceQuery = "+";
        break;
      case "tcgplayer_price":
        spaceQuery = "+";
        break;
      case "coolstuffinc_price":
        spaceQuery = "+";
        break;
      default:
        break;
    }
  
    for(const char of cardName){
      if(char === " "){
        cardLinkName += spaceQuery;
      }else{
        cardLinkName += char;
      }
    }
    return cardLinkName;
  }

  const MARKETS = {
    cardmarket_price: `https://www.cardmarket.com/en/YuGiOh/Products/Singles?idCategory=5&idExpansion=0&searchString=${generateCardLink(card.name,"cardmarket_price")}`,
    tcgplayer_price:  `https://tcgplayer.com/product/${generateCardLink(card.name,"tcgplayer_price")}`,
    ebay_price: `https://www.ebay.com/sch/i.html?_nkw=${generateCardLink(card.name,"ebay_price")}&_sop=12`,
    amazon_price: `https://www.amazon.com/s?k=yugioh+abaki&crid=3NNVP00N8EFNP&sprefix=yugioh+${generateCardLink(card.name,"amazon_price")}%2Caps%2C69&ref=nb_sb_noss`,
    coolstuffinc_price: `https://www.coolstuffinc.com/main_searchResults.php?pa=searchOnName&page=1&resultsPerPage=25&q=${generateCardLink(card.name,"coolstuffinc_price").toLowerCase()}`
}

  function findNonExpensiveCard(card) {
    const cardPricesObject = card.card_prices[0];
    const cardPricesKeys = Object.keys(cardPricesObject);

    //parse into a  number, current price is a string. Set initial price and vendor with first in object
    const initialPrice = parseFloat(card.card_prices[0][cardPricesKeys[0]]);

    setNon_Expensive_Card({
      ...non_Expensive_Card,
      vendor: cardPricesKeys[0],
      price: initialPrice,
    });
    //find and update the cheapest
    cardPricesKeys.forEach((vendor) => {
      const comparedPrice = parseFloat(card.card_prices[0][vendor]);

      if (comparedPrice < non_Expensive_Card.price) {
        setNon_Expensive_Card({
          ...non_Expensive_Card,
          vendor: vendor,
          price: comparedPrice,
        });
      }
    });
  }

  //parses the vendor from data and returns a displayable name for the UI
  function generateVendorName(vendor){
    console.log("Vendor from function: ",vendor);
    let generated = "";

    for(const char of vendor){
      if(char === "_") break;
      generated += char;
    }
    generated = generated.charAt(0).toUpperCase() + generated.slice(1).toLowerCase();
    return generated;
  }

  React.useEffect(() => {
    findNonExpensiveCard(card);
    //eslint-disable-next-line
  },[]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content className={styles.DialogContent}>
      <div className={styles.cardNameContainer}>
          <h1 className={styles.cardName}>{card.name}</h1>
        </div>
        <Dialog.Title className={styles.DialogTitle}>Vendor Prices</Dialog.Title>
        <Dialog.Description className={styles.DialogDescription}>
          <div className={styles.vendors}>
            <h1 className={styles.vendorHeadings}>Markets</h1>
            {Object.keys(card.card_prices[0]).map((key) => {
              return (
                <p className={styles.vendorContainer} key={key}>
                  <span className={styles.vendorName}>{generateVendorName(key)}:</span> {`$ ${card.card_prices[0][key]}`}
                </p>
              );
            })}
          </div>
          <div className={styles.nonExpensivePrice}>
            <h1 className={styles.vendorHeadings}>Cheapest Price</h1>
            <p className={styles.vendorContainer}>
              <span className={styles.vendorName}>{generateVendorName(non_Expensive_Card.vendor)}:</span> {`$ ${non_Expensive_Card.price}`}
            </p>
          </div>
        </Dialog.Description>
        {non_Expensive_Card.vendor !== "" && 
        <div className={styles.linkContainer}>
          <a href={MARKETS[non_Expensive_Card.vendor]} target="_blank" rel="noreferrer">{generateVendorName(non_Expensive_Card.vendor)}</a>
        </div>
        }
        <Dialog.Close asChild>
          <button className={styles.IconButton}>
          <Cross2Icon/>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default VendorDialog;
