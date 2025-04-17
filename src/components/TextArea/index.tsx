import cn from 'classnames';
import styles from './TextArea.module.sass';

const TextArea = ({
  className,
  label,
  name,
  placeholder,
  required,
  ...props
}: {
  className?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}) => {
  return (
    <div className={cn(styles.field, className)}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.wrap}>
        <textarea
          className={styles.textarea}
          name={name}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextArea;
