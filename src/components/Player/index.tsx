import cn from 'classnames';
import styles from './Player.module.sass';
import Icon from '@/components/Icon';

const Player = ({
  className,
  image,
  image2x,
}: {
  className?: string;
  image: string;
  image2x?: string;
}) => {
  return (
    <div className={cn(styles.player, className)}>
      <div className={styles.preview}>
        <img src={image} alt="Video preview" />
        <div className={styles.control}>
          <button className={cn(styles.button, styles.play)}>
            <Icon name="play" size={24} />
          </button>
          <div className={styles.line}>
            <div className={styles.progress} style={{ width: '20%' }}></div>
          </div>
          <div className={styles.time}>2:20</div>
          <button className={styles.button}>
            <Icon name="volume" size={24} />
          </button>
          <button className={styles.button}>
            <Icon name="full-screen" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
