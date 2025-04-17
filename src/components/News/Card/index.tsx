import cn from 'classnames';
import styles from './Card.module.sass';
import Link from 'next/link';

const Card = ({ className, item }) => {
  return (
    <div className={cn(className, styles.card)}>
      <div className={styles.preview}>
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
      </div>
      <div className={styles.wrap}>
        <div className={cn('stage-small', styles.stage)}>{item.stage}</div>

        <div className={styles.title}>{item.title}</div>
        <div className={styles.content}>{item.content}</div>
        <Link className={cn('button-stroke button-small', styles.button)} href={item.url}>
          Join now
        </Link>
      </div>
    </div>
  );
};

export default Card;
