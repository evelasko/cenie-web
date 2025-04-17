import cn from "classnames";
import styles from "./TextInput.module.sass";
import Icon from "@/components/Icon";

type TextInputProps = {
    className?: string;
    classLabel?: string;
    classInput?: string;
    label?: string;
    empty?: boolean;
    view?: boolean;
    icon?: string;
    note?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    required?: boolean;
};

const TextInput = ({
    className,
    classLabel,
    classInput,
    label,
    empty,
    view,
    icon,
    note,
    name,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
    onFocus,
    ...props
}: TextInputProps) => {
    return (
        <div
            className={cn(
                styles.field,
                { [styles.empty]: empty },
                { [styles.view]: view },
                { [styles.icon]: icon },
                className
            )}
        >
            {label && (
                <div className={cn(classLabel, styles.label)}>{label}</div>
            )}
            <div className={styles.wrap}>
                <input className={cn(classInput, styles.input)} {...props} />
                {view && (
                    <button className={styles.toggle} type="button">
                        <Icon name="eye" size={24} />
                    </button>
                )}
                {icon && (
                    <div className={styles.preview}>
                        <Icon name={icon} size={24} />
                    </div>
                )}
                {note && <div className={styles.note}>{note}</div>}
            </div>
        </div>
    );
};

export default TextInput;
