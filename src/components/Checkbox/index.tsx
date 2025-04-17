import cn from "classnames";
import styles from "./Checkbox.module.sass";

type CheckboxProps = {
  className: string;
  content: string;
  note?: string;
  value: boolean;
  onChange: (value: any) => void;
};
const Checkbox = ({ className, content, note, value, onChange }: CheckboxProps) => {
  return (
    <label className={cn(styles.checkbox, className)}>
      <input
        className={styles.input}
        type="checkbox"
        onChange={onChange}
        checked={value}
      />
      <span className={styles.inner}>
        <span className={styles.tick}></span>
        <span
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: content }}
        ></span>
        {note && <span className={styles.note}>{note}</span>}
      </span>
    </label>
  );
};

export default Checkbox;
