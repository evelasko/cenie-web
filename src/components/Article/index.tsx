import cn from 'classnames';
import styles from './Article.module.sass';
import Share from '@/components/Share';
import Favorite from '@/components/Favorite';
import { PrismicRichText } from '@prismicio/react';
import { RichTextField } from '@prismicio/client';

const Article = ({
  content,
  showShare = false,
  showFavorite = false,
}: {
  content: RichTextField;
  showShare?: boolean;
  showFavorite?: boolean;
}) => {
  return (
    <div className={cn('section', styles.main)}>
      <div className={cn('container', styles.container)}>
        <div className={styles.content}>
          <PrismicRichText field={content} />
        </div>
        <div className={styles.actions}>
          {showShare && <Share openUp />}
          {showFavorite && <Favorite className={styles.favorite} />}
        </div>
      </div>
    </div>
  );
};

export default Article;
