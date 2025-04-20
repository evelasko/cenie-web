'use client';
import { useState } from 'react';
import cn from 'classnames';
import styles from './Header.module.sass';
import { usePathname } from 'next/navigation';
import Image from '@/components/Image';
import Dropdown from './Dropdown';
import Settings from './Settings';
import Icon from '@/components/Icon';
import Notifications from './Notifications';
import Theme from '@/components/Theme';
import User from './User';
import Link from 'next/link';
const navigation = [
  {
    title: 'Exchange',
    url: '/theme/exchange',
  },
  {
    title: 'Buy Crypto',
    dropdown: [
      {
        title: 'Credit card',
        icon: 'user',
        url: '/theme/buy-crypto',
      },
      {
        title: 'Bank deposit',
        icon: 'image',
        url: '/theme/deposit-fiat',
      },
    ],
  },
  {
    title: 'Market',
    url: '/theme/market',
  },
  {
    title: 'Discover',
    url: '/theme/learn-crypto',
  },
];

const Header = ({ headerWide }: { headerWide: boolean }) => {
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
          {/* <img
                        className={styles.picMobile}
                        src="/images/logo.svg"
                        alt="BitCloud"
                    /> */}
        </Link>
        <div className={styles.wrapper}>
          <div
            className={cn(styles.wrap, {
              [styles.visible]: visibleNav,
            })}
          >
            <nav className={styles.nav}>
              {navigation.map((x, index) =>
                x.dropdown ? (
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
                    {x.title}
                  </Link>
                )
              )}
            </nav>
            <Link
              className={cn('button-stroke', styles.button, {
                [styles.active]: pathname === '/wallet-overview',
              })}
              href="/theme/wallet-overview"
              onClick={() => setVisibleNav(false)}
            >
              Wallet
            </Link>
            {/* <div className={styles.btns}>
                            <Link
                                className={cn("button-small", styles.button)}
                               href="/sign-up"
                            >
                                Sign Up
                            </Link>
                            <Link
                                className={cn(
                                    "button-stroke button-small",
                                    styles.button
                                )}
                               href="/sign-in"
                            >
                                Login
                            </Link>
                        </div> */}
          </div>
          <Settings className={styles.settings} />
          <div className={styles.control}>
            <Link
              className={cn(styles.activity, {
                [styles.active]: pathname === '/theme/activity',
              })}
              href="/theme/activity"
            >
              <Icon name="lightning" size={24} />
            </Link>
            <Notifications className={styles.notifications} />
            <Link
              className={cn('button-stroke button-small', styles.button, {
                [styles.active]: pathname === '/wallet-overview',
              })}
              href="/theme/wallet-overview"
            >
              Wallet
            </Link>
            <Theme className={styles.theme} icon />
            <User className={styles.user} />
          </div>
          {/* <div className={styles.btns}>
                        <Link
                            className={cn("button-small", styles.button)}
                           href="/sign-up"
                            onClick={() => setVisibleNav(false)}
                        >
                            Sign Up
                        </Link>
                        <Link
                            className={cn(
                                "button-stroke button-small",
                                styles.button
                            )}
                           href="/sign-in"
                            onClick={() => setVisibleNav(false)}
                        >
                            Login
                        </Link>
                    </div> */}
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
