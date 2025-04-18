import cn from 'classnames';
import Link from 'next/link';
import styles from './Cards.module.sass';

export type CardItem = {
  title: string;
  price: string;
  money: string;
  positive?: string;
  negative?: string;
  image: string;
  url: string;
};

export type CardsProps = {
  className: string;
  items: CardItem[];
};

const Cards = ({ className, items }: CardsProps) => {
  return (
    <div className={cn(className, styles.cards)}>
      {items.map((x, index) => (
        <Link className={styles.card} key={index} href={x.url}>
          <div className={styles.icon}>
            <img src={x.image} alt="Currency" />
          </div>
          <div className={styles.details}>
            <div className={styles.line}>
              <div className={styles.title}>{x.title}</div>
              {x.positive && <div className={styles.positive}>{x.positive}</div>}
              {x.negative && <div className={styles.negative}>{x.negative}</div>}
            </div>
            <div className={styles.price}>{x.price}</div>
            <div className={styles.money}>{x.money}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
