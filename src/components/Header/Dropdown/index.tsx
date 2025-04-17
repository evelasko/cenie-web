'use client';
import { useState } from 'react';
import cn from 'classnames';
import styles from './Dropdown.module.sass';
import OutsideClickHandler from 'react-outside-click-handler';
import { usePathname } from 'next/navigation';
import Icon from '@/components/Icon';
import Link from 'next/link';

const Dropdown = ({
  className,
  item,
  setValue,
}: {
  className: string;
  item: any;
  setValue: (value: boolean) => void;
}) => {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setVisible(false);
    setValue(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(className, styles.dropdown, {
          [styles.active]: visible,
        })}
      >
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          {item.title}
          <Icon name="arrow-down" size={16} />
        </button>
        <div className={styles.body}>
          {item.dropdown.map((x: any, index: number) => (
            <Link
              className={cn(styles.link, {
                [styles.active]: pathname === x.url,
              })}
              href={x.url}
              key={index}
              onClick={() => handleClick()}
            >
              <Icon name={x.icon} size={20} />
              {x.title}
            </Link>
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
