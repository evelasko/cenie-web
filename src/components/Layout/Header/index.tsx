'use client';
import { useState } from 'react';
import cn from 'classnames';
import styles from './Header.module.sass';
import { usePathname } from 'next/navigation';
import Image from '@/components/Image';
import Dropdown from './Dropdown';
import LangSelector from './LangSelector';
import Theme from '@/components/Theme';
import Link from 'next/link';

export type NavigationEntry = {
  label: string;
  url: string;
  items?: NavigationEntry[];
};

const Header = ({
  headerWide,
  lang,
  localizedUrls,
  navigation,
}: {
  headerWide: boolean;
  lang?: string;
  localizedUrls?: Record<string, string>;
  navigation: NavigationEntry[];
}) => {
  const [visibleNav, setVisibleNav] = useState(false);
  const pathname = usePathname();

  return (
    <header className={cn(styles.header, { [styles.wide]: headerWide })}>
      <div className={cn('container', styles.container)}>
        <Link className={styles.logo} href="/" onClick={() => setVisibleNav(false)}>
          <Image
            className={styles.picDesktop}
            src="/images/logo-light.svg"
            srcDark="/images/logo-dark.svg"
            alt="BitCloud"
          />
          <img className={styles.picMobile} src="/images/logo.svg" alt="BitCloud" />
        </Link>
        <div className={styles.wrapper}>
          <div
            className={cn(styles.wrap, {
              [styles.visible]: visibleNav,
            })}
          >
            <nav className={styles.nav}>
              {(navigation ?? []).map((x, index) =>
                x.items && x.items.length > 0 ? (
                  <Dropdown
                    className={styles.dropdown}
                    key={index}
                    item={x}
                    setValue={setVisibleNav}
                  />
                ) : (
                  <Link
                    className={cn(styles.item, {
                      [styles.active]: pathname === x.url,
                    })}
                    onClick={() => setVisibleNav(false)}
                    href={x.url}
                    key={index}
                  >
                    {x.label}
                  </Link>
                )
              )}
            </nav>
          </div>
          {lang && localizedUrls && (
            <LangSelector className={styles.settings} lang={lang} localizedUrls={localizedUrls} />
          )}
          <div className={styles.control}>
            <Theme className={styles.theme} icon />
          </div>
          <button
            className={cn(styles.burger, {
              [styles.active]: visibleNav,
            })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
