import cn from 'classnames';
import styles from './Play.module.sass';
import Icon from '@/components/Icon';

const Play = ({ className, small }: { className?: string; small?: boolean }) => {
  return (
    <button
      className={cn(className, styles.play, {
        [styles.small]: small,
      })}
    >
      <Icon name="play" size={24} />
    </button>
  );
};

export default Play;
