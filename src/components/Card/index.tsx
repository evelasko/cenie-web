import cn from 'classnames';
import styles from './Card.module.sass';
import Play from '@/components/Play';
import Link from 'next/link';

const Card = ({ className, item }: { className: string; item: any }) => {
  return (
    <Link className={cn(className, styles.card)} href={item.url}>
      <div className={styles.preview}>
        {item.categoryText && (
          <div
            className={cn(
              'category',
              {
                'category-purple': item.category === 'purple',
              },
              {
                'category-green': item.category === 'green',
              },
              {
                'category-blue': item.category === 'blue',
              },
              styles.category
            )}
          >
            {item.categoryText}
          </div>
        )}
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
        {item.play && <Play className="play" small />}
      </div>
      <div className={styles.body}>
        <div className={styles.avatar}></div>
        <div className={styles.details}>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.author}>{item.author}</div>
        </div>
        {item.statusText && (
          <div
            className={cn(
              {
                'category-stroke-green': item.status === 'green',
              },
              styles.status
            )}
          >
            {item.statusText}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
