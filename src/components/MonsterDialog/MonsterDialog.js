import React from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import styles from './MonsterDialog.module.css';

function MonsterDialog({yuGiOhCardDetails, trigger}){
    const {img, name} = trigger.props;
    return (
        <HoverCard.Root openDelay={1}>
        <HoverCard.Trigger>
            {React.cloneElement(trigger, {img,name})}
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className={styles.hoverCardContent} sideOffset={5}>
                <div className={styles.contentWrapper}>
                    <h1>{yuGiOhCardDetails.name}</h1>
                    <img alt={`close up of ${yuGiOhCardDetails.name}`} src={yuGiOhCardDetails.img}/>
                    <p>{yuGiOhCardDetails.desc}</p>
                </div>
            <HoverCard.Arrow className={styles.hoverCardArrow}/>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    );
}

export default MonsterDialog;