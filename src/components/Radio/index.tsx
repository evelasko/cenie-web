import cn from 'classnames';
import styles from './Radio.module.sass';

type RadioProps = {
  className?: string;
  content: string;
  name: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Radio = ({ className, content, name, value, onChange }: RadioProps) => {
  return (
    <label className={cn(styles.radio, className)}>
      <input
        className={styles.input}
        type="radio"
        name={name}
        onChange={onChange}
        checked={value}
      />
      <span className={styles.inner}>
        <span className={styles.tick}></span>
        <span className={styles.text} dangerouslySetInnerHTML={{ __html: content }}></span>
      </span>
    </label>
  );
};

export default Radio;
