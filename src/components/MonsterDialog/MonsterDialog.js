import React from "react";
import * as HoverCard from "@radix-ui/react-hover-card";
import styles from "./MonsterDialog.module.css";

function MonsterDialog({ card }) {
  
  const [isHoverCardContentVisible, setIsHoverCardContentVisible] = React.useState(false);
  const dragRef = React.useRef(null);
  //currently used data from card, can add more if we need to change
  const {
    name,
    card_images: [{ image_url , image_url_small}],
    desc,
    atk,
    def,
    attribute,
    type,
    level
  } = card;

  const triggerEnter = () => {
    setIsHoverCardContentVisible(true);
  }

  const handleDragStart = (e) => {
    e.dataTransfer.setData('application/json', JSON.stringify(card));
    setIsHoverCardContentVisible(false);
  }

  React.useEffect(() => {
    function dragHandler(e){
     e.dataTransfer.setData('text/plain', dragRef.current.src);
     e.dataTransfer.setDragImage(image_url_small,10,10);
     e.dataTransfer.effectAllowed = "move";
    }

    window.addEventListener("DOMContentLoaded", dragHandler);

    return () => {
      window.removeEventListener("DOMContentLoaded", dragHandler);
    }
  });

  return (
  <HoverCard.Root openDelay={700} closeDelay={300}>
      <HoverCard.Trigger asChild className={styles.hoverTrigger} onMouseEnter={triggerEnter}>
      <img
          ref={dragRef}
          className={styles.cover}
          alt={`Monster ${card.name}`}
          src={image_url}
          draggable={true}
          onDragStart={handleDragStart}
        />
      </HoverCard.Trigger>
   {isHoverCardContentVisible &&  <HoverCard.Content
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
      </HoverCard.Content> }
    </HoverCard.Root>
  )
}

export default MonsterDialog;
