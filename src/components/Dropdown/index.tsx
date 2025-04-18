'use client';
import { useState } from 'react';
import cn from 'classnames';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './Dropdown.module.sass';
import Icon from '@/components/Icon';
type DropdownProps = {
  className?: string;
  classLabel?: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
  label?: string;
  classDropdownHead?: string;
  classDropdownArrow?: string;
  classDropdownBody?: string;
  classDropdownOption?: string;
};
const Dropdown = ({
  className,
  classLabel,
  value,
  setValue,
  options,
  label,
  classDropdownHead,
  classDropdownArrow,
  classDropdownBody,
  classDropdownOption,
}: DropdownProps) => {
  const [visible, setVisible] = useState(false);

  const handleClick = (value: string, index: number) => {
    setValue(value);
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      {label && <div className={cn(classLabel, styles.label)}>{label}</div>}
      <div
        className={cn(styles.dropdown, className, {
          [styles.active]: visible,
        })}
      >
        <div className={cn(classDropdownHead, styles.head)} onClick={() => setVisible(!visible)}>
          <div className={styles.selection}>{value}</div>
          <div className={cn(styles.arrow, classDropdownArrow)}>
            <Icon name="arrow-down" size={24} />
          </div>
        </div>
        <div className={cn(classDropdownBody, styles.body)}>
          {options.map((x, index) => (
            <div
              className={cn(classDropdownOption, styles.option, {
                [styles.selectioned]: x === value,
              })}
              onClick={() => handleClick(x, index)}
              key={index}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
