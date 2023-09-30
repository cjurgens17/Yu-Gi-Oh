import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import styles from "./MonsterDialog.module.css";

function MonsterDialog({ card, trigger }) {
  //currently used data from card, can add more if we need to change
  const {
    name,
    card_images: [{ image_url }],
    desc,
    atk,
    def,
    attribute,
    type,
    level
  } = card;

  return (
    <HoverCard.Root openDelay={700}>
      <HoverCard.Trigger asChild>
        {React.cloneElement(trigger, { ...trigger.props})}
      </HoverCard.Trigger>
      <HoverCard.Content
        className={styles.hoverCardContent}
        sideOffset={5}
        side="left"
      >
        <div className={styles.dialogGrid}>
          <article className={styles.details}>
            <h1>{name}</h1>
            <section className={styles.details}>
              <p>
                {`ATK/${atk} DEF/${def}`}
              </p>
              <p>
                {`Attribute: ${attribute} Type: ${type}`}
              </p>
              <p>
                {`Level/Rank: ${level}`}
              </p>
            </section>
            <footer>
              {desc}
            </footer>
          </article>
            <img
              alt={`${name} in dialog`}
              src={image_url}
              className={styles.cardImage}
            />
        </div>
        <HoverCard.Arrow className={styles.hoverCardArrow} />
      </HoverCard.Content>
    </HoverCard.Root>
  );
}

export default MonsterDialog;
