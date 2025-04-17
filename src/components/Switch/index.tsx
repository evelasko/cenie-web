import cn from "classnames";
import styles from "./Switch.module.sass";

const Switch = ({ className, value, onChange }: { className?: string; value: boolean; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <label className={cn(styles.switch, className)}>
      <input
        className={styles.input}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <span className={styles.inner}>
        <span className={styles.box}></span>
      </span>
    </label>
  );
};

export default Switch;
