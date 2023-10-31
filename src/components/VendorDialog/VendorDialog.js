import React from "react";
import styles from "./VendorDialog.module.css";
import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from '@radix-ui/react-icons';

function VendorDialog({ card, children }) {

  const [non_Expensive_Card, setNon_Expensive_Card] = React.useState({
    vendor: null,
    price: null,
  });

  function findNonExpensiveCard(card) {
    const cardPricesObject = card.card_prices[0];
    const cardPricesKeys = Object.keys(cardPricesObject);

    //parse into a  number, current price is a string. Set initial price
    const initialPrice = parseFloat(card.card_prices[0][cardPricesKeys[0]]);

    setNon_Expensive_Card({
      ...non_Expensive_Card,
      vendor: cardPricesKeys[0],
      price: initialPrice,
    });

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

  React.useEffect(() => {
    findNonExpensiveCard(card);
    //eslint-disable-next-line
  },[]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Overlay />
      <Dialog.Content className={styles.DialogContent}>
        <Dialog.Title>Vendor Prices</Dialog.Title>
        <Dialog.Description className={styles.DialogDescription}>
          <div>
            {Object.keys(card.card_prices[0]).map((key) => {
              return (
                <p key={key}>
                  {key}: {card.card_prices[0][key]}
                </p>
              );
            })}
          </div>
          <div>
            <p>
              {non_Expensive_Card.vendor}: {non_Expensive_Card.price}
            </p>
          </div>
        </Dialog.Description>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default VendorDialog;
