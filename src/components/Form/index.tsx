import cn from 'classnames';
import styles from './Form.module.sass';
import Icon from '@/components/Icon';

type FormProps = {
  className: string;
  big?: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  type: string;
  name: string;
  icon: string;
};

const Form = ({
  className,
  big,
  onSubmit,
  placeholder,
  value,
  setValue,
  type,
  name,
  icon,
}: FormProps) => {
  return (
    <form
      className={cn(className, styles.form, {
        [styles.big]: big,
      })}
      action=""
      onSubmit={onSubmit}
    >
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        name={name}
        placeholder={placeholder}
        required
      />
      <button className={styles.btn}>
        <Icon name={icon} size={14} />
      </button>
    </form>
  );
};

export default Form;
