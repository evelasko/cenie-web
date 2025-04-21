'use client';
import { useState } from 'react';
import cn from 'classnames';
import styles from './LangSelector.module.sass';
import OutsideClickHandler from 'react-outside-click-handler';
import Icon from '@/components/Icon';
import { locales } from '@/constants/locales';
import Link from 'next/link';

export default function LangSelector({
  className,
  lang,
  localizedUrls,
}: {
  className: string;
  lang: string;
  localizedUrls: Record<string, string>;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(className, styles.settings, {
          [styles.active]: visible,
        })}
      >
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          {locales[(lang ?? 'en-es') as keyof typeof locales].flag}
          <Icon name="arrow-down" size={16} />
        </button>
        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.col}>
              {/* <div className={styles.category}>Language</div> */}
              <div className={styles.menu}>
                {Object.entries(locales).map(([key, value]) => (
                  <div
                    className={cn(styles.language, {
                      [styles.active]: key === lang,
                    })}
                    key={key}
                  >
                    <Link href={localizedUrls[key] ?? '#'}>
                      <span className={styles.flag}>{value.flag}</span>
                      {value.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
